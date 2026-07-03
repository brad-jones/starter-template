#!/usr/bin/env -S deno run -qA --ext=ts
import { Command } from "@cliffy/command";
import { Confirm } from "@cliffy/prompt/confirm";
import { Input } from "@cliffy/prompt/input";
import { Select } from "@cliffy/prompt/select";
import { outdent } from "@cspotcode/outdent";
import { $ } from "@david/dax";
import { exists } from "@std/fs";
import * as path from "@std/path";

const REPO_CONFIG_FILE = path.join(import.meta.dirname!, "../.sops.yaml");
const REPO_SECRETS_FILE = path.join(import.meta.dirname!, "../.sops.secrets.yaml");

let SOPS_AGE_KEY_FILE: string | undefined = Deno.env.get("SOPS_AGE_KEY_FILE") ??
  path.join(import.meta.dirname!, "../.sops.age.key");
if (!await exists(SOPS_AGE_KEY_FILE)) {
  SOPS_AGE_KEY_FILE = undefined;
}

await new Command()
  .name("sops")
  .description(`
    A wrapper around the sops command that adds a few extra convenience commands
    that provide a really simple key-value style interface to a set of repo wide secrets.
    Check them out: get, set & rm

    While sops it's self supports a wide variety of encryption backends,
    this wrapper is designed to work with age encryption to keep things
    vendor neutral and simple.

    read more: https://getsops.io/
    also: https://age-encryption.org/
  `)
  .arguments("<subCmd:string> -- [...passThroughArgs:string]")
  .action(async function (_, subCmd) {
    await $`sops ${subCmd} ${this.getLiteralArgs().join(" ")}`.env({ SOPS_AGE_KEY_FILE });
  })
  .command("get", `Retrieves secrets from ${REPO_SECRETS_FILE}`)
  .option("-k, --key <key:string>", "The secret key to decrypt and return", { required: true })
  .action(async ({ key }) => {
    if (!await exists(REPO_SECRETS_FILE)) {
      console.error(`No secrets file found at ${REPO_SECRETS_FILE}`);
      Deno.exit(1);
    }

    const result = await $`sops decrypt ${REPO_SECRETS_FILE} --extract '["${key}"]'`.env({ SOPS_AGE_KEY_FILE })
      .quiet().captureCombined().noThrow();

    if (result.code !== 0) {
      console.error(result.combined.trim());
      Deno.exit(result.code);
    }

    // NB: It's important we trim the result here as sops will return a trailing
    // newline which can cause issues when using the value in other commands.
    console.log(result.combined.trim());
  })
  .command("set", `Adds secrets to ${REPO_SECRETS_FILE}`)
  .option("-k, --key <key:string>", "The secret key to encrypt", { required: true })
  .option("-v, --value <value:string>", "The value of the secret", { required: true })
  .action(async ({ key, value }) => {
    // Handle the initial case where there is no sops config file
    if (!await exists(REPO_CONFIG_FILE)) {
      let publicKey: string;

      const choice = await Select.prompt({
        message: "No sops config found. How would you like to set up age encryption?",
        default: "generate",
        options: [
          { name: "Generate a new age key", value: "generate" },
          { name: "Provide an existing age key", value: "existing" },
        ],
      });

      if (choice === "generate") {
        const result = await $`age-keygen`.quiet();
        const output = result.stdout;

        const pubKeyMatch = output.match(/public key: (age1[a-z0-9]+)/);
        if (!pubKeyMatch) {
          console.error("Failed to parse public key from age-keygen output");
          Deno.exit(1);
        }
        publicKey = pubKeyMatch[1];

        const keyFilePath = path.join(import.meta.dirname!, "../.sops.age.key");
        await Deno.writeTextFile(keyFilePath, output);
        SOPS_AGE_KEY_FILE = keyFilePath;
        console.log(`Age key pair generated and saved to .sops.age.key`);
      } else {
        const keyPath = await Input.prompt({
          message: "Enter the path to your existing age key file",
        });

        const keyContent = await Deno.readTextFile(keyPath);
        const pubKeyMatch = keyContent.match(/public key: (age1[a-z0-9]+)/);
        if (!pubKeyMatch) {
          console.error("Could not find public key in the provided key file.");
          console.error("Expected a comment line like: # public key: age1...");
          Deno.exit(1);
        }
        publicKey = pubKeyMatch[1];

        const saveToRepo = await Confirm.prompt({
          message: "Would you like to save this key to the repo as .sops.age.key?",
          default: true,
        });

        if (saveToRepo) {
          const keyFilePath = path.join(import.meta.dirname!, "../.sops.age.key");
          await Deno.writeTextFile(keyFilePath, keyContent);
          SOPS_AGE_KEY_FILE = keyFilePath;
          console.log(`Key saved to .sops.age.key`);
        } else {
          SOPS_AGE_KEY_FILE = keyPath;
          console.log(
            `Hint: set the env var SOPS_AGE_KEY_FILE or SOPS_AGE_KEY at decryption time.`,
          );
        }
      }

      // Write the sops config file with the public key
      await Deno.writeTextFile(
        REPO_CONFIG_FILE,
        outdent`
          # spec: https://getsops.io/docs/#using-sopsyaml-conf-to-select-kms-pgp-and-age-for-new-files

          creation_rules:
            - age: ${publicKey}
        `,
      );
      console.log(`Sops config written to .sops.yaml`);
    }

    // Handle the initial case where there is no secrets file
    if (!await exists(REPO_SECRETS_FILE)) {
      await $`sops encrypt --filename-override ${path.basename(REPO_SECRETS_FILE)} --output ${REPO_SECRETS_FILE}`
        .stdinText(JSON.stringify({}));
    }

    // Once the sops metadata is written we can set values in the file
    await $`sops set ${REPO_SECRETS_FILE} '["${key}"]' ${JSON.stringify(value)}`.env({ SOPS_AGE_KEY_FILE });
  })
  .command("rm", `Removes secrets from ${REPO_SECRETS_FILE}`)
  .option("-k, --key <key:string>", "The secret key to remove", { required: true })
  .action(async ({ key }) => {
    if (!await exists(REPO_SECRETS_FILE)) {
      console.error(`No secrets file found at ${REPO_SECRETS_FILE}`);
      Deno.exit(1);
    }

    await $`sops unset ${REPO_SECRETS_FILE} '["${key}"]'`.env({ SOPS_AGE_KEY_FILE });
  })
  .parse();

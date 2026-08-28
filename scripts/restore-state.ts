#!/usr/bin/env -S deno run -qA --ext=ts
import { Command } from "@cliffy/command";
import { $ } from "@david/dax";
import { join } from "@std/path";
import { STATE_FILE_NAME } from "./save-state.ts";

await new Command()
  .name("restore-state")
  .description(
    "Runs the given verification commands, restoring the snapshot taken by save-state.ts if any of them fail.",
  )
  .option(
    "--verify-with <command:string>",
    "A command to run to verify the changes made since save-state.ts. Can be given multiple times.",
    { collect: true, required: true },
  )
  .action(async ({ verifyWith }) => {
    const gitDir = (await $`git rev-parse --git-dir`.text()).trim();
    const stateFile = join(gitDir, STATE_FILE_NAME);
    const { stashed } = JSON.parse(await Deno.readTextFile(stateFile));

    const revert = async () => {
      console.error("restore-state: verification failed, reverting changes...");
      await $`git reset --hard HEAD`.noThrow();
      await $`git clean -fd`.noThrow();
      if (stashed) {
        await $`git stash pop stash@{0}`.noThrow();
      }
    };

    for (const command of verifyWith) {
      const result = await $.raw`${command}`.noThrow();
      if (result.code !== 0) {
        await revert();
        await Deno.remove(stateFile);
        Deno.exit(result.code);
      }
    }

    // Everything passed, so the pre-fix snapshot is no longer needed.
    if (stashed) {
      await $`git stash drop stash@{0}`;
    }
    await Deno.remove(stateFile);
    console.log("restore-state: fixes verified successfully.");
  })
  .parse();

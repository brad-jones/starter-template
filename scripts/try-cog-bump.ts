#!/usr/bin/env -S deno run -qA --ext=ts
import { Command } from "@cliffy/command";
import { $ } from "@david/dax";

await new Command()
  .name("try-cog-bump")
  .action(async () => {
    // NB: cocogitto has a quirk where, if HEAD is exactly the commit that was
    // just tagged (e.g. this workflow is re-run without any new commits
    // having landed since the last release), it still treats that tag's own
    // "chore(version): vX.Y.Z" commit as an unreleased commit and bumps again.
    // see: https://github.com/cocogitto/cocogitto/blob/main/crates/cocogitto/src/git/rev/revwalk.rs#L120-L125
    //
    // Guard against this by skipping the bump entirely when HEAD is already
    // an exact tag match, since there's nothing new to release in that case.
    const exactTag = await $`git describe --tags --exact-match HEAD`
      .captureCombined().noThrow();

    if (exactTag.code === 0) {
      console.log(`nothing to do, HEAD is already released as ${exactTag.combined.trim()}.`);
      Deno.exit(0);
    }

    const dryRunResult = await $`cog bump -d --skip-untracked --auto`
      .captureCombined().noThrow();

    if (dryRunResult.code > 0) {
      if (dryRunResult.combined.includes("cause: No conventional commit found to bump current version.")) {
        console.log("nothing to do, no conventional commit found to bump current version.");
        Deno.exit(0);
      }

      console.error(dryRunResult.combined);
      Deno.exit(dryRunResult.code);
    }

    const result = await $`cog bump --auto`.noThrow();
    Deno.exit(result.code);
  })
  .parse();

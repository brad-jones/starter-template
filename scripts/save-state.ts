#!/usr/bin/env -S deno run -qA --ext=ts
import { Command } from "@cliffy/command";
import { $ } from "@david/dax";
import { join } from "@std/path";

export const STATE_FILE_NAME = "save-state.json";

if (import.meta.main) {
  await new Command()
    .name("save-state")
    .description(
      "Snapshots the current working tree so it can later be restored by restore-state.ts.",
    )
    .action(async () => {
      const gitDir = (await $`git rev-parse --git-dir`.text()).trim();
      const isDirty = (await $`git status --porcelain`.text()).trim().length > 0;

      // Snapshot the working tree (including untracked files) so it can be restored exactly
      // if verification fails later. `apply` immediately restores the snapshot to the working
      // tree, keeping it in the stash list as a backup.
      if (isDirty) {
        await $`git stash push --include-untracked -m save-state-backup`;
        await $`git stash apply stash@{0}`;
      }

      await Deno.writeTextFile(join(gitDir, STATE_FILE_NAME), JSON.stringify({ stashed: isDirty }));
    })
    .parse();
}

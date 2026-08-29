# Brads Starter Template

This repo represents what Brad thinks good looks like & serves as a template for new projects.

## Whats Included

- [Pixi](https://pixi.prefix.dev/latest/): a fast, modern, and reproducible package management tool for developers of
  all backgrounds.
- [Taskfile](https://taskfile.dev/): a fast, cross-platform build tool inspired by Make, designed for modern workflows.
- [Deno](https://deno.com/): Uncomplicate JavaScript, Deno is the open-source JavaScript runtime for the modern web.
- [APM](https://microsoft.github.io/apm/): a package manager for agent instructions, skills, and rules, compiling them
  to whichever coding agent you use.
- [Lefthook](https://lefthook.dev/): a Git hooks manager, Fast, Powerful, Simple.
- [Dprint](https://dprint.dev/): A pluggable and configurable code formatting platform written in Rust.
- [Cocogitto](https://docs.cocogitto.io/): The conventional commit toolbox.

And many other tools and utilities to make your development experience smoother and more efficient. For exact details on
why we decided to use the tools we did, see our ADRs in the `docs/decisions/` directory.

## Getting Started

Follow Github's guide on
[Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
or otherwise copy this repo to your new project.

**Then remove what you don't need and add what you do!**

For example if you don't need .NET SDK management, you can remove `dotnetup` from `pixi.toml`, the references to it in
`Taskfile.yaml`/`dprint.json`, the `dotnet-tools.json` & `global.json`.

The idea behind this template is to provide everything including the kitchen sink for all the various languages and
frameworks that Brad currently uses on the regular but that doesn't necessarily imply that every project needs to use
all of these tools.

### direnv (optional)

[direnv](https://direnv.net/) is a shell extension that loads and unloads environment variables based on the current
directory. This repo's `.envrc` uses it to automatically activate the pixi environment (via `pixi shell-hook`) and run
`task init` whenever you `cd` into the project, so you don't have to remember to do it yourself.

It's an optional convenience, not a requirement: nothing in this repo depends on direnv being installed, and everything
it does for you can also be done manually (`pixi shell`, `task init`). If you want the automation, install direnv
yourself and [hook it into your shell](https://direnv.net/docs/hook.html); it isn't managed by pixi because it needs to
be active before pixi's own shell hook can run.

#### Silencing direnv for AI agents

direnv prints a `direnv: loading ...` / `direnv: export ...` line every time it (re)loads `.envrc`. That's useful for a
human in an interactive terminal, but it's just noise cluttering the output an AI coding agent sees when it runs shell
commands, and can make it harder for the agent to see the actual output. This repo silences it for VS Code's Copilot
Chat terminal specifically (see `chat.tools.terminal.terminalProfile.linux` in `.vscode/settings.json`), but that only
covers that one surface.

Terminal-based agents (Claude Code, Copilot CLI, etc.) run in your normal shell, so there's no per-repo hook that can
catch them - direnv reads its `DIRENV_LOG_FORMAT` setting from the environment _before_ `.envrc` gets a chance to run,
so nothing in this repo can change it in time. If you want those agents silenced too, add a guard to your own shell rc,
before the line that installs the `direnv hook`, that sets `DIRENV_LOG_FORMAT=""` only when an agent-specific
environment variable is present (see the comment in `.envrc` for the exact recipe). This also requires a
`~/.config/direnv/direnv.toml` to exist (any content, even empty) - direnv 2.36+ only honors `DIRENV_LOG_FORMAT` from
the environment when that file is present.

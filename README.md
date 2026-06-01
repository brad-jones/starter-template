# Brads Starter Template

This repo represents what Brad thinks good looks like & serves as a template for new projects.

## Whats Included

- [Pixi](https://pixi.prefix.dev/latest/): a fast, modern, and reproducible package management tool for developers of
  all backgrounds.
- [Taskfile](https://taskfile.dev/): a fast, cross-platform build tool inspired by Make, designed for modern workflows.
- [Deno](https://deno.com/): Uncomplicate JavaScript, Deno is the open-source JavaScript runtime for the modern web.
- [Xcaf](https://www.xcaffold.com/): Declare your agent harness once. Compile to any tool. Detect drift. Enforce policy.
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

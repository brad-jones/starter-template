---
status: accepted
date: 2026-06-01
---

# Use dotnetup for .NET SDK management

## Context and Problem Statement

Projects in this monorepo may target multiple .NET framework versions simultaneously. We need a way to install and
manage .NET SDKs in the development environment. How should we manage .NET SDK installations?

## Considered Options

- [`dotnetup`](https://github.com/brad-jones/dotnetup)
- Install dotnet via pixi _([dotnet-feedstock](https://github.com/conda-forge/dotnet-feedstock))_

## Decision Outcome

Chosen option: "dotnetup", because it supports side-by-side installation of multiple .NET SDK versions, which is a hard
requirement when projects target different framework versions simultaneously.

### Consequences

- Good, because multiple .NET SDK versions can be installed and used side by side.
- Good, because dotnetup follows the same mental model as rustup, which is familiar and well-understood.
- Bad, because dotnet is managed outside of pixi, so it is not captured in the lockfile like other dependencies.

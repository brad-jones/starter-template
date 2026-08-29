# Changelog
All notable changes to this project will be documented in this file. See [conventional commits](https://www.conventionalcommits.org/) for commit guidelines.

- - -
## [v0.4.0](https://github.com/brad-jones/starter-template/compare/7b7d3e241405f26f9b7b622fcfbd17b915d9f1de..v0.4.0) - 2026-08-29
#### Features
- (**agents**) migrate from xcaffold to apm for agent configuration - ([9c7522b](https://github.com/brad-jones/starter-template/commit/9c7522b72bb0ee161c1670f7913187276eb74de0)) - [@brad-jones](https://github.com/brad-jones)
- (**vscode**) disable python venv activation - ([8890c1d](https://github.com/brad-jones/starter-template/commit/8890c1d505dcc2d458dc728a924c0aff90424b6a)) - [@brad-jones](https://github.com/brad-jones)
- (**vscode**) add custom terminal profile for powershell - ([5d36f59](https://github.com/brad-jones/starter-template/commit/5d36f590143e9e5c29de0c137e94dc935a4ed754)) - [@brad-jones](https://github.com/brad-jones)
- add Python tooling support with uv, ruff, and pyright - ([79d0281](https://github.com/brad-jones/starter-template/commit/79d028188dbc93547b522aa4deab90ad8dfccc79)) - [@brad-jones](https://github.com/brad-jones)
#### Bug Fixes
- (**init**) the DIRENV_INIT check never really worked, use GoTasks checksum based cache instead - ([b227b9e](https://github.com/brad-jones/starter-template/commit/b227b9e4611cf7adb8e8f7afff63a7fcf2c6ba5d)) - [@brad-jones](https://github.com/brad-jones)
- (**lefthook**) run lint task on pre-commit - ([dd02093](https://github.com/brad-jones/starter-template/commit/dd02093efdc856f2a85ac4fcfbaadc6f667ee241)) - [@brad-jones](https://github.com/brad-jones)
- (**vscode**) finally figured out how to make copilot not use fish - ([e2869be](https://github.com/brad-jones/starter-template/commit/e2869bec4cac1995fb4d44a9eb8189877405ec65)) - [@brad-jones](https://github.com/brad-jones)
#### Documentation
- silence direnv chatter for AI agents - ([3ebc82f](https://github.com/brad-jones/starter-template/commit/3ebc82f583b59212c6642b308d609c50d7c3ebb6)) - [@brad-jones](https://github.com/brad-jones)
#### Miscellaneous Chores
- (**deps**) update renovatebot/github-action action to v46.2.4 - ([c1f6667](https://github.com/brad-jones/starter-template/commit/c1f666768a3faea9c29e7ae0c584e9ad22f66f03)) - brads-renovate-bot[bot]
- (**deps**) update prefix-dev/setup-pixi action to v0.10.1 - ([85cc2c7](https://github.com/brad-jones/starter-template/commit/85cc2c7530aa761a3137199a8e4e78ff341c3711)) - brads-renovate-bot[bot]
- (**deps**) update dependency dotnet-sdk to v10.0.400 - ([dcd827c](https://github.com/brad-jones/starter-template/commit/dcd827c40f4d46bfc62bef5700ae750cdc91f16f)) - brads-renovate-bot[bot]
- (**deps**) update pixi - ([7b7d3e2](https://github.com/brad-jones/starter-template/commit/7b7d3e241405f26f9b7b622fcfbd17b915d9f1de)) - brad-jones
- (**pixi**) bump all versions - ([5d07c43](https://github.com/brad-jones/starter-template/commit/5d07c43377306dc740e8f68a568bcd95c1cf8349)) - [@brad-jones](https://github.com/brad-jones)
#### Style
- (**dprint**) update to latest version, apply new formatting and fix csharpier integration - ([9de4d1b](https://github.com/brad-jones/starter-template/commit/9de4d1bd6776b812579e0f222454bec960cffd59)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.3.4](https://github.com/brad-jones/starter-template/compare/97dc4ec6d7772ef1276d3325d0a09fc4fafa2021..v0.3.4) - 2026-07-22
#### Miscellaneous Chores
- (**deps**) update pixi - ([5c0fea2](https://github.com/brad-jones/starter-template/commit/5c0fea221fad4d83f84e96ca25540a465af68cbb)) - brad-jones
- (**deps**) update renovatebot/github-action action to v46.1.20 - ([97dc4ec](https://github.com/brad-jones/starter-template/commit/97dc4ec6d7772ef1276d3325d0a09fc4fafa2021)) - brads-renovate-bot[bot]

- - -

## [v0.3.3](https://github.com/brad-jones/starter-template/compare/104dcefe9ce827fe8a661910da2e3d2760ae5bd3..v0.3.3) - 2026-07-17
#### Miscellaneous Chores
- (**deps**) update pixi - ([104dcef](https://github.com/brad-jones/starter-template/commit/104dcefe9ce827fe8a661910da2e3d2760ae5bd3)) - brad-jones

- - -

## [v0.3.2](https://github.com/brad-jones/starter-template/compare/1c15bc1cbd88780b1938a537dd9b72568adbc680..v0.3.2) - 2026-07-17
#### Continuous Integration
- (**pixi**) use the renovate bot github app for the pixi update too because we are now making edits to the workflow files - ([1c15bc1](https://github.com/brad-jones/starter-template/commit/1c15bc1cbd88780b1938a537dd9b72568adbc680)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.3.1](https://github.com/brad-jones/starter-template/compare/b2eac26ca0f5569619c552a97d8886a33652e2af..v0.3.1) - 2026-07-17
#### Continuous Integration
- remove add-paths restriction from pixi update PR - ([b2eac26](https://github.com/brad-jones/starter-template/commit/b2eac26ca0f5569619c552a97d8886a33652e2af)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.3.0](https://github.com/brad-jones/starter-template/compare/a484490ec630f33695a699bf29369e3183acac28..v0.3.0) - 2026-07-17
#### Features
- (**pixi**) include workflow changes in pixi update PR - ([a484490](https://github.com/brad-jones/starter-template/commit/a484490ec630f33695a699bf29369e3183acac28)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.2.14](https://github.com/brad-jones/starter-template/compare/8513de67c1a5ed335c4574f4febb9eed597b6b06..v0.2.14) - 2026-07-17
#### Continuous Integration
- (**pixi**) run the sync-gha-pixi-version script - ([8513de6](https://github.com/brad-jones/starter-template/commit/8513de67c1a5ed335c4574f4febb9eed597b6b06)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.2.13](https://github.com/brad-jones/starter-template/compare/288a66211c598f1cfc9ef46ed57e4b30987891bb..v0.2.13) - 2026-07-17
#### Continuous Integration
- (**renovate**) add note about Github App naming - ([288a662](https://github.com/brad-jones/starter-template/commit/288a66211c598f1cfc9ef46ed57e4b30987891bb)) - [@brad-jones](https://github.com/brad-jones)
#### Miscellaneous Chores
- (**deps**) update actions/checkout action to v7 - ([c7eecf6](https://github.com/brad-jones/starter-template/commit/c7eecf6bf9e5249f72892dd97fcb4c42440a0d9a)) - brads-renovate-bot[bot]

- - -

## [v0.2.12](https://github.com/brad-jones/starter-template/compare/c3f65799c81a5e87fa81ca3740896aa54456d699..v0.2.12) - 2026-07-17
#### Continuous Integration
- (**renovate**) fix name of my custom renovate bot, attempt #2 - ([c3f6579](https://github.com/brad-jones/starter-template/commit/c3f65799c81a5e87fa81ca3740896aa54456d699)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.2.11](https://github.com/brad-jones/starter-template/compare/0f7f6d3b2cd660f07074726cfbad117bcce062cb..v0.2.11) - 2026-07-17
#### Continuous Integration
- (**renovate**) fix name of my custom renovate bot - ([0f7f6d3](https://github.com/brad-jones/starter-template/commit/0f7f6d3b2cd660f07074726cfbad117bcce062cb)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.2.10](https://github.com/brad-jones/starter-template/compare/121eb918098cf382c361093b345d1c367d522d28..v0.2.10) - 2026-07-17
#### Continuous Integration
- (**renovate**) update Dependency Dashboard issue number after new issue created by github app - ([121eb91](https://github.com/brad-jones/starter-template/commit/121eb918098cf382c361093b345d1c367d522d28)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.2.9](https://github.com/brad-jones/starter-template/compare/82e9c7e9b4318ead9a6e22be0623b95fb3ac011d..v0.2.9) - 2026-07-17
#### Bug Fixes
- (**ci**) inline renovate issue values in job-level if condition - ([82e9c7e](https://github.com/brad-jones/starter-template/commit/82e9c7e9b4318ead9a6e22be0623b95fb3ac011d)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.2.8](https://github.com/brad-jones/starter-template/compare/2c142555a16a414f942ba06a543b81a81dfd8574..v0.2.8) - 2026-07-17
#### Continuous Integration
- (**renovate**) authenticate with GitHub App and rerun on dashboard edits - ([2c14255](https://github.com/brad-jones/starter-template/commit/2c142555a16a414f942ba06a543b81a81dfd8574)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.2.7](https://github.com/brad-jones/starter-template/compare/fa82dba362ee85868fde5a7396132c2581210b16..v0.2.7) - 2026-07-17
#### Miscellaneous Chores
- (**deps**) update renovatebot/github-action action to v46.1.19 - ([9977420](https://github.com/brad-jones/starter-template/commit/9977420bc69ae2235c22597b2317bbb9b9ab3739)) - [@brad-jones](https://github.com/brad-jones)
- (**deps**) update prefix-dev/setup-pixi action to v0.10.0 - ([fa82dba](https://github.com/brad-jones/starter-template/commit/fa82dba362ee85868fde5a7396132c2581210b16)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.2.6](https://github.com/brad-jones/starter-template/compare/d43388fb088f245367ca4e1dc45682607061fb0e..v0.2.6) - 2026-07-17
#### Continuous Integration
- use dedicated RENOVATE_TOKEN for update workflow - ([d43388f](https://github.com/brad-jones/starter-template/commit/d43388fb088f245367ca4e1dc45682607061fb0e)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.2.5](https://github.com/brad-jones/starter-template/compare/8b785f052b52c6c6a0b35116ef9b490b50a8035c..v0.2.5) - 2026-07-17
#### Miscellaneous Chores
- (**pixi**) update pixi lockfile - ([8b785f0](https://github.com/brad-jones/starter-template/commit/8b785f052b52c6c6a0b35116ef9b490b50a8035c)) - brad-jones

- - -

## [v0.2.4](https://github.com/brad-jones/starter-template/compare/2a476a19c997b08bd3043c3713b8f86075ea4e48..v0.2.4) - 2026-07-17
#### Miscellaneous Chores
- (**deps**) update dependency dotnet-sdk to v10.0.302 - ([2a476a1](https://github.com/brad-jones/starter-template/commit/2a476a19c997b08bd3043c3713b8f86075ea4e48)) - github-actions[bot]

- - -

## [v0.2.3](https://github.com/brad-jones/starter-template/compare/260834416369e616732889c2975f6452e7f96036..v0.2.3) - 2026-07-13
#### Miscellaneous Chores
- (**pixi**) update pixi lockfile - ([2608344](https://github.com/brad-jones/starter-template/commit/260834416369e616732889c2975f6452e7f96036)) - brad-jones

- - -

## [v0.2.2](https://github.com/brad-jones/starter-template/compare/4835b47324b4a3757cc31faee82fd35a2c1ca3a8..v0.2.2) - 2026-07-13
#### Miscellaneous Chores
- (**deps**) update dependency @david/dax to ^0.49.0 - ([4835b47](https://github.com/brad-jones/starter-template/commit/4835b47324b4a3757cc31faee82fd35a2c1ca3a8)) - github-actions[bot]

- - -

## [v0.2.1](https://github.com/brad-jones/starter-template/compare/8a6e34b5917104672b68256b9c9fcd0b77aeb971..v0.2.1) - 2026-07-09
#### Miscellaneous Chores
- (**pixi**) update pixi lockfile (#6) - ([8a6e34b](https://github.com/brad-jones/starter-template/commit/8a6e34b5917104672b68256b9c9fcd0b77aeb971)) - github-actions[bot], brad-jones

- - -

## [v0.2.0](https://github.com/brad-jones/starter-template/compare/6dcb30e0cdc19208c161310898ce4ffe19a845e1..v0.2.0) - 2026-07-03
#### Features
- (**sops**) add sops with age for secret management - ([6dcb30e](https://github.com/brad-jones/starter-template/commit/6dcb30e0cdc19208c161310898ce4ffe19a845e1)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.1.10](https://github.com/brad-jones/starter-template/compare/d53ea6b075a53769c79497fad1fe3fa36bb22d6d..v0.1.10) - 2026-07-03
#### Build system
- bump dependencies across all toolchains - ([d53ea6b](https://github.com/brad-jones/starter-template/commit/d53ea6b075a53769c79497fad1fe3fa36bb22d6d)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.1.9](https://github.com/brad-jones/starter-template/compare/e33ce938f893c5ccae0192482f125677ac7b896a..v0.1.9) - 2026-07-03
#### Miscellaneous Chores
- (**pixi**) update pixi lockfile (#3) - ([e33ce93](https://github.com/brad-jones/starter-template/commit/e33ce938f893c5ccae0192482f125677ac7b896a)) - github-actions[bot], brad-jones

- - -

## [v0.1.8](https://github.com/brad-jones/starter-template/compare/7363caced701926544ed3af954a1cf78a84e2ae0..v0.1.8) - 2026-07-03
#### Miscellaneous Chores
- (**deps**) update dependency dotnet-outdated-tool to v4.8.1 (#4) - ([7363cac](https://github.com/brad-jones/starter-template/commit/7363caced701926544ed3af954a1cf78a84e2ae0)) - github-actions[bot], github-actions[bot]

- - -

## [v0.1.7](https://github.com/brad-jones/starter-template/compare/3bd1606ba37109aefe6071cfc1a926a18bdf816e..v0.1.7) - 2026-07-03
#### Miscellaneous Chores
- (**deps**) update dependency dotnet-sdk to v10.0.301 (#5) - ([3bd1606](https://github.com/brad-jones/starter-template/commit/3bd1606ba37109aefe6071cfc1a926a18bdf816e)) - github-actions[bot], github-actions[bot]

- - -

## [v0.1.6](https://github.com/brad-jones/starter-template/compare/626b88ec88e363b994e967b0ea6ca9b3af24a460..v0.1.6) - 2026-07-03
#### Documentation
- (**ci**) add note about required workflow permissions - ([11a1379](https://github.com/brad-jones/starter-template/commit/11a1379673325de5d854eab5988366f34a422fdd)) - [@brad-jones](https://github.com/brad-jones)
#### Continuous Integration
- (**update**) change renovate schedule from monthly to daily - ([626b88e](https://github.com/brad-jones/starter-template/commit/626b88ec88e363b994e967b0ea6ca9b3af24a460)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.1.5](https://github.com/brad-jones/starter-template/compare/a7daa9bf55f96f9ef355143e1fa76a78fb101259..v0.1.5) - 2026-06-01
#### Documentation
- (**adr**) use Renovate over Dependabot for dependency updates - ([a7daa9b](https://github.com/brad-jones/starter-template/commit/a7daa9bf55f96f9ef355143e1fa76a78fb101259)) - [@brad-jones](https://github.com/brad-jones)
- (**taskfile**) clarify update task description and add summary - ([ff65468](https://github.com/brad-jones/starter-template/commit/ff65468a59cbeb7103aba7fc62271bb6315b8374)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.1.4](https://github.com/brad-jones/starter-template/compare/26aca3de981e5e53282d676a854f2e7bb46e4071..v0.1.4) - 2026-06-01
#### Bug Fixes
- (**renovatebot**) give the correct issues write permissions - ([26aca3d](https://github.com/brad-jones/starter-template/commit/26aca3de981e5e53282d676a854f2e7bb46e4071)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.1.3](https://github.com/brad-jones/starter-template/compare/aad0714aa23a4e7e12daa3e7f5ceb1fde3dcd814..v0.1.3) - 2026-06-01
#### Bug Fixes
- (**ci**) set RENOVATE_REPOSITORIES to target current repo - ([68e78a4](https://github.com/brad-jones/starter-template/commit/68e78a4445d053e81f81f6f7e51b064cad9b5a72)) - [@brad-jones](https://github.com/brad-jones)
- (**pixi**) use correct base branch in the pr create step - ([aad0714](https://github.com/brad-jones/starter-template/commit/aad0714aa23a4e7e12daa3e7f5ceb1fde3dcd814)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.1.2](https://github.com/brad-jones/starter-template/compare/f66700e398cdcb1f85959c4741cf71200e87e0c3..v0.1.2) - 2026-06-01
#### Continuous Integration
- add renovate self-hosted job to update workflow (#1) - ([f66700e](https://github.com/brad-jones/starter-template/commit/f66700e398cdcb1f85959c4741cf71200e87e0c3)) - Copilot, copilot-swe-agent[bot], brad-jones

- - -

## [v0.1.1](https://github.com/brad-jones/starter-template/compare/75488655d6b314bda9206211364d7d31a0f963df..v0.1.1) - 2026-06-01
#### Continuous Integration
- add copilot setup steps workflow - ([7548865](https://github.com/brad-jones/starter-template/commit/75488655d6b314bda9206211364d7d31a0f963df)) - [@brad-jones](https://github.com/brad-jones)

- - -

## [v0.1.0](https://github.com/brad-jones/starter-template/compare/97cde281feddf69f29f354ef29da4ac17e7e86ec..v0.1.0) - 2026-06-01
#### Features
- (**release**) implement GitHub release workflow with changelog extraction - ([2ac331e](https://github.com/brad-jones/starter-template/commit/2ac331e668fea6d357770e63596bff2e85377809)) - [@brad-jones](https://github.com/brad-jones)
- initial commit - ([97cde28](https://github.com/brad-jones/starter-template/commit/97cde281feddf69f29f354ef29da4ac17e7e86ec)) - [@brad-jones](https://github.com/brad-jones)
#### Bug Fixes
- (**cog-extract-changelog**) deal with the new markdown formatting from dprint - ([44a9614](https://github.com/brad-jones/starter-template/commit/44a961419b07e6b462f80f38513e930ed114db48)) - [@brad-jones](https://github.com/brad-jones)
#### Build system
- (**taskfile**) implement package task with changelog fmt and lint - ([2082f8f](https://github.com/brad-jones/starter-template/commit/2082f8f2b717ed85119656cc4fa858b318438f1d)) - [@brad-jones](https://github.com/brad-jones)
#### Continuous Integration
- (**init**) run init task in pipeline and guard dev-only steps - ([c006f29](https://github.com/brad-jones/starter-template/commit/c006f297440b338e13006b5538e7a30505a50052)) - [@brad-jones](https://github.com/brad-jones)
- (**main**) make the workflow callable via the web ui at will - ([0c58f16](https://github.com/brad-jones/starter-template/commit/0c58f160ee03b1156167ce2a6d012f95590ea73d)) - [@brad-jones](https://github.com/brad-jones)
#### Miscellaneous Chores
- (**cog**) update hook and package keys to current cocogitto schema - ([fcf0a54](https://github.com/brad-jones/starter-template/commit/fcf0a543e0677542ea3ca5470a959a5e78dccf3a)) - [@brad-jones](https://github.com/brad-jones)
#### Style
- (**changelog**) actually I changed my mind, lets just not format the changelog at all - ([6d845b3](https://github.com/brad-jones/starter-template/commit/6d845b3f970537aa8b146e12ff03b5a7bf98b7a4)) - [@brad-jones](https://github.com/brad-jones)

- - -

Changelog generated by [cocogitto](https://github.com/cocogitto/cocogitto).
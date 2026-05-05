[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/pavelzbornik/apps-script-devcontainer)
# Dev Container - Google Apps Script
A reusable scaffold for working on Google Apps Script in a VS Code or Gitpod container.

> This repository is a [GitHub template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template). Click **"Use this template"** on GitHub to spin up your own project from it.

## Quick Start

Login the user
```
clasp login --no-localhost
```

Create a new Project
```
clasp create --title "Title" --type standalone --rootDir ./src
clasp create --title "Title" --type forms --rootDir ./src
clasp create --title "Title" --parentId "*******" --rootDir ./src
```

Clone and work on an existing project
```
clasp clone "*******" --rootDir ./src
```

Watch and push code when saved
```
clasp push --watch
```

Edit (if need to)
- .clasp.json
```
"rootDir": "./src"
```
- appsscript.json
```
"timeZone": "Asia/Singapore"
```

### other useful commands

Open in the script editor
```
clasp open
```

## Clasp

- https://github.com/google/clasp
- https://developers.google.com/apps-script/guides/clasp

## VS Code

Preamble
- Install Docker Desktop if not installed
- Install the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension in VS Code
- Run Docker Desktop
- Open repo folder with VS Code, then run *Dev Containers: Reopen in Container* from the Command Palette

Container composition
- See the [devcontainers/images source](https://github.com/devcontainers/images/tree/main/src/typescript-node)
- `FROM mcr.microsoft.com/devcontainers/typescript-node:1-20` (Node 20)

## Gitpod

- Click on this button [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/pavelzbornik/apps-script-devcontainer)
- Sign in with your GitHub account to start

Container conposition
- `FROM gitpod/workspace-full` [Dockerfile](https://github.com/gitpod-io/workspace-images/blob/master/full/Dockerfile)
- `FROM buildpack-deps:focal` [Dockerfile](https://github.com/docker-library/buildpack-deps/blob/master/ubuntu/focal/Dockerfile)
- Ubuntu Focal based

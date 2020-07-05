[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)
# Dev Container - Google Apps Script
A setup for working on Google Apps Script in a VS Code or Gitpod container

## Clasp

- https://github.com/google/clasp
- https://developers.google.com/apps-script/guides/clasp

Login
```
clasp login --no-localhost
```

Create a Project
```
clasp create --title "Clasp Demo" --type standalone
```

Edit
.clasp.json
```
"rootDir": "src"
```

appsscript.json
```
"timeZone": "Asia/Singapore"
```

## VS Code

Preamble
- Install Docker Desktop if not installed
- Install the Remote Development extension pack in VS Code
- Run Docker Desktop
- Open repo folder with VS Code using *Run Remote-Containers: Open Folder in Container...*

Container composition
- using this [Dockerfile](https://github.com/microsoft/vscode-dev-containers/blob/master/containers/typescript-node-12/.devcontainer/Dockerfile)
- `FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:12`

## Gitpod

- Click on this button [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/lcenchew/dev-container-gas)
- Sign in with yout Github account to start

Container conposition
- `FROM gitpod/workspace-full` [Dockerfile](https://github.com/gitpod-io/workspace-images/blob/master/full/Dockerfile)
- `FROM buildpack-deps:focal` [Dockerfile](https://github.com/docker-library/buildpack-deps/blob/master/ubuntu/focal/Dockerfile)
- Ubuntu Focal based

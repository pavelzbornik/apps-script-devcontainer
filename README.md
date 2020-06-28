# Dev Container - Google App Script
A setup for working on Google App Script in a VS Code or Gitpod container

## VS Code

Preamble
- Install Docker Desktop if not installed
- Install the Remote Development extension pack in VS Code
- Run Docker Desktop
- Open repo folder with VS Code using *Run Remote-Containers: Open Folder in Container...*

Container composition
- using this [Dockerfile](https://github.com/microsoft/vscode-dev-containers/blob/master/containers/typescript-node-12/.devcontainer/Dockerfile)
- `FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:12`

To start lite-server
```
npm start 
```
## Gitpod

- Click on this button [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/lcenchew/dev-container-gas)
- Sign in with yout Github account to start

Container conposition
- `FROM gitpod/workspace-full` [Dockerfile](https://github.com/gitpod-io/workspace-images/blob/master/full/Dockerfile)
- `FROM buildpack-deps:focal` [Dockerfile](https://github.com/docker-library/buildpack-deps/blob/master/ubuntu/focal/Dockerfile)
- Ubuntu Focal based

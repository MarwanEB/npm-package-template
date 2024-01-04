# npm-package-template

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Build Status](https://github.com/MarwanEB/npm-package-template/actions/workflows/main.yaml/badge.svg)](https://github.com/MarwanEB/npm-package-template/actions/workflows/main.yaml)
[![Code coverage](https://codecov.io/gh/MarwanEB/npm-package-template/graph/badge.svg?token=ZFK2TXK7D1)](https://codecov.io/gh/MarwanEB/npm-package-template)

An opinionated ready-to-use vanilla Typescript npm package template.

## Dependencies 🔗

To bundle this project you need to install [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) (this will allow you to install and use the correct version of Node.js / npm for this project).

Library bundles with [tsup](https://tsup.egoist.dev/).

## How to use 📖

1. Install the right version of node / npm

```sh
$ nvm install && nvm use
```

2. Install dependencies

```sh
$ npm ci
```

3. Add your code to `src`
4. Add export statement to `src/index.ts`
5. You can build your code with the following command (once the command works properly, you will see `dist` folder)
6. Publish your package

```zsh
$ npm publish
```

## TODO 📝

- Add tight eslint rules

## Credit 🙏

Project forked from [koji/npm-package-template-with-tsup](https://github.com/koji/npm-package-template-with-tsup).

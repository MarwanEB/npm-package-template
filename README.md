# npm-package-template

An opinionated ready-to-use vanilla Typescript npm package template.

## Dependencies 🔗

To bundle this project you need to install the following dependencies:

- [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) – this will allow you to install and use the correct version of Node.js / npm for this project.

Library bundles with [tsup](https://tsup.egoist.dev/).

## How to use 📖

1. Install the right version of node / npm

```sh
$ nvm install && nvm use
```

2. Install dependencies

```sh
$ npm install
```

3. Add your code to `src`
4. Add export statement to `src/index.ts`
5. You can build your code with the following command (once the command works properly, you will see `dist` folder)
6. Publish your package

```zsh
$ npm publish
```

```sh
> pnpm run build
```

## TODOs 📝

- Add Github actions
- Add tight eslint rules
- Try with package `beautiful-sql-string`

## Credit 🙏

Project forked from [koji/npm-package-template-with-tsup](https://github.com/koji/npm-package-template-with-tsup).

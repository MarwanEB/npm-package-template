# npm-package-template

This projects provides a ready-to-use vanilla Typescript npm package template to be used.

## Dependencies 🔗

To bundle this project you need

- [Node.js](https://nodejs.org/en/): `v21.5.0`
- [pnpm](https://pnpm.io/): `8.11.0`

Library bundles with [tsup](https://tsup.egoist.dev/).

## How to use 📖

1. Install dependencies

```sh
> pnpm install
```

2. Add your code to `src`
3. Add export statement to `src/index.ts`
4. You can build your code with the following command (once the command works properly, you will see `dist` folder)
5. Publish your package

```zsh
$ npm publish
```

```sh
> pnpm run build
```

## TODOs 📝

- Add tight eslint rules
- Try with package `beautiful-sql-string`

## Credit 🙏

Project forked from [koji/npm-package-template-with-tsup](https://github.com/koji/npm-package-template-with-tsup).

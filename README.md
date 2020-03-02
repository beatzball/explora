# TREATy

Get started building a React Application quickly with:

- **T** ailwind CSS
- **REA** ct
- **Ty** pescript

## Table of Contents

- [TREATy](#treaty)
  - [Table of Contents](#table-of-contents)
  - [Get Started](#get-started)
    - [Clone the repo](#clone-the-repo)
    - [Installation](#installation)
    - [Start Development](#start-development)
    - [Production Build](#production-build)
    - [Testing](#testing)
  - [More Context](#more-context)
    - [Environment Variables using `.env`](#environment-variables-using-env)
    - [Tailwind CSS](#tailwind-css)
  - [Learn More](#learn-more)

## Get Started

### Clone the repo

```shell
$ git clone --depth=1 https://github.com/beatzball/TREATy.git <YOUR_PROJECT_NAME>
$ cd <YOUR_PROJECT_NAME>
```

### Installation

`package-lock.json` comes bundled so you can just trigger:

```shell
$ npm ci
```

### Start Development

This triggers the base level Tailwind CSS build with all of the classes in the config and starts the CRA (Create React App) server for development

```shell
$ npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### Production Build

This does a few things:

- cleans out the `build` directory
- builds Tailwind CSS
- strips out unused Tailwind CSS classes
- minifies the CSS
- creates a CRA build ready for production

```shell
$ npm run build
```

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Testing

```shell
$ npm run test
```

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## More Context

### Environment Variables using `.env`

`.env` and `.env.production` are provided, but to extend locally:

- `.env.local`
- `.env.development.local`
- `.env.test.local`
- `.env.production.local`

For React specific environment variables, remember to prefix with:

```shell
REACT_APP_<your_env_var>
```

> Remember not to commit any sensitive information in your `.env` files!

### Tailwind CSS

You can use `@apply` to create custom classes in `tailwind.config.css` as you see fit. If you'd like to have separate files to import, you are also allowed to use `@import`.

Theming, prefix modifiers, and custom aliases are possible in the `tailwind.config.js` file.

To learn more about Tailwind, check out the [Tailwind CSS documentation](https://tailwindcss.com/docs/installation)

---

## Learn More

This project was initially bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [CRACO - Create React App Configuration Override](https://github.com/gsoft-inc/craco) to avoid ejecting from CRA (all you have to do to upgrade is update the `react-scripts` package as well as any `react` packages in `package.json` as you see fit)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn TypeScript, check out the [TypeScript documentation](https://www.typescriptlang.org/docs/home.html)

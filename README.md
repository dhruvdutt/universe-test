# Node App <!-- omit in toc -->

This project was scaffolded using [universe-cli](https://github.com/razorpay/frontend-universe/tree/master/packages/universe-cli).

- [⚙️ Running Project](#️-running-project)
  - [Develop](#develop)
  - [Build](#build)
    - [Staging](#staging)
    - [Production](#production)
  - [Serve](#serve)
    - [Staging](#staging-1)
    - [Production](#production-1)
- [🖌 Committing Changes](#-committing-changes)
- [🛠 Customization](#-customization)
  - [`universe.config.js`](#universeconfigjs)
  - [`webpack.config.js`](#webpackconfigjs)
  - [`babelrc.js`](#babelrcjs)
  - [`.prettierrc.js`](#prettierrcjs)
  - [`.eslintrc.js`](#eslintrcjs)
- [📖 Learn More](#-learn-more)
## ⚙️ Running Project 

### Develop
```bash
yarn start
```

Builds and starts the server in watch mode. Server starts listening at [http://localhost:8888](http://localhost:8888/).

### Build

#### Staging

```bash
yarn staging:build
```

- Builds the app in **production mode** for **staging environment**.
- The build assets will be located under `build/server` directory.
- Your app will be built and optimized for the best performance.

#### Production 

```bash
yarn production:build
```

- Builds the app in **production mode** for **production environment**.
- The build assets will be located under `build/server` directory.
- Your app will be built and optimized for the best performance.

### Serve

#### Staging

```bash
yarn staging:serve
```

Starts the server on the `port` mentioned under `staging` environment in [universe.config.js](#universeconfigjs).

#### Production

```bash
yarn production:serve
```

Starts the server on the `port` mentioned under `production` environment in [universe.config.js](#universeconfigjs).

## 🖌 Committing Changes

> ⚠️ Please don't use any git GUI(vscode/source tree/etc.) to commit your changes.

- Create a new branch from latest `master`(or whatever your main branch is called) in the format `type/description`.

  `type` can be one of the types listed in the table below

  | Type | Description |
  | ---- | ----------- |
  | feat | A new feature |
  | fix  | A bug fix   |
  | improvement | An improvement to a current feature |
  | docs | Documentation only changes |
  | style | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
  | refactor | A code change that neither fixes a bug nor adds a feature |
  | perf | A code change that improves performance |
  | test | Adding missing tests or correcting existing tests |
  | build | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm) |
  | ci | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
  | revert | Reverts a previous commit |

  `description` can be a short brief about your change.
 
  eg: `feat/add-flatten-util`.

- Make your changes in the new branch.
- Once you are done with the changes, stage the changes using `git add`.
- Run `git commit`.
- Checks like `prettier`, `eslint` & `tests` will run to verify your changes.
- Once checks are completed successfully, you will be shown a prompt to construct your commit message.
- Save and exit the editor when prompted with constructed commit message.

## 🛠 Customization

You can extend and customize the project configurations as per your needs.

### `universe.config.js`

`universe.config.js` is a configuration file used by universe commands for running universe projects. It is used by the all the `universe` commands.

You can change the default configs for `port` in `universe.config.js`.

**All your environment specific configuration keys should be put in `universe.config.js` under the respective environment object.**

```javascript
//universe.config.js
module.exports = {
  development: {
    port: 8888,
  },
  staging: {
    port: 8888,
  },
  production: {
    port: 8888,
  },
};

```

### `webpack.config.js`

A `config` object is passed to `webpack.config.js` which contains base config for building and running a node app.

You can choose to extend the config object by adding/modifying properties. 

```javascript
module.exports = {
  serverConfig: ({ config }) => {
    // webpack server config to run your project 
    // config object comes with basic webpack configurations.
    // add/modify property if you wish to
    config.entry.push('./src/entryBrowser.js'); 
    return config;
  },
};
```

> Checkout the base webpack config [here](https://github.com/razorpay/frontend-universe/blob/master/packages/universe-pack/src/configs/webpack.server.js).

### `babelrc.js`

This project comes pre-configured with `babel` for a node app. You choose to customize the base config. 

```javascript
  module.exports = {
    presets: ['@razorpay/universe-cli/babel.node'],
    plugins: [],
};
```

> Checkout the base babel config [here](https://github.com/razorpay/frontend-universe/blob/master/packages/universe-pack/src/configs/babel.node.js).

### `.prettierrc.js`

This project comes pre-configured with `prettier`. You can choose to customize the base config.

```javascript
//.prettierrc.js
const baseConfig = require('@razorpay/universe-cli/prettierrc');

module.exports = {
  ...baseConfig,
  //your prettier config here
};
```

**If your app is inside a monorepo, prettier config will be taken from the monorepo root.**

> Checkout the base prettier config [here](https://github.com/razorpay/frontend-universe/blob/master/packages/universe-doctor/src/configs/prettierrc.js).

### `.eslintrc.js`

This project comes pre-configured with `eslint` for your apps linting needs. You can choose to customize the base config. 

```javascript
const baseConfig = require('@razorpay/universe-cli/eslintrc');

module.exports = {
  ...baseConfig,
  //your eslint config here
};
```

**If your app is inside a monorepo, eslint config will be taken from the monorepo root.**

> Checkout the base eslint config [here](https://github.com/razorpay/frontend-universe/blob/master/packages/universe-doctor/src/configs/eslintrc.js).

## 📖 Learn More

You can learn more in the [universe-cli](https://github.com/razorpay/frontend-universe/tree/master/packages/universe-cli) documentation.

<div align="center">
<br>
<img width="500" src="/docs/images/logo.png" alt="electron-vue">
<br>
<br>
</div>

<blockquote align="center">
The boilerplate for making electron apps built with vue (pretty much what it sounds like).
</blockquote>


<div align="center">

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)
</div>

<div align="center">

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![Build Status](https://semaphoreci.com/api/v1/simulatedgreg/electron-vue/branches/master/badge.svg)](https://semaphoreci.com/simulatedgreg/electron-vue)
</div>

## Overview

The aim of this project is to remove the need of manually setting up electron apps using vue. electron-vue takes advantage of `vue-cli` for scaffolding, `webpack` with `vue-loader`, `electron-packager` or `electron-builder`, and some of the most used plugins like `vue-router`, `vuex`, and so much more.

#### Check out the documentation [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

Things you'll find in this boilerplate...

* Basic project structure with **single **`package.json` setup
* Detailed [documentation](https://simulatedgreg.gitbooks.io/electron-vue/content/)
* Project scaffolding using [vue-cli](https://github.com/vuejs/vue-cli)
* Ready to use Vue plugins \([axios](https://github.com/mzabriskie/axios), [vue-electron](https://github.com/SimulatedGREG/vue-electron), [vue-router](https://github.com/vuejs/vue-router), [vuex](https://github.com/vuejs/vuex)\)\*
* Installed [vue-devtools](https://github.com/vuejs/vue-devtools) and [devtron](https://github.com/electron/devtron) tools for development
* Ability to easily package your electron app using [electron-packager](https://github.com/electron-userland/electron-packager) or [electron-builder](https://github.com/electron-userland/electron-builder)\*
* Ability to produce web output for browsers
* Handy [NPM scripts](docs/en/docs/npm_scripts.md)
* Use of [webpack](https://github.com/webpack/webpack) and [vue-loader](https://github.com/vuejs/vue-loader) with Hot Module Replacement
* Process restarting when working in main process
* HTML/CSS/JS pre-processor support with [vue-loader](https://github.com/vuejs/vue-loader/)
* ES6 with [`stage-0`](https://babeljs.io/docs/plugins/preset-stage-0/) by default
* ESLint \(with support for [`standard`](https://github.com/feross/standard) and [`airbnb-base`](https://github.com/airbnb/javascript)\)\*
* Unit Testing \(with Karma + Mocha\)\*
* End-to-end Testing \(with Spectron + Mocha\)\*

\*Customizable during vue-cli scaffolding

### Getting Started

This boilerplate was built as a template for [vue-cli](https://github.com/vuejs/vue-cli) and includes options to customize your final scaffolded app. The use of `node@^6.5.0` or higher is recommended. electron-vue also officially recommends the [`yarn`](https://yarnpkg.org) package manager as it handles dependencies much better and can help reduce final build size.

```bash
# Install vue-cli and scaffold boilerplate
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project

# Install dependencies and run your app
cd my-project
yarn install # or npm install
yarn run dev # or npm run dev
```

##### Wanting to use Vue 1?

Just point to the `1.0` branch. Please note that electron-vue has officially deprecated `vue@^1` , so project structure, features, and documentation reflect those changes. Use the [**legacy documentation**](https://github.com/SimulatedGREG/electron-vue/tree/1.0/docs) if you are using Vue 1.

```bash
vue init simulatedgreg/electron-vue#1.0 my-project
```

##### Are you a Windows User?

Make sure to check out [**A Note for Windows Users**](https://simulatedgreg.gitbooks.io/electron-vue/content/en/getting_started.html#a-note-for-windows-users) to make sure you have all the necessary build tools needed for electron and other dependencies.

### Next Steps

Make sure to take a look at the [documentation](https://simulatedgreg.gitbooks.io/electron-vue/content/). Here you will find useful information about configuration, project structure, and building your app. There's also a handy [FAQs](https://simulatedgreg.gitbooks.io/electron-vue/content/en/faqs.html) section.

### Contributing

Wanting to submit a pull request? Make sure to read [this](docs/en/docs/contributing.md) first.


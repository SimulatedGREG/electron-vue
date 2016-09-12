[![](docs/logo.png)](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html)

> The boilerplate for making electron apps built with vue (pretty much what it sounds like).

[![Build Status](https://semaphoreci.com/api/v1/simulatedgreg/electron-vue/branches/master/badge.svg)](https://semaphoreci.com/simulatedgreg/electron-vue)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)

## Overview
The aim of this project is to remove the need of manually setting up electron apps using vue. electron-vue takes advantage of `vue-cli` for scaffolding, `webpack` and `vue-loader`, and some of the most used plugins like `vue-router`, `vuex`, and more.

#### Check out the documentation [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

Things you'll find in this boilerplate...
  * Support for both Vue.js at `1.x.x` and `2.x.x` (using `next`)*
  * Basic project structure
  * Detailed [documentation](https://simulatedgreg.gitbooks.io/electron-vue/content/)
  * Project scaffolding using [vue-cli](https://github.com/vuejs/vue-cli)
  * Ready to use Vue plugins ([vue-electron](https://github.com/SimulatedGREG/vue-electron),  [vue-resource](https://github.com/vuejs/vue-resource), [vue-router](https://github.com/vuejs/vue-router), [vuex](https://github.com/vuejs/vuex))*
  * Installed [vue-devtools](https://github.com/vuejs/vue-devtools) and [devtron](https://github.com/electron/devtron) tools for development
  * Ability to easily package your electron app using [electron-packager](https://github.com/electron-userland/electron-packager)
  * Handy NPM scripts
  * Use of [webpack](https://github.com/webpack/webpack) and [vue-loader](https://github.com/vuejs/vue-loader) with Hot Module Replacement
  * HTML/CSS/JS pre-processor support with [vue-loader](https://github.com/vuejs/vue-loader/)
  * ES6 with [`stage-0`](https://babeljs.io/docs/plugins/preset-stage-0/) by default
  * ESLint (support for [`standard`](https://github.com/feross/standard) and [`airbnb-base`](https://github.com/airbnb/javascript))*

\*Customizable during vue-cli scaffolding

### Getting Started
This boilerplate was built as a template for [vue-cli](https://github.com/vuejs/vue-cli) and includes options to customize your final scaffolded app.
```bash
# Install vue-cli and scaffold boilerplate
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project

# Install dependencies and run your app
cd my-project
npm install
npm run dev
```

### Next Steps
Make sure to take a look at the [documentation](https://simulatedgreg.gitbooks.io/electron-vue/content/). Here you will find useful information about configuration, project structure, and building your app. There's also a handy [FAQs](https://simulatedgreg.gitbooks.io/electron-vue/content/docs/faqs.html) section.

### Contributing
Wanting to submit a pull request? Make sure to read [this](docs/contributing.md) first.

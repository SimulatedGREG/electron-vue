# electron-vue
> The boilerplate for making electron apps using vue (pretty much what it sounds like).

**This project is still in development. Check the TODO's below for future plans.**

## Overview
The aim of this project is to remove the need to setup electron apps using vue. Since vue can take advantage of module loaders like webpack, getting everything to play nicely can be a little tricky.

Things you'll find in this boilerplate...
  * Basic project structure
  * Ready to use Vue plugins ([vue-resource](https://github.com/vuejs/vue-resource), [vue-router](https://github.com/vuejs/vue-router), [vuex](https://github.com/vuejs/vuex))
  * A working set of the [vue-devtools](https://github.com/vuejs/vue-devtools) for development
  * Ability to easily create releases/builds of your electron app using [electron-userland/electron-packager](https://github.com/electron-userland/electron-packager)
  * Use of webpack and [vue-loader](https://github.com/vuejs/vue-loader) for Hot Module Replacement
  * CSS pre-processor support (SASS/SCSS [more to come])
  * ES6 by default
  * ESLint (extends 'standard')

## Let's get started
FYI, this project was built using node v5.10.0. You can check your node version by running `node -v`. If you need to change your node version, then I'd recommend using [creationix/nvm](https://github.com/creationix/nvm/blob/master/README.markdown).

### Setup
```bash
git clone https://github.com/SimulatedGREG/electron-vue
cd electron-vue
npm i
```

## Development
#### Starting the app
```bash
npm run dev
```

#### vue-devtools
Once your app loads, another window will be opened that loads the vue-devtools. These tools will open by default and can be manually turned off in `webpack.config.js` by setting `config.vueDevTools = false`.

## Making a Release/Build
electron-vue makes use of [electron-userland/electron-packager](https://github.com/electron-userland/electron-packager) in order to create builds.

#### Building for all platforms
```bash
npm run release
```
#### Building for a specific platforms
Can be `win32`, `darwin`, `mas`, or `linux`
```bash
npm run release:darwin # builds for darwin (OS X)
```
#### Clean `release` directory
```bash
npm run release:clean
```

**Further customizations can be added at `build/release.js`.**

## FAQs
> Why does my electron app show a file explorer?

#### TL;DR
Your `src` contains error(s). Check console, fix errors, then refresh electron.
#### Long answer
When webpack is loaded it then calls electron to start, but if there are errors in your `src` this creates conflicts with ESLint, and doesn't produce a VALID `build.js` (also interupts HtmlWebpackPlugin), therefore electron doesn't have anything to load and the webpack-dev-server falls back to the file explorer.

## TODO
  1. ~~Ability to create electron builds for all platforms~~
  2. ~~Show eslint errors in browser~~ (on hold, needs custom formatter)
  3. Create documentation explaining the use of both `package.json` files
  4. Create script to compile npm modules that are needed to build against electron
  5. ~~Get Vue devtools working~~
  6. ~~Add console.log messages to describe actions~~
  7. (more)

***

## License
The MIT License (MIT)

Copyright (c) 2016 Greg Holguin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

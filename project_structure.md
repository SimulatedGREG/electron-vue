# Project Structure
 When it comes to making electron apps, project structure is a little different. The documentation below attempts to explain how the boilerplate works and the differences when the app is built.

## Using two `package.json`'s
 Yes, you read that right. There are **two** `package.json` files. Here's why...
  1. **Bloatware** makes our build's file size way too large for distribution. Do we really want to include of all those large `node_modules` along with all their miscellaneous files, and even those  modules that we are only using during development (ex. `vue-loader`, `eslint-loader`)? NO, we need to separate our dependencies.
  2. **Native NPM modules** (those written in C, not pure JavaScript) for our app needs to be compiled against electron. If we used only one `package.json`, how would we know which modules need to be compiled for electron and the others with your local instance of node for development? It might be possible, but separating our dependencies just makes more sense.

#### `./package.json` is for all your development needs
Here you should install modules that you only need during development. Items include scripts, pre-processors, etc. In this boilerplate all of the `webpack` dependencies are saved here and **will not** but published in the final production build.

#### `./app/package.json` is for your actual electron app
**This `package.json` is your app manifest.** Here you should install all your dependencies needed in your final app. It is inside this `app` folder that electron-packager creates production builds.

**NOTE**: When building production apps, electron-packager ignores `node_modules`. Webpack will import everything need in its bundle, which cuts file size down even more.

## File tree
#### During development
```
electron-vue
├─ app
│  ├─ dist
│  ├─ icons
│  ├─ node_modules
│  └─ src
│     ├─ components
│     └─ vuex
│        └─ modules
├─ builds
├─ devtools
├─ docs
├─ node_modules
└─ tasks
   ├─ vue
   └─ vuex
```
#### Production builds
```
app.asar
├─ dist
│  ├─ build.js
│  └─ index.html
├─ electron.js
└─ package.json
```
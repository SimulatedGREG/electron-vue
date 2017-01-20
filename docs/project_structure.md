# Project Structure

When it comes to making electron apps, project structure is a little different. The documentation below attempts to explain how the boilerplate works and the differences when the app is built.

## Using two `package.json`'s

Yes, you read that right. There are **two** `package.json` files. Here's why...  

  1. **Bloatware** makes our build's file size way too large for distribution. Do we really want to include all those large `node_modules` along with all their miscellaneous files, and even those  modules that we are only using during development \(ex. `vue-loader`, `eslint-loader`\)? NO, we need to separate our dependencies.  
  2. **Native NPM modules** \(those written in C, not pure JavaScript\) for our app need to be compiled against electron. [**More info**](http://electron.atom.io/docs/tutorial/using-native-node-modules/). If we used only one `package.json`, how would we know which modules need to be compiled for electron and the others with your local instance of node for development? It might be possible, but separating our dependencies just makes more sense.

#### `./package.json` is for all your development needs

Here you should install modules that you only need during development. Items include scripts, pre-processors, module loaders, etc. In this boilerplate all of the `webpack` dependencies are saved here and **will not** be published in final production builds.

#### `./app/package.json` is for your actual electron app

**This **`package.json`** is your app's manifest.** Here you should install all your dependencies needed in your final app. It is inside this `app` folder that `electron-packager`/`electron-builder` will create final production builds.

##### Installing Native NPM modules

As mentioned above, we need to make sure our native npm modules are built against electron. To do that, we can use [electron/electron-rebuild](https://github.com/electron/electron-rebuild). If you are using `electron-builder` to build your app, then you shouldn't have to worry about this step.

## On the subject of the `main` process
During development you may notice `app/src/main/entry.js`. This file is used specially for development and enables the use of ES6+ features for the `main` process. This file should not have to be modified. 

Upon building, webpack will step in and create a bundle with `app/src/main/index.js` as its entry file with the same `babel` settings.

## File tree

#### During development
**Note**: Some files/folders may differ based on the settings choosen during `vue-cli` scaffolding.

```
electron-vue
├─ app
│  ├─ dist/
│  ├─ icons/
│  ├─ node_modules/
│  ├─ src
│  │  ├─ main
│  │  │  ├─ entry.js
│  │  │  └─ index.js
│  │  └─ renderer
│  │  │  ├─ components
│  │  │  ├─ vuex
│  │  │  │  └─ modules
│  │  │  ├─ App.vue
│  │  │  ├─ main.js
│  │  │  └─ routes.js
│  ├─ index.ejs
│  └─ package.json
├─ builds/
├─ node_modules/
└─ tasks
|  ├─ vue
|  └─ vuex
└─ test
|  ├─ e2e
│  │  ├─ specs/
│  │  ├─ index.js
│  │  └─ utils.js
|  ├─ unit
│  │  ├─ specs/
│  │  ├─ index.js
│  │  └─ utils.js
└─ config.js
└─ package.json
└─ webpack.main.config.js
└─ webpack.renderer.config.js
```

#### Production builds

```
app.asar
├─ dist
│  ├─ main.js
│  ├─ renderer.js
│  └─ index.html
└─ package.json
```

As you can probably tell, almost everything is stripped down in final production builds. This is almost mandatory when distributing electron apps, as you do not want your users to download bloated software with a large file size.
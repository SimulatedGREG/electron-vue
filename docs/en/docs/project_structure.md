# Project Structure

When it comes to making electron apps, project structure is a little different. If you have used the official [`vuejs-templates/webpack`](https://github.com/vuejs-templates/webpack) setup before, then the structure should feel quite familiar. The documentation below attempts to explain how the boilerplate works and the differences when the app is built.

### Single `package.json` Setup

There was a time not too long ago where a two `package.json` setup was neccessary, but thanks to efforts from [@electron-userland](https://github.com/electron-userland), both [`electron-packager`](https://github.com/electron-userland/electron-packager) and [`electron-builder`](https://github.com/electron-userland/electron-builder) now fully support a single `package.json` setup.

#### `dependencies`

These dependencies **will** be included in your final production app. So if you application needs a certain module in production installed it here!

#### `devDependencies`

These dependencies **will not** be included in your final production app. Here you can install modules needed specifically for development like build scripts, `webpack` loaders, etc.

#### Installing Native NPM Modules

We need to make sure our native npm modules are built against electron. To do that, we can use [`electron-rebuild`](https://github.com/electron/electron-rebuild), but to make things simpler, it is highly recommended to use [`electron-builder`](https://github.com/electron-userland/electron-builder) for your build tool as a lot of these tasks are handled for you.

### On the subject of the `main` process

During development you may notice `src/main/index.dev.js`. This file is used specifically for development and is used to install dev-tools. This file should not have to be modified, but can be used to extend your development needs. Upon building, `webpack` will step in and create a bundle with `src/main/index.js` as its entry file.

### File Tree

#### During development

**Note**: Some files/folders may differ based on the settings chosen during `vue-cli` scaffolding.

```
my-project
├─ .electron-vue
│  └─ <build/development>.js files
├─ build
│  └─ icons/
├─ dist
│  ├─ electron/
│  └─ web/
├─ node_modules/
├─ src
│  ├─ main
│  │  ├─ index.dev.js
│  │  └─ index.js
│  ├─ renderer
│  │  ├─ components/
│  │  ├─ router/
│  │  ├─ store/
│  │  ├─ App.vue
│  │  └─ main.js
│  └─ index.ejs
├─ static/
├─ test
│  ├─ e2e
│  │  ├─ specs/
│  │  ├─ index.js
│  │  └─ utils.js
│  ├─ unit
│  │  ├─ specs/
│  │  ├─ index.js
│  │  └─ karma.config.js
│  └─ .eslintrc
├─ .babelrc
├─ .eslintignore
├─ .eslintrc.js
├─ .gitignore
├─ package.json
└─ README.md
```

#### Production builds

```
app.asar
├─ dist
│  └─ electron
│     ├─ <assets>/
│     ├─ index.html
│     ├─ main.js
│     └─ renderer.js
├─ node_modules/
└─ package.json
```

As you can probably tell, almost everything is stripped down in final production builds. This is almost mandatory when distributing electron apps, as you do not want your users to download bloated software with a large file size.


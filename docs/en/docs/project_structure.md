# Project Structure

When it comes to making electron apps, project structure is a little different. The documentation below attempts to explain how the boilerplate works and the differences when the app is built.

## Single `package.json` setup



##### Installing Native NPM modules

As mentioned above, we need to make sure our native npm modules are built against electron. To do that, we can use [electron/electron-rebuild](https://github.com/electron/electron-rebuild). If you are using `electron-builder` to build your app, then you shouldn't have to worry about this step.

## On the subject of the `main` process

During development you may notice `src/main/index.dev.js`. This file is used specifically for development and is used to install dev tools. This file should not have to be modified, but can be used to extend your development needs. Upon building, `webpack` will step in and create a bundle with `src/main/index.js` as its entry file.

## File tree

#### During development

**Note**: Some files/folders may differ based on the settings choosen during `vue-cli` scaffolding.

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


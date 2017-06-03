# File Tree

### During development

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
│     ├─ static/
│     ├─ index.html
│     ├─ main.js
│     └─ renderer.js
├─ node_modules/
└─ package.json
```

As you can probably tell, almost everything is stripped down in final production builds. This is almost mandatory when distributing electron apps, as you do not want your users to download bloated software with a large file size.






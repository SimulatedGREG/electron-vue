# Getting Started
 
## Scaffolding
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

When running `npm install` a post install script is also executed, which will `npm install` inside the `app` directory as well.


> Why is there another `package.json`?

electron-vue uses a two package.json setup. Find out more [here](https://simulatedgreg.gitbooks.io/electron-vue/content/docs/project_structure.html).

#### On the subject of electron
electron-vue is required to use electron `>= v1.2.3`. The `v1.2.3` release adds support for more [`chrome.*` APIs](https://github.com/electron/electron/releases/tag/v1.2.3) that `vue-devtools` depend on. If you are needing a previous release of electron before `v1.2.3`, then you will need to manually uninstall [`electron-devtools-installer`](https://github.com/SimulatedGREG/electron-vue/blob/master/template/package.json#L36) from `./package.json` and revert `./app/electron.js` to a previous version found [here](https://github.com/SimulatedGREG/electron-vue/commit/e7175ee0337f3af36de49aef10cf58a64d75a220). 

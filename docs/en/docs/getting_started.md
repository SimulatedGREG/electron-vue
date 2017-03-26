# Getting Started
 
## Scaffolding
This boilerplate was built as a template for [vue-cli](https://github.com/vuejs/vue-cli) and includes options to customize your final scaffolded app. Certain dependencies and scripts use ES6 specific features so the use of `node@^6.5.0` or higher is recommended.

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

electron-vue uses a **two `package.json`** setup. Find out more [here](https://simulatedgreg.gitbooks.io/electron-vue/content/docs/project_structure.html).

#### On the subject of electron
electron-vue requires the use of `electron@^1.2.3`. The `v1.2.3` release adds support for more [`chrome.*` APIs](https://github.com/electron/electron/releases/tag/v1.2.3) that `vue-devtools` depends upon. If you are needing a previous release of electron before `v1.2.3`, then you will need to manually uninstall [`electron-devtools-installer`](https://github.com/SimulatedGREG/electron-vue/blob/master/template/package.json#L36) from `./package.json` and revert `./app/src/main/index.js` to a previous version found [here](https://github.com/SimulatedGREG/electron-vue/commit/e7175ee0337f3af36de49aef10cf58a64d75a220). Please note that doing so will no longer enable you to have `vue-devtools` for development. 

Although optional, it is recommended to lock in your electron version after scaffolding your project. This helps prevent other developers working on the same project from developing on a different version. Electron makes releases quite often so features are always subject to change. [More Info](http://electron.atom.io/docs/tutorial/electron-versioning/).

#### A note for Windows Users
If you run into errors during `npm install` about `node-gyp`, then you most likely do not have the proper build tools installed on your system. Build tools include items like Python and Visual Studio. Thanks to [@felixrieseberg](https://github.com/felixrieseberg), there are a few packages to help simplify this process.

The first item we need to check is our npm version and ensure that it is not outdated. This can is accomplished using [`npm-windows-upgrade`](https://github.com/felixrieseberg/npm-windows-upgrade).

Once that is complete, we can then continue to setup the needed build tools. Using [`windows-build-tools`](https://github.com/felixrieseberg/windows-build-tools), most of the dirty work is done for us. Installing this globally will in turn setup Visual C++ packages, Python, and more.

At this point things should successfully install, but if not then you will need a clean installation of Visual Studio. Please note that these are not direct problems with electron-vue itself. (Windows can be difficult sometimes ¯\\\_(ツ)\_/¯)

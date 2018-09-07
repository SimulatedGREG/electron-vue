# Getting Started

## Scaffolding

This boilerplate was built as a template for [vue-cli](https://github.com/vuejs/vue-cli) and includes options to customize your final scaffolded application. The use of `node@^7` or higher is required. electron-vue also officially recommends the [`yarn`](https://yarnpkg.org) package manager as it handles dependencies much better and can help reduce final build size with `yarn clean`.

```bash
# Install vue-cli and scaffold boilerplate
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project

# Install dependencies and run your app
cd my-project
yarn # or npm install
yarn run dev # or npm run dev
```

#### On the subject of electron

Although optional, it is recommended to lock in your electron version after scaffolding your project. This helps prevent other developers working on the same project from developing on a different version. Electron makes releases quite often so features are always subject to change. [More Info](http://electron.atom.io/docs/tutorial/electron-versioning/).

#### A note for Windows Users

If you run into errors during `npm install` about `node-gyp`, then you most likely do not have the proper build tools installed on your system. Build tools include items like Python and Visual Studio. Thanks to [@felixrieseberg](https://github.com/felixrieseberg), there are a few packages to help simplify this process.

The first item we need to check is our npm version and ensure that it is not outdated. This can is accomplished using [`npm-windows-upgrade`](https://github.com/felixrieseberg/npm-windows-upgrade). If you are using `yarn`, then you can skip this check.

Once that is complete, we can then continue to setup the needed build tools. Using [`windows-build-tools`](https://github.com/felixrieseberg/windows-build-tools), most of the dirty work is done for us. Installing this globally will in turn setup Visual C++ packages, Python, and more.

At this point things should successfully install, but if not then you will need a clean installation of Visual Studio. Please note that these are not direct problems with electron-vue itself \(Windows can be difficult sometimes ¯\\\_\(ツ\)\_/¯\).


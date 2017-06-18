# Project Structure

When it comes to making electron apps, project structure is a little different. If you have used the official [`vuejs-templates/webpack`](https://github.com/vuejs-templates/webpack) setup before, then the structure should feel quite familiar. The documentation in this section attempts to explain a general overview of how the boilerplate works and the differences when your application in built.

### Single `package.json` Setup

There was a time not too long ago where a two `package.json` setup was neccessary, but thanks to efforts from [@electron-userland](https://github.com/electron-userland), both [`electron-packager`](https://github.com/electron-userland/electron-packager) and [`electron-builder`](https://github.com/electron-userland/electron-builder) now fully support a single `package.json` setup.

#### `dependencies`

These dependencies **will** be included in your final production app. So if your application needs a certain module to function, then install it here!

#### `devDependencies`

These dependencies **will not** be included in your final production app. Here you can install modules needed specifically for development like build scripts, `webpack` loaders, etc.

#### Installing Native NPM Modules

We need to make sure our native npm modules are built against electron. To do that, we can use [`electron-rebuild`](https://github.com/electron/electron-rebuild), but to make things simpler, it is highly recommended to use [`electron-builder`](https://github.com/electron-userland/electron-builder) for your build tool as a lot of these tasks are handled for you.

### On the subject of the `main` process

During development you may notice `src/main/index.dev.js`. This file is used specifically for development and is used to install dev-tools. This file should not have to be modified, but can be used to extend your development needs. Upon building, `webpack` will step in and create a bundle with `src/main/index.js` as its entry file.

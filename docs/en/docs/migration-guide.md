# New Releases & Migration Guide

electron-vue has evolved greatly over the past year and has introduced many new fantastic features. Development is not planned to end anytime soon. The only down side to new bells & whistles every now and then is having your project stuck on an older scaffold. Since electron-vue takes advantage of `vue-cli` there unfortunately isn't a structured way to _version_ the boilerplate and make it _updatable_.

Major updates of electron-vue will be made through GitHub Milestones and will include many new features, bugfixes, etc. These milestones are not usually planned, but arise as feature requests add up in the issue tracker.

##### Past Milestones

* [Multiplex](https://github.com/SimulatedGREG/electron-vue/milestone/1?closed=1)
  * Migration to `webpack` 2
  * Support for `electron-builder`
  * Support for `main` process bundling
  * General bugfixing
* [Minimize](https://github.com/SimulatedGREG/electron-vue/issues/171)
  * Migration to single `package.json` structure
  * Travis CI / AppVeyor configs for `electron-builder` users
  * Minimal web output of `renderer` process
  * Migration to `axiox`
  * Full support for `main` process bundling
  * Rewrite of development and build scripts
  * Migration to `babili` to remove the need of transpiling down completely to ES5

### Migrating Your Project

The following documentation attempts to explain how migrating your project _should_ be accomplished, but may not be a full proof method as overall project structure is always up for change.

1. Scaffold a fresh version of electron-vue using `vue init simulatedgreg/electron-vue my-project`
2. Copy over current project `src` files into new scaffold's `src` directory
3. Copy over `package.json` dependencies from current project to new scaffold's `package.json`
4. `yarn` or `npm install`
5. Run project in development mode \(`yarn run dev` or `npm run dev`\)
6. Watch console for errors to fix

Just as previously mentioned above, there isn't a full proof method for migrating to a new scaffold, but these are typically going to be the major steps to get you nearly all the way there.




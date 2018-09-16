# New Releases

electron-vue has evolved greatly since its initial creation in May of 2016 and has introduced many new fantastic features. Can you believe there was a time `vue-cli` scaffolding wasn't supported? Development of new features is not planned to end anytime soon. The only down side to new bells & whistles every now and then is having your project stuck on an older scaffold. Since electron-vue takes advantage of `vue-cli` there unfortunately isn't a structured way to _version_ the boilerplate or make it _updatable_.

Major updates of electron-vue will be made through GitHub Milestones and will include many new features/bug fixes at a time, making these releases the optimal time to [migrate](/migration-guide.md) any existing projects to a newer scaffold. These milestones are not usually planned, but arise as feature requests add up in the issue tracker.

### Past Milestones

#### [Multiplex](https://github.com/SimulatedGREG/electron-vue/milestone/1?closed=1)

* Migration to `webpack` 2
* Support for `electron-builder`
* Support for `main` process bundling
* General bugfixing

#### [Minimize](https://github.com/SimulatedGREG/electron-vue/issues/171)

* Migration to single `package.json` structure
* Travis CI / AppVeyor configs for `electron-builder` users
* Minimal web output of `renderer` process
* Migration to `axios`
* Full support for `main` process bundling
* Rewrite of development and build scripts
* Migration to `babili` to remove the need of transpiling down completely to ES5
* Support for `static/` assets when using modules that require a full path \([`__static`](/using-static-assets.md)\)




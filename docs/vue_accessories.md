# Vue Accessories

### Use of Vue.js at `1.x.x` or `2.x.x`
During project scaffolding you have the option to install Vue.js at `^1.0.26` or `next`. Using `next` will in turn use `vue-router` & `vuex` at `next` as well. If you are wanting to give `2.x.x` a shot make sure to check out the breaking changes [here](https://github.com/vuejs/vue/issues/2873).

### Ready to use vue plugins
electron-vue comes packed with the following vue plugins that can be installed during project scaffolding...
  * [vue-electron](https://github.com/SimulatedGREG/vue-electron) (attach electron APIs to Vue object)
  * [vue-resource](https://github.com/vuejs/vue-resource) (web requests)
  * [vue-router](https://github.com/vuejs/vue-router) (single page application routes)
  * [vuex](https://github.com/vuejs/vuex) (flux-inspired application architecture)

### npm scripts
**NOTE**: The following scripts assume you are using original project structure and are highly **experimental** for the moment.

For quickly making new data modules (vuex) or routes (vue-router) you can use the following. Please know that they are not required and are only made available for convenience.

#### Create new route
```
npm run vue:route <routeName>
```
Where `<routeName>` is the name of your new route. Upper casing first letter is recommended.

#### Create vuex module
```
npm run vuex:module <moduleName>
```
Where `<moduleName>` is the name of your new data module.

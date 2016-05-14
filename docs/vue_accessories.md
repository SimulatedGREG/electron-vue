# Vue Accessories

### Pre-installed plugins
electron-vue comes packed with the following vue plugins out-of-box...
  * [vue-resource](https://github.com/vuejs/vue-resource) (web requests)
  * [vue-router](https://github.com/vuejs/vue-router) (single page application routes)
  * [vuex](https://github.com/vuejs/vuex) (flux-inspired application architecture)

### npm scripts
For quickly making new data modules (vuex) or routes (vue-router) you can use the following. Please know that they are not required and are only made available for convenience.

#### Create new route
```
npm run vue:route <routeName>
```
Where `routeName` is the name of your new route. Uppercasing first letter is recommended.

#### Create vuex module
```
npm run vuex:module <moduleName>
```
Where `moduleName` is the name of your new data module.

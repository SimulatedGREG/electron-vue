# Vue Plugins

electron-vue comes packed with the following `vue` plugins that can be installed during `vue-cli` scaffolding...

* [axios ](https://github.com/mzabriskie/axios)\(web requests\)
* [vue-electron](https://github.com/SimulatedGREG/vue-electron) \(attach electron APIs to Vue object\)
* [vue-router](https://github.com/vuejs/vue-router) \(single page application routes\)
* [vuex](https://github.com/vuejs/vuex) \(flux-inspired application architecture\)
* [vuex-electron](https://github.com/vue-electron/vuex-electron) \(sync vuex store between all processes and instances\)

---

### [`axios`](https://github.com/mzabriskie/axios)

> Promise based HTTP client for the browser and node.js

If you are familiar with `vue-resource`, then `axios` will feel very familiar as most of the API is nearly identical. You can easily import `axios` in your `main` process scripts or use with `this.$http` & `Vue.http` in the `renderer` process. Please note that during development you may run into issues with CORS since requests are passed through `webpack-dev-server`. As a small workaround, you can disable [`webSecurity`](https://electronjs.org/docs/api/browser-window#new-browserwindowoptions) within the BrowserWindow configuration, but please do remember to only disable this during development. Disabling this in production is highly not recommended and can create a serious security risk for your final application!

### [`vue-electron`](https://github.com/SimulatedGREG/vue-electron)

> The vue plugin that attaches electron APIs to the Vue object, making them accessible to all components.

A simple `vue` plugin that makes electron APIs easily accessible with`this.$electron`, no longer needing to import `electron` into every component necessary.

### [`vue-router`](https://github.com/vuejs/vue-router)

> `vue-router` is the official router for [Vue.js](http://vuejs.org/). It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.

The provided project structure should feel familiar to the setup provided in the official `vuejs-templates/webpack` boilerplate.

### [`vuex`](https://github.com/vuejs/vuex)

> Vuex is a **state management pattern + library **for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

The provided project structure is rather bare but does encourage the use of `vuex`'s module pattern to help organize your data stores. The extra `@/store/modules/index.js` let's your `vuex` store import all modules in a one-shot manner.

### [`vuex-electron`](https://github.com/vue-electron/vuex-electron)

> The easiest way to use your Vuex store between all processes (including main) and instances.

In case if your application has multiple windows, probably you would need to share the state of the application between them. Moreover, probably you would need to share the state of the app between launches or different instances. You could easily solve these two tasks by using `vuex-store`.

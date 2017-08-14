# Vue 插件

electron-vue 包含以下 `vue` 插件，可以使用 `vue-cli` 脚手架安装...

* [axios](https://github.com/mzabriskie/axios)\(网络请求\)
* [vue-electron](https://github.com/SimulatedGREG/vue-electron) \(将 electron API 附加到 Vue 对象\)
* [vue-router](https://github.com/vuejs/vue-router) \(单页应用路由\)
* [vuex](https://github.com/vuejs/vuex) \(flux 启发的应用程序架构\)

---

### [`axios`](https://github.com/mzabriskie/axios)

> 基于 Promise，用于浏览器和 node.js 的 HTTP 客户端

如果你熟悉 `vue-resource`，那么你也会觉得 `axios` 并不陌生，因为大部分 API 几乎是一样的。你可以在 `main` 进程脚本中轻松导入 `axios`，或者在 `renderer` 进程中使用 `this.$http` 或 `Vue.http`。

### [`vue-electron`](https://github.com/SimulatedGREG/vue-electron)

> 将 electron API 附加到 Vue 对象的 vue 插件，使所有组件可以访问它们。

一个可以轻松通过 `this.$electron` 访问 electron API 的简单的 `vue` 插件，不再需要将 `electron` 导入到每一个组件中。

### [`vue-router`](https://github.com/vuejs/vue-router)

> `vue-router` 是 [Vue.js](http://vuejs.org/) 的官方路由。它与 Vue.js 的核心深度整合，使 Vue.js 单页应用程序的构建变得轻而易举。

本项目所提供的项目结构应该与官方样板 `vuejs-templates/webpack` 中提供的设置很相似。

### [`vuex`](https://github.com/vuejs/vuex)

> Vuex 是 Vue.js 应用程序的 **状态管理模式 + 库**。它作为程序中所有组件的集中存储，其规则确保了状态量只能以可预测的方式被改变。

本项目所提供的项目结构相当简单，但我们鼓励使用 `vuex` 的模块模式来帮助组织你的数据存储。外加的 `@/store/modules/index.js` 让你的 `vuex` 存储能够一次性导入所有的模块。

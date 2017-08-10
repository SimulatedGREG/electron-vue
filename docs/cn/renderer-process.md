# 渲染器进程

> 由于 Electron 使用 Chromium 显示网页，Chromium 的多进程架构也被使用。Electron 中的每个网页都在自己的进程中运行，称为渲染器进程。
>
> 在正常的浏览器中，网页通常运行在沙盒封装化的环境中，并且不允许访问本机资源。然而，Electron 用户有权在网页中使用 Node.js 的 API，从而允许较低级别的操作系统交互。

**来自** [**Electron 文档**](http://electron.atom.io/docs/tutorial/quick-start/#renderer-process)

---

## 关于 `vue` 和 `vuex`

### vue 组件

如果你不熟悉 Vue 组件，请阅读 [此处](http://vuejs.org/v2/guide/single-file-components.html)。组件的使用使我们的大型复杂应用程序更加有组织化。每个组件都有能力封装自己的 CSS、模板 和 JavaScript 功能。

组件存储在 `src/renderer/components` 中。创建子组件时，一个常用的的组织化实践是将它们放置在一个使用其父组件名称的新文件夹中。在协调不同的路由时，这一点特别有用。

```
src/renderer/components
├─ ParentComponentA
│  ├─ ChildComponentA.vue
│  └─ ChildComponentB.vue
└─ ParentComponentA.vue
```

### vue 路由

有关 `vue-router` 的更多信息请点击 [这里](https://github.com/vuejs/vue-router)。 简而言之，我们鼓励使用 `vue-router`，因为创建 单页应用程序 (Single Page Application) 在制作 electron 应用程序的时候更加实用。你真的想管理一堆 BrowserWindows，然后在之间传达信息吗？恐怕不会。

路由被保存在 `src/renderer/router/index.js` 里并定义如下...

```js
{
  path: '<routePath>',
  name: '<routeName>',
  component: require('@/components/<routeName>View')
}
```

... 其中 `<routePath>` 和 `<routeName>` 都是变量。然后，这些路由使用 `src/renderer/App.vue` 的 `<router-view>` 指令附加到组件树上。

##### 注意

在使用 `vue-router` 时，不要使用 [**HTML5 历史模式**](http://router.vuejs.org/en/essentials/history-mode.html)。 此模式严格用于通过 `http` 协议提供文件，并且不能正常使用 `file` 协议，electron 在产品构建中提供文件。 默认的 `hash` 模式正是我们所需要的。

### vuex 模块

描述 `vuex` 并不是简单的事情，所以请阅读 [这里](http://vuex.vuejs.org/en/intro.html)，以便更好地了解它试图解决的问题及其工作原理。

electron-vue 利用 `vuex` 的模块结构创建多个数据存储，并保存在 `src/renderer/store/modules` 中。

拥有多个数据存储对于组织化来说可能很好，但必须导入每一个数据也可能令人厌烦。但是不要担心，因为 `src/renderer/store/modules/index.js` 对我们来说是麻烦的工作！这个小脚本让 `src/renderer/store/index.js` 以一次性的方式导入我们所有的模块。如果所有这些都没有，只要知道你可以轻松地复制给定的 `Counter.js` 模块，它将以 "神奇" 的方式被加载进来。

# 렌더러 처리

> Since Electron uses Chromium for displaying web pages, Chromium’s multi-process architecture is also used. Each web page in Electron runs in its own process, which is called the renderer process.
>
> In normal browsers, web pages usually run in a sandboxed environment and are not allowed access to native resources. Electron users, however, have the power to use Node.js APIs in web pages allowing lower level operating system interactions.

**From the **[**Electron Documentation**](http://electron.atom.io/docs/tutorial/quick-start/#renderer-process)

---

## `vue` 와 `vuex` 관련 주제

### vue 컴포넌트

If you are unfamiliar with Vue components, please give [this](http://vuejs.org/v2/guide/single-file-components.html) a read. Using components gives our large complex applications more organization. Each component has the ability to encapsulate its own CSS, template, and JavaScript functionality.

컴포넌트는 `src/renderer/components`에 저장된다.. When creating child components, a common organization practice is to place them inside a new folder with the name of its parent component. This is especially useful when coordinating different routes.

```
src/renderer/components
├─ 부모컴포넌트A
│  ├─ 자식컴포넌트A.vue
│  └─ 자식컴포넌트B.vue
└─ 부모컴포넌트A.vue
```

### vue 라우트

For more information about `vue-router` click [here](https://github.com/vuejs/vue-router). In short, it is encouraged to use `vue-router` as creating a Single Page Application is much more practical when making Electron applications. Do you really want to manage a bunch of BrowserWindows and then communicating information between everything? Probably not.

라우트는 `src/renderer/router/index.js` 에 있고 다음처럼 정의된다..

```js
{
  path: '<라우트경로>',
  name: '<라우트이름>',
  component: require('@/components/<라우트이름>View')
}
```

... `<routePath>` 과 `<routeName>` 는 변수다. These routes are then attached to the component tree using the `<router-view>` directive in `src/renderer/App.vue`.

##### Notice

`vue-router`를 쓸 때는, [**HTML5 History Mode**](http://router.vuejs.org/en/essentials/history-mode.html)를 사용하지 마라. This mode is strictly meant for serving files over the `http` protocol and does not work properly with the `file` protocol that Electron serves files with in production builds. The default `hash` mode is just what we need.

### vuex 모듈

Describing `vuex` is not the easiest thing to do, so please read [this](http://vuex.vuejs.org/en/intro.html) for a better understanding of what problem it tries to solve and how it works.

electron-vue takes advantage of `vuex`'s module structure to create multiple data stores, which are saved in `src/renderer/store/modules`.

Having multiple data stores can be great for organization, but it can also be annoying to have to import each and every one. But don't fret, as `src/renderer/store/modules/index.js` does the dirty work for us! This little script lets `src/renderer/store/index.js` import all of our modules in a one-shot manner. If all that didn't make sense, just know you can easily duplicate the given `Counter.js` module and it will be loaded in "magically".

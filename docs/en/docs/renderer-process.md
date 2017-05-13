# Renderer Process

> Since Electron uses Chromium for displaying web pages, Chromium’s multi-process architecture is also used. Each web page in Electron runs in its own process, which is called the renderer process.
>
> In normal browsers, web pages usually run in a sandboxed environment and are not allowed access to native resources. Electron users, however, have the power to use Node.js APIs in web pages allowing lower level operating system interactions.

**From the **[**Electron Documentation**](http://electron.atom.io/docs/tutorial/quick-start/#renderer-process)

---

## On the subject of `vue` and `vuex`

### vue components

If you are unfamiliar with Vue components, please give [this](http://vuejs.org/v2/guide/single-file-components.html) a read. Using components gives our large complex applications more organization. Each component has the ability to encapsulate its own CSS, template, and JavaScript functionality.

Components are stored in `src/renderer/components`. When creating child components, place them inside a new folder with the name of its parent component.

```
src/renderer/components
├─ ParentComponentA
│  ├─ ChildComponentA.vue
│  └─ ChildComponentB.vue
└─ ParentComponentA.vue
```

### vue routes

For more information about `vue-router` click [here](https://github.com/vuejs/vue-router). In short, it is encouraged to use `vue-router` as creating a Single Page Application is much more practical when making electron apps. Do you really want to manage a bunch of BrowserWindows or static page navigation? Probably not.

Routes are held in `src/renderer/router/index.js` and defined like so...

```js
{
  path: '<routePath>',
  name: '<routeName>',
  component: require('@/components/<routeName>View')
}
```

...where both `<routePath>` and `<routeName>` are variables. These routes are then attached to the component tree using the `<router-view>` directive in `src/renderer/App.vue`.

##### Notice

When using `vue-router`, refrain from using [**HTML5 History Mode**](http://router.vuejs.org/en/essentials/history-mode.html). This mode is strictly meant for serving files over the `http` protocol and does not work properly with the `file` protocol that electron serves files with. The default `hash` mode is what you will need.

### vuex modules

Describing `vuex` is not the easiest thing to do, so please read [this](http://vuex.vuejs.org/en/intro.html) for a better understanding of what problem it tries to solve and how it works.

electron-vue takes advantage of `vuex`'s module structure to create multiple data stores and are saved in `src/renderer/store/modules`.

Having multiple data stores can be great for organization, but can also be annoying to have to import each and every one. But don't fret, as `src/renderer/store/modules/index.js` does the dirty work for us! This little script let's `src/renderer/store/index.js` import all of our modules in a one-shot manner.

# Using Static Assets

Sometimes your don't want `webpack` to bundle some of your assets. Let's say you have a large sprite collection, but your app loads the images in on-demand. `webpack` does not need to bundle every single sprite if only a few might be used at a time.

When using static assets, let's place them inside the `static/` folder. During the build step, `webpack` will copy all assets in the `static/` directory and add them to the production build.

#### Use Case

Let's say I have a component that loads an image, but the image's path isn't known until some other task is completed. To keep things simple, let's just use a `data` variable to bind our `<img>`'s src.

```html
<template>
  <img v-bind:src="imageUrl">
</template>

<script>
  export default {
    data () {
      // notice the url starts with `static/`
      return { imageUrl: 'static/imgs/unsplash.png' }
    }
  }
</script>
```

Here `webpack` will not bundle the `unsplash.png` image and the app will look inside the `static/imgs/unsplash.png` directory for the asset.


# Using the file structure
electron-vue does its best to not force a particular project structure, but does try to follow common Vue practices in regards to organizing components, routes, and vuex modules. The documentation below describes common practices used in the original project structure.

## On the subject of `vue` and `vuex`

### vue components
If you are unfamiliar with Vue components, please give [this](http://vuejs.org/guide/application.html#Single-File-Components) a read. Using components gives our large complex applications more organization. Each component has the ability to encapsulate its own CSS, template, and JavaScript functionality.

Components are stored in `app/src/components`. When creating child components, place them inside a new folder with the name of its parent component.
```
app/src/components
├─ ParentComponentA
│  ├─ assets
│  |  └─ logo.png
│  ├─ ChildComponentA.vue
│  └─ ChildComponentB.vue
└─ ParentComponentA.vue
```
##### NOTICE
Assets can also be organized in this manner. If a particular component needs an image file, let's place that inside a folder named `assets`. If you are using static assets that you do not want webpack to bundle, please read [**Using Static Assets**](#using-static-assets) below.

### vue routes
For more information about vue-router click [here](https://github.com/vuejs/vue-router). In short, I'd encourage the use of vue-router as creating a Single Page Application is much more practical when making electron apps. Do you really want to manage a bunch of BrowserWindows or static page navigation? Probably not.

Routes are held in `app/src/routes.js` and defined like so...
```js
// vue@^1.0.28
'/<routePath>': {
  component: Vue.component('<routeName>', require('./components/<routeName>View')),
  name: '<routeName>'
}

// vue@^2.0.1
{
  path: '<routePath>',
  name: '<routeName>',
  component: require('components/<routeName>View')
}
```
...where both `<routePath>` and `<routeName>` are variables. These routes are imported to `app/src/main.js` and are then attached to the component tree using the `<router-view></router-view>` directive in `app/src/App.vue`.

#### Notice
When using `vue-router`, refrain from using [**HTML5 History Mode**](http://router.vuejs.org/en/essentials/history-mode.html). This mode is strictly meant for serving files over the `http` protocol and does not work properly with the `file` protocol that electron serves files with. The default `hash` mode is what you will need.

### vuex modules
Describing vuex is not the easiest thing to do, so please read [this](http://vuex.vuejs.org/en/intro.html) for a better understanding of what problem it tries to solve and how it works.

electron-vue takes advantage of vuex's module structure to create multiple data stores and are saved in `app/src/vuex/modules`.

Having multiple data stores can be great for organization, but can also be annoying to have to import each and every one. But don't fret, as `app/src/vuex/modules/index.js` does the dirty work for us! This little script let's `app/src/vuex/store.js` import all of our modules in one-shot.

## Using Static assets
Sometimes your don't want webpack to bundle some of your assets. Let's say you have a large sprite collection, but your app loads the images in on-demand. You don't want webpack to bundle every single sprite if only a few might be used at a time.

When using static assets, let's place them inside the `app/dist` folder. Essentially everything webpack produces in production builds lives in this folder, so everything inside here will be **included** in final builds.


#### Use Case
Let's say I have a component that loads an image, but I don't know the image's path until I do some other tasks first. To keep things simple, let's just use a `$data` variable to bind our `<img>`'s src.

```html
<template>
  <img v-bind:src="imageUrl">
</template>

<script>
  export default {
    data () {
      return { imageUrl: 'imgs/unsplash.png' }
    }
  }
</script>
```
Here webpack will not bundle the `unsplash.png` image and the app will look inside the `app/dist` directory for the asset.

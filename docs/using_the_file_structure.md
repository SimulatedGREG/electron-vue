# Using the file structure
electron-vue does its best to not force a particular project structure, but does try to follow common vue practices in regards to organizing components, routes, and vuex modules. The documentation below describes common practices used in the original project structure.

## On the subject of `vue` and `vuex`

### vue components
If you are unfamiliar with vue components, please give [this](http://vuejs.org/guide/application.html#Single-File-Components) a read. Using components gives our large complex applications more organization. Each component has the ability to encapsulate its own CSS, template, and JavaScript functionality.

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
###### NOTICE
Assets can also be organized in this manner. So if a particular component needs an image file, let's place that inside a folder named `assets`. If you are using dynamic assets that you do not want webpack to bundle, please read [**Using Dynamic Assets**](#using-dynamic-assets) below.

### vue routes
Out-of-the-box, vue-router is setup by default. Click [here](https://github.com/vuejs/vue-router) for more information. You can manually remove it from your app if needed, but creating a Single Page Application is much more practical when making electron apps. Do you really want to manage a bunch of BrowserWindows or static page navigation? Probably not.

Routes are held in `app/src/routes.js` and defined like so...
```js
'/<routePath>': {
  component: require('./components/<routeName>View'),
  name: '<routeName>'
}
```
...where both `<routePath>` and `<routeName>` are variables. These routes are imported to `app/src/main.js` and are then attached to the component tree using the `<router-view></router-view>` directive in `app/src/App.vue`.

### vuex modules
Describing vuex is not the easiest thing to do, so please read [this](http://vuex.vuejs.org/en/intro.html) for a better understanding of what problem it tries to solve and how it works.

electron-vue takes advantage of vuex's module structure to create multiple data stores and are saved in `app/src/vuex/modules`.

Having multiple data stores can be great for organization, but can also be annoying to have to import each and every one. But don't fret, as `app/src/vuex/modules/index.js` does the dirty work for us! This little script let's `app/src/vuex/store.js` import all of our modules in one-shot.

## Using Dynamic assets
Sometimes your don't want webpack to bundle some of your assets. Let's say you have a large sprite collection, but your app loads the images in dynamically. You don't webpack to bundle every single sprite if only a few might be used at a time.

When using dynamic assets, let's place them inside the `app/dist` folder. Essentially everything webpack produces in production builds lives in this folder, so everything inside here will be **included** in final builds.


#### Use Case
Let's say I have a component that loads an image, but I don't know the image's path until I do some other tasks first. To keep things simple, let's just use a `$data` variable to bind our `<img>` src.

```html
<template>
  <img v-bind:src="image_url">
</template>

<script>
  export default {
    data () {
      return { image_url: 'imgs/unsplash.png' }
    }
  }
</script>
```
Here webpack will not bundle the `unsplash.png` image and the app will look inside the `app/dist` directory for assets.

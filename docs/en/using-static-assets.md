# Using Static Assets

Sometimes your don't want `webpack` to bundle some of your assets. Let's say you have a large sprite collection, but your app loads the images in on-demand. `webpack` does not need to bundle every single sprite if only a few might be used at a time.

When using static assets, let's place them inside the `static/` folder. During the build step, `webpack` will copy all assets in the `static/` directory and add them to the production build.

#### Use Case within `src` tags in Vue

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

#### Use Case in JS with `path` and `__static`




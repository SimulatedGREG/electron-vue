# Using Static Assets

If you have used the official `vuejs-templates/webpack` boilerplate before, then you should be familiar with the `static/` directory. It is here where you can place static assets that both the `main` and `renderer` process can use. Using these assets with your Vue application is simple, but usage with `fs` and other modules that need a full path can be a little difficult. Thankfully, there's a handy `__static` variable 

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

Here `webpack` will not bundle the `unsplash.png` image and the app will look inside the `static/imgs/unsplash.png` directory for the asset. This is simple thanks to `vue-loader` doing most of the dirty work for us.

#### Use Case in JS with `path` and `__static`




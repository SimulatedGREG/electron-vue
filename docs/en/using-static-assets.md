# Using Static Assets

If you have used the official `vuejs-templates/webpack` boilerplate before, then you should be familiar with the `static/` directory. It is here where you can place static assets that both the `main` and `renderer` process can consume. Using these assets within your Vue application is simple, but usage with `fs` and other modules that need a full path can be a little tricky. Thankfully, electron-vue provides a `__static` variable that yields the path to the `static/` directory in both development and production.

### Use Case within `src` tags in Vue Components

Let's say I have a component that loads an image, but the image's path isn't known until some other task is completed. To keep things simple, let's just use a `data` variable to bind our `<img>`'s src.

**SomeComponent.vue**

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

Here `webpack` will not bundle the `unsplash.png` image and the application will look inside the `static/imgs/unsplash.png` directory for the asset. Thanks to `vue-loader`, all of the dirty work is done for us.

### Use Case within JS with `fs`,`path` and `__static`

Let's say we have a static asset that we need to read into our application using `fs`, but how do we get a reliable path, in both development and production, to the `static/` directory? electron-vue provides a global variable named `__static` that will yield a proper path to the `static/` directory. Here's how we can use it to read a simple text file in both development and production.

**static/someFile.txt**

```txt
foobar
```

**SomeFile.js \(**`main`** or **`renderer`** process\)**

```js
import fs from 'fs'
import path from 'path'

let fileContents = fs.readFileSync(path.join(__static, '/someFile.txt'), 'utf8')

console.log(fileContents)
// => "foobar"
```

Please note that in production all files are packed with [`asar`](https://github.com/electron/asar) by default as it is highly recommended. Because of this, assets within the `static/` folder can only be accessed within `electron` since it is aware of this behavior. So if you are planning to distribute files to your users, that can for example open in a external program, you would first need to copy those assets from your application into the user's document space or desktop. From there you could use the [`shell.openItem()`](https://electron.atom.io/docs/api/shell/#shellopenitemfullpath) electron API to open those assets.

An alternative method to this situation would be to configure `electron-packager`/`electron-builder` to set specific files to "unpack" from the `asar` archive in production. electron-vue has no plans to support this method; any issues related to this or how to set this up will be closed.


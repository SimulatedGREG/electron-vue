# Using Pre-Processors

One of the great benefits of using [`vue-loader`](https://github.com/vuejs/vue-loader) with [`webpack`](https://github.com/webpack/webpack) is the ability to pre-process your HTML/CSS/JS directly in your Vue components files without much effort at all. For more information about this check [**here**](https://vuejs.org/v2/guide/single-file-components.html).

## Use Case

Let's say we need to use Sass/SCSS for pre-processing our CSS. First, we need to install the proper `webpack` loader to handle this syntax.

#### Installing `sass-loader`

```bash
npm install --save-dev sass-loader node-sass
```

Once the loader we need is installed, everything is pretty much finished. `vue-loader` will magically take care of the rest. Now we can easily add `lang="sass"` or `lang="scss"` to our Vue component files. Notice we also installed `node-sass` as it is a dependent package for `sass-loader`.

#### Applying the `lang` attribute

So...

```html
<style>
  body {
    /* CSS */
  }
</style>
```

...now becomes...

```html
<style lang="scss">
  body {
    /* SCSS */
  }
</style>
```

The same principles apply for just about any other pre-processor. So maybe you need coffeescript for your JS? Simply install the [coffeescript-loader](https://github.com/webpack/coffee-loader) and apply the `lang="coffeescript"` attribute to your `<script>` tag.

For more advanced use of this feature please head over to the [vue-loader documentation](http://vue-loader.vuejs.org/en/configurations/pre-processors.html) for more information.

## Using Sass/SCSS globals

When using Sass/SCSS for your CSS syntax, it's very beneficial to make use of global variables/mixins throughout all Vue component files. Here's how to make that happen.

### Use Case

This example demonstrates how to apply a `globals.scss` to all Vue component files. This documentation assumes you have already setup `sass-loader` in your development environment as mentioned above.

#### Define your globals

**src/renderer/globals.scss**

```scss
$brand-primary: blue;
$brand-accent: turquoise;
```

#### Inject `globals.scss` directly into `node-sass`

Edit the `vue-loader` config in **.electron-vue/webpack.renderer.config.js**

```js
loaders: {
  sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1&data=@import "./src/renderer/globals"',
  scss: 'vue-style-loader!css-loader!sass-loader?data=@import "./src/renderer/globals";'
}
```

#### Use your globals

**SomeComponent.vue**

```html
<style lang="scss">
  body { color: $brand-primary; }
</style>
```




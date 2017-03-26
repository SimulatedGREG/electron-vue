# Using pre-processors

One of the great benefits of using [vue-loader](https://github.com/vuejs/vue-loader) with [webpack](https://github.com/webpack/webpack) is the ability to pre-process your HTML/CSS/JS directly in your Vue components files without much effort at all. For more information about this check **[here](https://vuejs.org/v2/guide/single-file-components.html)**.

## Use Case
Let's say we need to use Sass/SCSS for pre-processing our CSS. Firstly, we need to install the proper webpack loader to handle this syntax.

#### Installing `sass-loader` in our root directory
```bash
npm install --save-dev sass-loader node-sass
```

Once the loader we need is installed, everything is pretty much finished. `vue-loader` will magically take care of the rest. Now we can easily add `lang="sass"` or `lang="scss"` to our Vue component files. Notice we also installed `node-sass` as it is a dependent package for `sass-loader`.

#### Applying the `lang` attribute
So...
```html
<style>
  body {
    // Regular CSS
  }
</style>
```
...now becomes...
```html
<style lang="scss">
  body {
    // SCSS
  }
</style>
```

The same principles apply for just about any other pre-processor. So maybe you need coffeescript for your JS? Simply installed the [coffeescript-loader](https://github.com/webpack/coffee-loader) and apply the `lang="coffeescript"` attribute to your `<script>` tag.

For more advanced use of this feature please head over to the [vue-loader documentation](http://vue-loader.vuejs.org/en/configurations/pre-processors.html) for more information.

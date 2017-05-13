# Using CSS Frameworks

Although this may seem like a no brainer, I'd suggest you import your third-party CSS libraries into webpack using the [`style-loader`](https://github.com/webpack/style-loader), which is already setup for you.

## Use Case

Say you want to use [bootstrap](http://getbootstrap.com/), [bulma](http://bulma.io/), or [materialize](http://materializecss.com/) for your electron app. Go ahead and install from your library from `npm` like you normally would, but instead of attaching the asset to `index.ejs` we will import the CSS in our JavaScript, specifically in `src/renderer/main.js`.

#### Example

Let's install `bulma`

```bash
npm install bulma --save
```

Then inside `src/renderer/main.js` let's add this line.

```bash
import 'bulma/css/bulma.css'
```

Alternatively, you can also include `bulma` from inside a component file.

**App.vue**

```html
<style>
  @import "~bulma/css/bulma.css";
</style>
```

Now webpack will know to bundle `bulma` into our app and make it available in our production builds.

# Using Sass/SCSS globals

When using pre-processors for CSS, it's very beneficial to make use of global variables/mixins throughout all Vue component files. Here's how to make that happen.

## Use Case

This example demonstrates how to apply a `globals.scss` to all Vue component files. This documentation assumes you have already setup `sass-loader` in your development environment \([more info](using_pre-processors.md)\).

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




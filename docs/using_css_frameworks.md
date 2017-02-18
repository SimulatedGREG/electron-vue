# Using CSS frameworks

Although this may seem like a no brainer, I'd suggest you import your third-party CSS libraries into webpack using the [`style-loader`](https://github.com/webpack/style-loader), which is already setup for you. 

## Use Case
Say you want to use [bootstrap](http://getbootstrap.com/), [bulma](http://bulma.io/), or [materialize](http://materializecss.com/) for your electron app. Go ahead and install from `npm` inside your `app` directory like you normally would, but instead of attaching the asset to `index.ejs` we will import the CSS in our JavaScript, specifically in `app/src/renderer/main.js`.

#### Example
Let's install `bulma` inside our `app` directory.
```bash
npm install bulma --save
```
Then inside `app/src/renderer/main.js` let's add this line.
```bash
import 'bulma/css/bulma.css'
```
Now webpack will know to bundle `bulma` into our app and make it available in our production builds.

# Using Sass/SCSS globals

When using pre-processors for CSS, it's very beneficial to make use of global variables/mixins throughout all Vue component files. Here's how to make that happen.

## Use Case

This example demonstrates how to apply a `globals.scss` to all Vue component files. This documentation assumes you have already setup `sass-loader` in your development environment ([more info](using_pre-processors.md)).

#### Define your globals
**app/src/renderer/globals.scss**
```scss
$brand-primary: blue;
$brand-accent: turquoise;
```

#### Inject `globals.scss` directly into `node-sass`
**[webpack.renderer.config.js Line 50](https://github.com/SimulatedGREG/electron-vue/blob/master/template/webpack.renderer.config.js#L52)**
```js
loaders: {
  sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1&data=@import "./app/src/renderer/globals"',
  scss: 'vue-style-loader!css-loader!sass-loader?data=@import "./app/src/renderer/globals";'
}
```

#### Use your globals
***Some Vue Component File***
```html
<style lang="scss">
  body { color: $brand-primary; }
</style>
```
# Using CSS Frameworks

Although this may seem like a no brainer, I'd suggest you import your third-party CSS libraries into webpack using the [`style-loader`](https://github.com/webpack/style-loader), which is already setup for you.

## Use Case

Say you want to use [bootstrap](http://getbootstrap.com/), [bulma](http://bulma.io/), or [materialize](http://materializecss.com/) for your application. Go ahead and install your library from `npm` like you normally would, but instead of attaching the asset to `index.ejs` we will import the CSS in our JavaScript, specifically in `src/renderer/main.js`.

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

Now `webpack` will know to load in `bulma` for our application and make it available in our production builds.


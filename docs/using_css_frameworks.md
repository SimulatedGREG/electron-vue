# Using CSS frameworks

Although this may seem like a no brainer, I'd suggest you import your third-party CSS libraries into webpack using the [/style-loader](https://github.com/webpack/style-loader), which is already setup for you. Using a `<link>` tag on our `index.ejs` that references to `node_modules` will fail on production builds, as `node_modules` are ignored.

## Use Case
Say you want to use [bootstrap](http://getbootstrap.com/), [bulma](http://bulma.io/), or [materialize](http://materializecss.com/) for your electron app. Go ahead and install from `npm` inside your `app` directory like you normally would, but instead of attaching the asset to `index.ejs` we will import the CSS in our JavaScript, specifically in `app/src/main.js`.

#### Example
Let's install `bulma` inside our `app` directory.
```bash
npm install bulma --save
```
Then inside `app/src/main.js` let's add this line.
```bash
import 'bulma/css/bulma.css'
```
Now webpack will know to bundle `bulma` into our app and make it available in our production builds.

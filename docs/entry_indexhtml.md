# Entry `index.html`
electron-vue makes use of **[html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)** to create the `index.html` in production builds. During development you will find a `index.ejs` in the `app/src` directory. It is here where you can make changes to your entry HTML file.

If you are unfamiliar with how the HTMLWebpackPlugin works, then I'd encourage you take a look at its documentation. But in short, this plugin will automatically inject production assets including `build.js` and `styles.css` into the final `index.html`.

### `index.ejs` during development
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <app></app>
    <!-- webpack builds are automatically injected -->
  </body>
</html>
```

### `index.html` in production
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>app</title>
    <link href="styles.css" rel="stylesheet">
  </head>
  <body>
    <app></app>
    <!-- webpack builds are automatically injected -->
    <script type="text/javascript" src="build.js"></script>
  </body>
</html>
```

### On the subject of using CDNs
Although the benefits of using assets served from a CDN can be great for your app's final application size, I would advised against using them. The main reason being is that by doing so you would be assuming the app always has access to the internet, which is not always the case for Electron apps. This becomes a rather major issue with CSS frameworks like bootstrap, as your app will quickly become an un-styled mess.

> "I don't care, I still want to use a CDN"

If you are determined to still use a CDN, then you can still do so by adding the tags to your `index.ejs` file. Just make sure to set up proper UI/UX flows for when you app is offline.

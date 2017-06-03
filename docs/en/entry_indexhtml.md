# Entry `index.html`

electron-vue makes use of [**`html-webpack-plugin`**](https://github.com/ampedandwired/html-webpack-plugin) to create the `index.html` in production builds. During development you will find a `index.ejs` in the `src/` directory. It is here where you can make changes to your entry HTML file.

If you are unfamiliar with how this plugin works, then I'd encourage you take a look at its [documentation](https://www.npmjs.com/package/html-webpack-plugin). But in short, this plugin will automatically inject production assets including `renderer.js` and `styles.css` into a final minified `index.html`.

### `index.ejs` during development

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
    <%= ... %>
  </head>
  <body>
    <div id="app"></div>
    <!-- webpack builds are automatically injected -->
  </body>
</html>
```

### `index.html` in production \(non-minified\)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>app</title>
    <link href="styles.css" rel="stylesheet">
  </head>
  <body>
    <div id="app"></div>
    <script type="text/javascript" src="renderer.js"></script>
  </body>
</html>
```

### On the subject of using CDNs

Although the benefits of using assets served from a CDN can be great for your application's final build size, I would advised against using them. The main reason being is that by doing so you are assuming the application always has access to the internet, which is not always the case for Electron apps. This becomes a rather major issue with CSS frameworks like bootstrap, as your app will quickly become an un-styled mess.

> "I don't care, I still want to use a CDN"

If you are determined to still use a CDN, then you can still do so by adding the tags to your `src/index.ejs` file. Just make sure to set up proper UI/UX flows for when you app is offline.


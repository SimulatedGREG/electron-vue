# Entry `index.html`
electron-vue makes use of **[ampedandwired/html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)** to create the `index.html` in production builds. During development you will find a `main.ejs` in the `app/src` directory. It is here where you can make changes to your entry html file.

If you are unfamiliar with how the HTMLWebpackPlugin works, then I'd encourage you take a look at its documentation. But in short, this plugin will automatically inject production assets including `build.js` and `styles.css` into the final `index.html`.

### `main.ejs` during development
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
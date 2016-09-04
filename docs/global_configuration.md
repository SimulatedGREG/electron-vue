# Global Configuration

electron-vue uses the [webpack/webpack](https://github.com/webpack/webpack) module loader system for pre-processing, bundling, and building your app. The default settings are rather common and should meet most of your needs and a `config.js` is provided in the root directory for quick adjustments. Further customizations can be made by directly adjusting `webpack.config.js`.

#### ``config.js``
```js
{
  // Name of electron app
  // Will be used in production builds
  name: 'app',

  // Use ESLint
  // Further changes can be made in `.eslintrc.js`
  eslint: true,

  // webpack-dev-server port
  port: 9080,

  // electron-packager options
  // See `Building you app` for more info
  building: {
    arch: 'x64',
    asar: true,
    dir: path.join(__dirname, 'app'),
    icon: path.join(__dirname, 'app/icons/icon'),
    ignore: /node_modules|src|main.html|icons/,
    name: pkg.name,
    out: path.join(__dirname, 'builds'),
    overwrite: true,
    platform: process.env.PLATFORM_TARGET || 'all'
  }
}
```

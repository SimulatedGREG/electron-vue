# Global Configuration

electron-vue uses the [webpack](https://github.com/webpack/webpack) module loader system for pre-processing, bundling, and building your app. The default settings are rather common and should meet most of your needs. An additional `config.js` is provided in the root directory for quick adjustments. Further customization can be made by directly adjusting `webpack.main.config.js` and `webpack.renderer.config.js`.

#### `config.js`
**Note**: Some options may differ based on the settings choosen during `vue-cli` scaffolding.

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
    ignore: /\b(src|index\.ejs|icons)\b/,
    name: pkg.name,
    out: path.join(__dirname, 'builds'),
    overwrite: true,
    platform: process.env.PLATFORM_TARGET || 'all'
  }
}
```

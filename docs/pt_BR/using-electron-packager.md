# Using [`electron-packager`](https://github.com/electron-userland/electron-packager)

All builds produced by `electron-packager` can be found within the `build` folder.

#### Building for all platforms

Please know that not all Operating Systems can build for all other platforms.

```bash
npm run build
```

#### Building for a specific platform

Platforms include `darwin`, `mas`, `linux` and `win32`.

```bash
# build for darwin (macOS)
npm run build:darwin
```

#### Cleaning

Delete all builds from `build`.

```bash
npm run build:clean
```

### A note for non-Windows users

If you are wanting to build for Windows **with a custom icon** using a non-Windows platform, you must have [wine](https://www.winehq.org/) installed. [More Info](https://github.com/electron-userland/electron-packager#building-windows-apps-from-non-windows-platforms).

### Default building configurations

Further customization can be made at `.electron-vue/build.config.js` in accordance to `electron-packager`'s options found [here](https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options). The name applied to your built application is set with the `productName` value in your `package.json`.

```js
{
    // Target 'x64' architecture
    arch: 'x64',

    // Compress app using 'electron/asar'
    asar: true,

    // Directory of the app
    dir: path.join(__dirname, '../'),

    // Set electron app icon
    // File extensions are added based on platform
    //
    // If building for Linux, please read
    // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#icon
    icon: path.join(__dirname, '../build/icons/icon'),

    // Ignore files that would bloat final build size
    ignore: /(^\/(src|test|\.[a-z]+|README|yarn|static|dist\/web))|\.gitkeep/,

    // Save builds to `builds`
    out: path.join(__dirname, '../build'),

    // Overwrite existing builds
    overwrite: true,

    // Environment variable that sets platform
    platform: process.env.BUILD_TARGET || 'all'
}
```




# Making a Release/Build
 electron-vue makes use of [electron-userland/electron-packager](https://github.com/electron-userland/electron-packager) to produce builds.

## Defaults
```js
{
    // `app/package.json` version
    'app-version': pkg.version, 
    
    // Target 'x64' architecture
    arch: 'x64',
    
    // Compress app using 'electron/asar'
    asar: true,
    
    // Directory of the app
    dir: path.join(__dirname, '../app'),
    
    // Ignore files that would bloat final build size
    ignore: /node_modules|src|main.html/,
    
    // `app/package.json` name
    name: pkg.name,
    
    // Save builds to `releases`
    out: path.join(__dirname, '../releases'),
    
    // Overwrite existing builds
    overwrite: true,
    
    // Environment variable that sets platform
    platform
}
  ```
 More customization can be made at `build/release.js` in accordance to `electron-packager`'s options found [here](https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options).


#### Building for all platforms
```bash
npm run release
```

#### Building for a specific platform
 Platforms include `darwin`, `mas`, `linux` and `win32`.
```bash
npm run release:darwin # builds for darwin (OS X)
```

#### Cleaning
 Delete all builds from `releases`
```bash
npm run release:clean
```

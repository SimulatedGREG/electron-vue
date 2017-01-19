# Using [electron-builder](https://github.com/electron-userland/electron-builder)

All builds produced by `electron-builder` can be found within the `dist` folder.

#### Building

```bash
npm run build
```

#### Building unpacked directory
Using for quick testing.

```bash
npm run build:dir
```

#### Cleaning
Delete all builds from `builds`.

```bash
npm run build:clean
```

### Default building configurations

Further customization can be made at `package.json` in accordance to `electron-builders`'s options found [here](https://github.com/electron-userland/electron-builder/wiki/Options).

```js
{
  "productName": "ElectronVue",
  "appId": "org.simulatedgreg.electron-vue",
  "category": "public.app-category.tools",
  "dmg": {
    "contents": [
      {
        "x": 410,
        "y": 150,
        "type": "link",
        "path": "/Applications"
      },
      {
        "x": 130,
        "y": 150,
        "type": "file"
      }
    ]
  },
  "files": [
    "dist/",
    "node_modules/",
    "package.json"
  ],
  "mac": {
    "icon": "app/icons/icon.icns"
  },
  "win": {
    "icon": "app/icons/icon.ico"
  },
  "linux": {
    "target": [
      "deb",
      "AppImage"
    ]
  }
}
```



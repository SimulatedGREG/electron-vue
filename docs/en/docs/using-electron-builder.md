# Using [electron-builder](https://github.com/electron-userland/electron-builder)

All builds produced by `electron-builder` can be found within the `build` directory.

#### Building

```bash
npm run build
```

#### Building unpacked directory

Produce simple executable without full installer. Useful for quick testing.

```bash
npm run build:dir
```

### Default building configurations

Further customization can be made at **`package.json`** in accordance to `electron-builders`'s options found [here](https://github.com/electron-userland/electron-builder/wiki/Options).

```js
"build": {
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
  "directories": {
    "output": "build"
  },
  "files": [
    "dist/electron",
    "node_modules/",
    "package.json"
  ],
  "mac": {
    "icon": "build/icons/icon.icns"
  },
  "win": {
    "icon": "build/icons/icon.ico"
  },
  "linux": {
    "icon": "build/icons"
  }
}
```




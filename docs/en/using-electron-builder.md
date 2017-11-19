# Using [`electron-builder`](https://github.com/electron-userland/electron-builder)

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

### Default building configuration

Further customization can be made at `package.json` in accordance to `electron-builders`'s options found [here](https://github.com/electron-userland/electron-builder/wiki/Options).

```js
"build": {
  "productName": "ElectronVue",
  "appId": "org.simulatedgreg.electron-vue",
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

## Automated Deployments using CI

When using electron-vue's `electron-builder` configuration, you are also provided a `appveyor.yml` and `.travis.yml` for automated deployments. Both config files are setup for building your electron application and pushing artifacts to a GitHub release, Bintray, etc. Travis CI is used to build both `linux` and `darwin` \(macOS\) while AppVeyor is used to build `win32`. Both services are free for OSS projects.

#### Setting up Travis CI/AppVeyor

1. Create an account over at [Travis CI](https://travis-ci.org/getting_started) / [AppVeyor](https://www.appveyor.com/)
2. Link your GitHub repository that has your electron-vue project
3. Visit [https://github.com/settings/tokens](https://github.com/settings/tokens) and hit **Generate new token **\(the same token can be used for both Travis CI & AppVeyor\)
   1. Set a **Token description**
   2. Check the **public\_repo **scope
   3. Hit **Generate token**
4. Copy your new token and save for later
5. Open your repository settings on Travis CI / AppVeyor to add a new **Environment Variable**
   1. Set the name of the variable to `GH_TOKEN`
   2. Set the value of the variable to the GitHub access token you just created
   3. **Save** the new variable and ensure encryption is enabled

At this point, everything should be setup. Travis CI/AppVeyor by default will watch for any pushes to your `master` branch. When a push is made, Travis CI/AppVeyor will then clone down your repository to its server and begin the build process. During the final stages, `electron-builder` with see the `GH_TOKEN` environment variable and create a draft release and upload the artifacts to your public GitHub repository. From this point, you can edit the draft release and then publish it to the world. After publishing your release, make sure future releases are marked with a new version number by updating your `package.json`.

#### Auto Updating

Enabling your application to receive automatic updates is a super nice feature to have, but know that [**Code Signing**](https://github.com/electron-userland/electron-builder/wiki/Code-Signing) is required. You can setup code signing by adding a few more environment variables based on what `electron-builder` needs described [here](https://www.electron.build/code-signing). Once you have your certificates setup, you can then install `electron-updater` and comment out the chunk of code at the bottom of `src/main/index.js` to enable auto updating.

If you are like most people and do not have a fancy code signing certificate, then you can always use the GitHub API to check for new releases. When a new release is detected, provide a notification within your application to point users to a download page where they can download and install the new build. Thanks to the amazing installer that `electron-builder` provides, user's do not have to uninstall the current version and the new installation will replace the old while still persisting any web storage or `userData` files.


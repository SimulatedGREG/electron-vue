# Debugging

### Main Process

When running your application in development you may have noticed a message from the `main` process mentioning a remote debugger. Ever since the release of `electron@^1.7.2`, remote debugging over the Inspect API was introduced and can be easily accessed by opening the provided link with Google Chrome or through another debugger that can remotely attach to the process using the default port of 5858, such as Visual Studio Code.

```bash
┏ Electron -------------------

  Debugger listening on port 5858.
  Warning: This is an experimental feature and could change at any time.
  To start debugging, open the following URL in Chrome:
      chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:5858/22271e96-df65-4bab-9207-da8c71117641

┗ ----------------------------
```

### Production Builds

###### Notice

Although it is possible to debug your application in production, please do know that production code is minified and highly unreadable compared to what you find during development.

##### `renderer` Process

There isn't much of a big difference here than it is in development. You can simply invoke the dev tools using the [`BrowserWindow` APIs](https://electron.atom.io/docs/api/web-contents/#contentsopendevtoolsoptions). Using the initial electron-vue setup, you can add the following snippet of code inside `src/main/index.js` , just after the `new BrowserWindow` construction, to force the dev tools to open on launch.

```js
mainWindow.webContents.openDevTools()
```

##### `main` Process

Similar to what is mentioned above, you can also attach an external debugger to the `main` process to remotely debug your application. In order to activate the debugger in production you can add the follow snippet after the `app` import inside `src/main/index.js`. Then you can navigate Google Chrome to `chrome://inspect` and get connected.

```js
app.commandLine.appendSwitch('inspect', '5858')
```




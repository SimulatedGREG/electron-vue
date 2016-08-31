# FAQs

### Why does my electron app show a file explorer?

#### TL;DR
Your `app/src` contains error(s). Check console, fix errors, then refresh electron.
##### Long answer
 If error(s) are present in you `app/src` this creates conflicts with ESLint on first run. In turn, an INVALID webpack `build.js` is produced which interrupts `HtmlWebpackPlugin` from creating `index.html`. Since `webpack-dev-server` doesn't have the `index.html` ready to serve, the server falls back to the file explorer.
 
### Why is `vue-devtools`/`devtron` missing?
Make sure to close and reopen the developer tools panel on first launch if they are missing. Also check your terminal to make sure they were installed successfully.

### Why are my main process modules missing in production builds?

#### TL;DR
electron-vue only bundles the renderer process and `node_modules` are ignored in production builds.

##### [Long answer](https://simulatedgreg.gitbooks.io/electron-vue/content/docs/project_structure.html#on-the-subject-of-webpack-bundling)
##### [Potential workaround](https://github.com/SimulatedGREG/electron-vue/issues/22)
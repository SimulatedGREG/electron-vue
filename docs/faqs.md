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

### Why did `npm run lint` end with an error?

The default nature of eslint is to print linting errors to console, and if there is any found the script will end with a non-zero exit (which produces npm errors). This is normal behavior. 

### Why didn't `npm run lint:fix` fix all my linting errors?

#### TL;DR
The *fix* flag for eslint is not perfect and the `eslint-plugin-html` is not able to fix linting errors found in Vue component files.

##### Long Answer
Although the eslint feature for fixing linting errors is great, it is not perfect. In most cases all syntax errors will be resolved and corrected in your JS files. On the other hand, those linting errors found in your Vue component files are a different story. electron-vue takes use of the `eslint-plugin-html` in order to fully parse Vue components files, but because of this, eslint is not able to automatically correct issues. There's no plan to bring better support with Vue components files, as this is the same behavior found in the official webpack template ([`vue-templates/webpack`](https://github.com/vuejs-templates/webpack)).

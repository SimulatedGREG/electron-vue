# FAQs

### Why does my electron app show a file explorer?

#### TL;DR
Your `app/src` contains error(s). Check console, fix errors, then refresh electron.
##### Long answer
 If error(s) are present in you `app/src` this creates conflicts with ESLint on first run. In turn, an INVALID webpack `build.js` is produced which interrupts `HtmlWebpackPlugin` from creating `index.html`. Since `webpack-dev-server` doesn't have the `index.html` ready to serve, the server falls back to the file explorer.
 
### Why is `vue-devtools`/`devtron` missing?
Make sure to close and reopen the developer tools panel on first launch if they are missing. Also check your terminal to make sure they were installed successfully.

### Where do I put Static Assets?
**[Using Static Assets](https://simulatedgreg.gitbooks.io/electron-vue/content/docs/using_the_file_structure.html#using-static-assets)**

### Why did `npm run lint` end with an error?

The default nature of eslint is to print linting errors to console, and if there is any found the script will end with a non-zero exit (which produces npm errors). This is normal behavior. 

### Why didn't `npm run lint:fix` fix all my linting errors?



#### TL;DR
The *fix* flag for eslint is not perfect and the `eslint-plugin-html` is not able to fix linting errors found in Vue component files.

##### Long Answer
Although the eslint feature for fixing linting errors is great, it is not perfect. In most cases all syntax errors will be resolved and corrected in your JS files. On the other hand, those linting errors found in your Vue component files are a different story. electron-vue takes use of the `eslint-plugin-html` in order to fully parse Vue component files, but eslint plugins are currently lacking the ability to auto-fix. For more information check out this **[issue](https://github.com/eslint/eslint/issues/5121)**.

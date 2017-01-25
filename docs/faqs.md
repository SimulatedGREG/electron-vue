# FAQs

* [Why does my electron app show a file explorer?](#why-does-my-electron-app-show-a-file-explorer)
* [Why is `vue-devtools`/`devtron` missing?](#why-is-vue-devtoolsdevtron-missing)
* [Where do I put Static Assets?](#where-do-i-put-static-assets)
* [Why did `npm run lint` end with an error?](#why-did-npm-run-lint-end-with-an-error)
* [Why didn't `npm run lint:fix` fix all my linting errors?](#why-didnt-npm-run-lintfix-fix-all-my-linting-errors)

---

## Why does my electron app show a file explorer?

#### TL;DR
Your `app/src` contains error(s). Check console, fix errors, then refresh electron.
##### Long answer
 If error(s) are present in you `app/src` this creates conflicts with ESLint on first run. In turn, an INVALID webpack `build.js` is produced which interrupts `HtmlWebpackPlugin` from creating `index.html`. Since `webpack-dev-server` doesn't have the `index.html` ready to serve, the server falls back to the file explorer.
 
## Why is `vue-devtools`/`devtron` missing?
Make sure to close and reopen the developer tools panel on first launch if they are missing. Also check your terminal to make sure they were installed successfully.

## Where do I put Static Assets?
**[Using Static Assets](renderer-process.md#using-static-assets)**

## Why did `npm run lint` end with an error?

The default nature of eslint is to print linting errors to console, and if there is any found the script will end with a non-zero exit (which produces npm errors). This is normal behavior. 

## Why didn't `npm run lint:fix` fix all my linting errors?

The `--fix` flag for eslint is not perfect and `eslint-plugin-html@^1.0.0` is not able to fix linting errors found in Vue component files. Simply updating to `eslint-plugin-html@^2.0.0` will to enable `--fix` support within Vue component files.

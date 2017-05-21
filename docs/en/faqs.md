# FAQs

* [Why is my electron app blank after running `npm run dev`?](#why-is-my-electron-app-blank-after-running-npm-run-dev)
* [Why does my electron app show a file explorer?](#why-does-my-electron-app-show-a-file-explorer)
* [Why is `vue-devtools`/`devtron` missing?](#why-is-vue-devtoolsdevtron-missing)
* [Where do I put Static Assets?](#where-do-i-put-static-assets)
* [Why did `npm run lint` end with an error?](#why-did-npm-run-lint-end-with-an-error)
* [Why can't I load my app in a web browser?](#why-cant-i-load-my-app-in-a-web-browser)

---

## Why is my electron app blank after running `npm run dev`?

#### TL;DR

Make sure you don't have a personal **proxy** setup that could tamper with `webpack-dev-server`.

## Why does my electron app show a file explorer?

#### TL;DR

Your `src/renderer` contains error\(s\). Check console, fix errors, then refresh electron with `CommandOrControl+R`.

##### Long answer

If error\(s\) are present in you `src/renderer` this creates conflicts with ESLint on first run. In turn, an INVALID webpack `renderer.js` is produced which interrupts `HtmlWebpackPlugin` from creating `index.html`. Since `webpack-dev-server` doesn't have the `index.html` ready to serve, the server falls back to the file explorer.

## Why is `vue-devtools`/`devtron` missing?

Make sure to close and reopen the developer tools panel on first launch if they are missing. Also check your terminal check for any error messages that may occur during installation.

## Where do I put Static Assets?

[**Using Static Assets**](renderer-process.md#using-static-assets)

## Why did `npm run lint` end with an error?

The default nature of eslint is to print linting errors to console, and if there is any found the script will end with a non-zero exit \(which produces npm errors\). This is normal behavior.

## Why can't I load my app in a web browser?

[\#195](https://github.com/SimulatedGREG/electron-vue/issues/195)




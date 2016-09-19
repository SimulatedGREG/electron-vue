# NPM Scripts
To help eliminate redundant tasks around the development process, please to take note of some of the NPM scripts available to you. The following commands should be ran from your project's root directory.

### `npm run build`
Make quick builds using electron-packager. More info can be found in the [**Building your app**](building_your_app.md) section.

### `npm run dev`
Run app in development.

### `npm run lint`
Lint all your `app/src`'s JS & Vue component files.

### `npm run lint:fix`
Lint all your `app/src`'s JS & Vue component files and attempt to fix issues.

##### NOTE
Linting errors found within Vue component files cannot be automatically corrected. This is a architectural issue with `eslint`'s plugin system. **[More information.](https://simulatedgreg.gitbooks.io/electron-vue/content/docs/faqs.html#why-didnt-npm-run-lintfix-fix-all-my-linting-errors)**

### `npm run pack`
Runs webpack in production. Although this command is available, there may not be many cases where it is need as `npm run build` will do this before hand.

### `npm run vue:route`, `npm run vuex:module`
See [**Vue Accessories**](vue_accessories.md) for more info.

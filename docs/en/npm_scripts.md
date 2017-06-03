# NPM Scripts

To help eliminate redundant tasks around the development process, please take note of some of the NPM scripts available to you. The following commands should be ran from your project's root directory. And of course, you can run any of the below commands using `yarn run <command>`.

### `npm run build`

Build your app for production and package. More info can be found in the [**Building Your App**](building_your_app.md) section.

### `npm run dev`

Run app in development.

### `npm run lint`

Lint all your `src/`'s and `test/`'s JS & Vue component files.

### `npm run lint:fix`

Lint all your `src/`'s and `test/`'s JS & Vue component files and attempt to fix issues.

### `npm run pack`

Run both `npm run pack:main` & `npm run pack:renderer`. Although these commands are available, there are not many cases where you will need to manually do this as `npm run build` will handle this step.

### `npm run pack:main`

Run webpack to bundle `main` process source code.

### `npm run pack:renderer`

Run webpack to bundle `renderer` process source code.

### `npm run unit`

Run unit tests with Karma + Jasmine. More information on [**Unit Testing**](unittesting.md).

### `npm run e2e`

Run end-to-end tests with Spectron + Mocha. More information on [**End-to-end Testing**](end-to-end_testing.md).

### `npm test`

Runs both `npm run unit` & `npm run e2e`. More information on [**Testing**](testing.md).


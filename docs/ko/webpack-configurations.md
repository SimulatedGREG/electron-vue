# Webpack Configurations

electron-vue comes packed with three separate webpack config files located in the `.electron-vue/` directory. Aside for the optional use of the `web` output, both `main` and `renderer` are similar in setup. Both make use of `babel-preset-env` to target `node@7` features, use `babili`, and treat all modules as `externals`.

### `.electron-vue/webpack.main.config.js`

Targets electron's `main` process. This configuration is rather bare, but does include some common `webpack` practices.

### `.electron-vue/webpack.renderer.config.js`

Targets electron's `renderer` process. This configuration handles your Vue application, so it includes `vue-loader` and many other configurations that are available in the official `vuejs-templates/webpack` boilerplate.

##### White-listing Externals

One important thing to consider about this config is that you can whitelist specific modules to not treat as webpack `externals`. There aren't many use cases where this functionality is needed, but for the case of Vue UI libraries that provide raw `*.vue` components they will need to be whitelisted, so `vue-loader` is able to compile them. Another use case would be using webpack `alias`es, such as setting `vue` to import the full Compiler + Runtime build. Because of this, `vue` is already in the whitelist.

### `.electron-vue/webpack.web.config.js`

Targets building your `renderer` process source code for the browser. This config is provided as a strong starting base if you are in need of publishing to web. **electron-vue does not support web output further than what is provided.** Issues related to web output will most likely be deferred or closed.


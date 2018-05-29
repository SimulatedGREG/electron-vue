const path = require('path');
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');
const updateWebpackConfig = require('storybook-readme/env/vue/updateWebpackConfig');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Extend it as you need.
  function resolve(dir) {
    return path.join(__dirname, '..', dir);
  }

  config.resolve = {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src/renderer'),
    },
  };


  let v = config.module.rules.find(function (r) {
    if (r.loader == undefined) return false;
    if (r.loader.includes('vue-loader')) return true;
  })

  if (v != undefined) {
    let i = config.module.rules.indexOf(v)
    config.module.rules[i] = {
      test: /\.vue$/,
      use: {
        loader: v.loader,
        options: {
          extractCSS: true,
          loaders: {
            sass: ['vue-style-loader', 'css-loader','sass-loader'],
            scss: ['vue-style-loader', 'css-loader','sass-loader']
          }
        }
      }
    }
  }

  config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader','css-loader','sass-loader']
    }
  )

  config.module.rules.push({
    test: [/\.stories\.js$/, /index\.js$/],
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    include: [path.resolve(__dirname, '../src')],
    enforce: 'pre',
  });

  config.plugins.push(new ExtractTextPlugin('styles.css'))
  return updateWebpackConfig(config);
};

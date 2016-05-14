'use strict'

const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = {
  devtool: '#eval-source-map',
  entry: {
    build: [path.join(__dirname, 'app/src/main.js')]
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules|devtools/
      },
      {
        test: /\.vue$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      excludeChunks: ['devtools'],
      filename: 'index.html',
      template: './app/main.html'
    }),
    new webpack.NoErrorsPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'app/dist')
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  target: 'electron-renderer',
  vue: {
    loaders: {
      sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1',
      scss: 'vue-style-loader!css-loader!sass-loader'
    }
  },
  vueDevTools: true
}

/**
 * Credits to
 * https://github.com/bradstewart/electron-boilerplate-vue/pull/17
 *
 * Apply vue-devtools window. Is ignored in production mode when building
 */
if(config.vueDevTools && process.env.NODE_ENV !== 'production') {
  config.entry.build.unshift(
    path.join(__dirname, 'devtools/hook.js'),
    path.join(__dirname, 'devtools/backend.js')
  )

  config.entry.devtools = [
    path.join(__dirname, 'devtools/devtools.js')
  ]

  config.plugins.push(new HtmlWebpackPlugin({
    filename: 'devtools.html',
    template: path.join(__dirname, 'devtools/index.html'),
    excludeChunks: ['build']
  }))
}

if(process.env.NODE_ENV === 'production')
  config.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  }))

module.exports = config

'use strict'

const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = {
  devtool: '#eval-source-map',
  entry: path.join(__dirname, 'app/src/main.js'),
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
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
      filename: 'index.html',
      template: './app/index.html',
      inject: true
    }),
    new webpack.NoErrorsPlugin()
  ],
  output: {
    filename: 'build.js',
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
  vueDevTools: false
}

if(config.vueDevTools) {
  config.plugins.push(new HtmlWebpackPlugin({
    // TODO: Bring in vue devtools
  }))
}

module.exports = config

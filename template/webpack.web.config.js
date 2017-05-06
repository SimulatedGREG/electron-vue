'use strict'

process.env.BABEL_ENV = 'renderer'

const path = require('path')
const pkg = require('./app/package.json')
const settings = require('./config.js')
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//
// webConfig should ideally inherit from rendererConfig as much as possible.
// 
const rendererConfig = require('./webpack.renderer.config')

let webConfig = {
  entry: {
    app: path.join(__dirname, 'app/src/web/main.js'),
  },
  output: {
    path: path.join(__dirname, 'app/dist'),
    filename: '[name].js'
  },

  //
  // Just inherit the same module defs from renderer config.
  // 
  module: rendererConfig.module,
  
  //
  // Just inherit the same plugin defs from renderer config.
  //
  plugins: rendererConfig.plugins,

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'components': path.join(__dirname, 'app/src/renderer/components'),
      'renderer': path.join(__dirname, 'app/src/renderer')
    },
    extensions: ['.js', '.vue', '.json', '.css', '.node'],
    modules: [
      path.join(__dirname, 'app/node_modules'),
      path.join(__dirname, 'node_modules')
    ]
  },
}

module.exports = webConfig

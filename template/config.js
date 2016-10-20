'use strict'

const path = require('path')

let config = {
  // Name of electron app
  // Will be used in production builds
  name: '{{ name }}',

{{#if eslint}}
  // Use ESLint (extends `{{ eslintConfig }}`)
  // Further changes can be made in `.eslintrc.js`
  eslint: true,

{{/if}}
  // webpack-dev-server port
  port: 9080,

  // electron-packager options
  // Docs: https://simulatedgreg.gitbooks.io/electron-vue/content/docs/building_your_app.html
  building: {
    arch: 'x64',
    asar: true,
    dir: path.join(__dirname, 'app'),
    icon: path.join(__dirname, 'app/icons/icon'),
    ignore: /\b(node_modules|src|index\.ejs|icons)\b/,
    out: path.join(__dirname, 'builds'),
    overwrite: true,
    platform: process.env.PLATFORM_TARGET || 'all'
  }
}

config.building.name = config.name

module.exports = config

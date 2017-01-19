'use strict'
{{#if_eq builder 'packager'}}

const path = require('path')
{{/if_eq}}

let config = {
{{#if_eq builder 'packager'}}
  // Name of electron app
  // Will be used in production builds
  name: '{{ name }}',

{{/if_eq}}
{{#if eslint}}
  // Use ESLint (extends `{{ eslintConfig }}`)
  // Further changes can be made in `.eslintrc.js`
  eslint: true,

{{/if}}
  // webpack-dev-server port
  port: 9080{{#if_eq builder 'packager'}},

  // electron-packager options
  // Docs: https://simulatedgreg.gitbooks.io/electron-vue/content/docs/building_your_app.html
  building: {
    arch: 'x64',
    asar: true,
    dir: path.join(__dirname, 'app'),
    icon: path.join(__dirname, 'app/icons/icon'),
    ignore: /\b(src|index\.ejs|icons)\b/,
    out: path.join(__dirname, 'builds'),
    overwrite: true,
    platform: process.env.PLATFORM_TARGET || 'all'
  }
{{/if_eq}}

}
{{#if_eq builder 'packager'}}

config.building.name = config.name

{{/if_eq}}
module.exports = config

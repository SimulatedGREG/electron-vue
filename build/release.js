'use strict'

const pkg = require('../app/package.json')
const packager = require('electron-packager')
const path = require('path')
const platform = process.env.PLATFORM_TARGET || 'all'

let options = {
  'app-version': pkg.version,
  arch: 'x64',
  asar: false,
  dir: path.join(__dirname, '../app'),
  ignore: /node_modules|src|main.html/,
  name: pkg.name,
  out: path.join(__dirname, '../releases'),
  overwrite: true,
  platform
}

packager(options, (err, appPaths) => {
  if(err) console.error(err)

  console.log('Build(s) successful!')
  console.log(appPaths)
})

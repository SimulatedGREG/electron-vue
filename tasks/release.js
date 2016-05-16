'use strict'

const exec = require('child_process').exec
const del = require('del')
const pkg = require('../app/package.json')
const packager = require('electron-packager')
const path = require('path')
const platform = process.env.PLATFORM_TARGET || 'all'


/**
 * Clean previous `dist` files
 */
console.log('\x1b[33mCleaning previous `dist` files...\n\x1b[0m')
del(['app/dist/*']).then(paths => {
  console.log('Deleted:\n', paths.join('\n'))
  pack()
})

/**
 * Build webpack in production
 */
function pack () {
  console.log('\x1b[33mBuilding webpack in production mode...\n\x1b[0m')
  let pack = exec('npm run pack')

  pack.stdout.on('data', data => console.log(data))
  pack.stderr.on('data', data => console.error(data))
  pack.on('exit', code => build())
}


/**
 * Use electron-packager to build electron app
 */
function build () {
  let options = {
    'app-version': pkg.version,
    arch: 'x64',
    asar: true,
    dir: path.join(__dirname, '../app'),
    icon: path.join(__dirname, '../app/icons/icon'),
    ignore: /node_modules|src|main.html|icons/,
    name: pkg.name,
    out: path.join(__dirname, '../builds'),
    overwrite: true,
    platform
  }

  console.log('\x1b[34mBuilding electron app(s)...\n\x1b[0m')
  packager(options, (err, appPaths) => {
    if(err) console.error(err)

    console.log('Build(s) successful!')
    console.log(appPaths)

    console.log('\n\x1b[34mDONE\n\x1b[0m')
  })
}

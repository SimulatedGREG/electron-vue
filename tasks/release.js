'use strict'

const exec = require('child_process').exec
const packager = require('electron-packager')

pack()

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
  let options = require('../config').building

  console.log('\x1b[34mBuilding electron app(s)...\n\x1b[0m')
  packager(options, (err, appPaths) => {
    if(err) console.error(err)

    console.log('Build(s) successful!')
    console.log(appPaths)

    console.log('\n\x1b[34mDONE\n\x1b[0m')
  })
}

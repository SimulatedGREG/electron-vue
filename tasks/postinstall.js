'use strict'

const exec = require('child_process').exec
const del = require('del')
const fs = require('fs')
const path = require('path')

appInstall()

function appInstall () {
  console.log('\x1b[33mRunning postinstall...\n\x1b[0m')
  let install = exec('cd app && npm i')

  install.stdout.on('data', data => console.log(data))
  install.stderr.on('data', data => console.error(data))
  install.on('exit', code => clean())
}

function clean () {
  del(['.git']).then(paths => {
    let gitIgnore = fs.readFileSync(path.join(__dirname, '../.gitignore'), 'utf8').split('\n')
    gitIgnore.splice(gitIgnore.length - 1, 1)

    gitIgnore.push(
      'docs',
      'book.json',
      'SUMMARY.md'
    )

    fs.writeFileSync(path.join(__dirname, '../.gitignore'), gitIgnore.join('\n'))
    process.exit()
  })
}

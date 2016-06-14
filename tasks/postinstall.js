'use strict'

const exec = require('child_process').exec
const fs = require('fs')
const path = require('path')

appInstall()

function appInstall () {
  console.log('\x1b[33mRunning postinstall...\nRunning npm install in app directory...\x1b[0m')
  let install = exec('cd app && npm i')

  install.stdout.on('data', data => console.log(data))
  install.stderr.on('data', data => console.error(data))
  install.on('exit', code => clean())
}

function clean () {
  console.log('\x1b[33mAdding docs to .gitignore...\x1b[0m')
  let gitIgnore = fs.readFileSync(path.join(__dirname, '../.gitignore'), 'utf8').split('\n')
  gitIgnore.splice(gitIgnore.length - 1, 1)

  gitIgnore.push(
    'docs',
    'book.json',
    'SUMMARY.md'
  )

  fs.writeFileSync(path.join(__dirname, '../.gitignore'), gitIgnore.join('\n'))
  console.log('\x1b[33mDONE!\nMake sure to check out the documentation at https://simulatedgreg.gitbooks.io/electron-vue/content/docs/development.html\x1b[0m')
  process.exit()
}

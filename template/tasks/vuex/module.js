'use strict'

const fs = require('fs')
const path = require('path')

const moduleName = process.argv[2]
const modulePath = path.join(__dirname, `../../app/src/renderer/vuex/modules/${moduleName}.js`)

const template = fs.readFileSync(
  path.join(__dirname, 'module.template.txt'),
  'utf8'
)

fs.writeFileSync(
  modulePath,
  template
)

console.log(`\n\x1b[33m[vuex]\x1b[0m  module "${moduleName}" has been created`)
console.log(modulePath)

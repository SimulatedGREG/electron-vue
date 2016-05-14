'use strict'

const fs = require('fs')
const path = require('path')

let moduleName = process.argv[2]
let template = fs.readFileSync(
  path.join(__dirname, 'module.template.txt'),
  'utf8'
)

fs.writeFileSync(
  path.join(__dirname, `../../app/src/vuex/modules/${moduleName}.js`),
  template
)

console.log(`\n\x1b[33m[vuex]\x1b[0m  module "${moduleName}" has been created`)
console.log(path.join(__dirname, `../../app/src/vuex/modules/${moduleName}.js`))

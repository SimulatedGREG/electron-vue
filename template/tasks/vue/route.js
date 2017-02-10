'use strict'

const fs = require('fs')
const path = require('path')

const routeName = process.argv[2]
const rendererPath = path.join(__dirname, '../../app//src/renderer')
const t = (string, obj) => string.replace(/\{{2}\s*([$A-Z_][0-9A-Z_$]*)\s*\}{2}/ig, (match, key) => obj[key] || '')

let routes = fs.readFileSync(
  path.join(rendererPath, 'routes.js'),
  'utf8'
).split('\n')

let routeTemplate = fs.readFileSync(
  path.join(__dirname, 'route.template.txt'),
  'utf8'
)
let routesTemplate = fs.readFileSync(
  path.join(__dirname, 'routes.template.txt'),
  'utf8'
)

routes.splice(
  routes.length - 6,
  0,
  t(routesTemplate, {
    routeName
  }).replace(/\n$/, '')
)

fs.writeFileSync(
  path.join(rendererPath, `components/${routeName}View.vue`),
  routeTemplate
)

fs.mkdirSync(path.join(rendererPath, `components/${routeName}View`))

fs.writeFileSync(
  path.join(rendererPath, 'routes.js'),
  routes.join('\n')
)

console.log(`\n\x1b[33m[vue]\x1b[0m  route "${routeName}" has been created`)
console.log('  [ \n' + [
  '    ' + path.join(rendererPath, `components/${routeName}View.vue`),
  path.join(rendererPath, `components/${routeName}View`),
  path.join(rendererPath, 'routes.js'),
].join(',\n    ') + '\n  ]')

'use strict'

process.env.NODE_ENV = 'production'

const chalk = require('chalk')
const del = require('del')
{{#if_eq builder 'packager'}}
const packager = require('electron-packager')
{{else}}
const { spawn } = require('child_process')
{{/if_eq}}
const webpack = require('webpack')
const Multispinner = require('multispinner')

{{#if_eq builder 'packager'}}const buildConfig = require('./build.config'){{/if_eq}}
const mainConfig = require('./webpack.main.config')
const rendererConfig = require('./webpack.renderer.config')

const doneLog = chalk.bgGreen.white(' DONE ') + ' '
const errorLog = chalk.bgRed.white(' ERROR ') + ' '
const okayLog = chalk.bgBlue.white(' OKAY ') + ' '

if (process.env.BUILD_TARGET === 'clean') clean()
else build()

function clean () {
  del.sync(['build/*', '!build/icons', '!build/icons/icon.*'])
  console.log(`\n${doneLog}${chalk.yellow('`build`')} directory cleaned\n`)
  process.exit()
}

function build () {
  del.sync(['dist/*', '!.gitkeep'])

  const tasks = ['main', 'renderer']
  const m = new Multispinner(tasks, {
    preText: 'building',
    postText: 'process'
  })

  let results = ''

  m.on('success', () => {
    process.stdout.write('\x1B[2J\x1B[0f')
    console.log(`\n\n${results}`)
    console.log(`${okayLog}take it away ${chalk.yellow('`electron-{{builder}}`')}\n`)
    {{#if_eq builder 'packager'}}bundleApp(){{else}}process.exit(){{/if_eq}}
  })

  pack(mainConfig).then(result => {
    results += result + '\n\n'
    m.success('main')
  }).catch(() => {
    m.error('main')
  })

  pack(rendererConfig).then(result => {
    results += result + '\n\n'
    m.success('renderer')
  }).catch(() => {
    m.error('renderer')
  })
}

function pack (config) {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) reject(err.stack || err)
      else if (stats.hasErrors()) reject(stats.toJson().errors)
      else {
        resolve(stats.toString({
          chunks: false,
          colors: true
        }))
      }
    })
  })
}

{{#if_eq builder 'packager'}}
function bundleApp () {
  packager(buildConfig, (err, appPaths) => {
    if (err) {
      console.log(`\n${errorLog}${chalk.yellow('`electron-packager`')} says...\n`)
      console.log(err)
    } else {
      console.log(`${doneLog}build(s) complete\n`)
    }
  })
}
{{/if_eq}}

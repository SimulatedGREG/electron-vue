'use strict'

process.env.NODE_ENV = 'production'

const chalk = require('chalk')
const del = require('del')
const ora = require('ora')
const packager = require('electron-packager')
const webpack = require('webpack')
const Multispinner = require('multispinner')

const buildConfig = require('./build.config')
const mainConfig = require('./webpack.main.config')
const rendererConfig = require('./webpack.renderer.config')

const doneLog = chalk.bgGreen.white(' DONE ') + ' '
const errorLog = chalk.bgRed.white(' ERROR ') + ' '

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
    preText: 'build',
    postText: 'process'
  })

  let results = ''

  m.on('success', () => {
    process.stdout.write('\x1B[2J\x1B[0f')
    console.log(`\n\n${results}`)
    bundleApp()
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

function bundleApp () {
  const m = new Multispinner(['package electron'], { clear: true })

  m.on('success', () => {
    process.stdout.write('\x1B[2J\x1B[0f')
    console.log(`${doneLog}Building complete`)
  })

  packager(buildConfig, (err, appPaths) => {
    if (err) {
      m.error('package electron')
      console.log(`\n${errorLog}${chalk.yello('`electron-packager`')} says...\n`)
      console.log(err)
    } else {
      m.success('package electron')
    }
  })
}

'use strict'

const chalk = require('chalk')
const electron = require('electron')
const path = require('path')
const { say } = require('cfonts')
const { spawn } = require('child_process')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackHotMiddleware = require('webpack-hot-middleware')

const mainConfig = require('./webpack.main.config')
const rendererConfig = require('./webpack.renderer.config')

let electronProcess = null
let hotMiddleware

function logStats (proc, data) {
  let log = ''

  log += chalk.yellow.bold(`┏ ${proc} Process ${new Array((19 - proc.length) + 1).join('-')}`)
  log += '\n\n'

  if (typeof data === 'object') {
    data.toString({
      colors: true,
      chunks: false
    }).split(/\r?\n/).forEach(line => {
      log += '  ' + line + '\n'
    })
  } else {
    log += `  ${data}\n`
  }

  log += '\n' + chalk.yellow.bold(`┗ ${new Array(28 + 1).join('-')}`) + '\n'

  console.log(log)
}

function startRenderer () {
  return new Promise((resolve, reject) => {
    let rendererConfig = require('./webpack.renderer.config')

    rendererConfig.entry.renderer = [path.join(__dirname, 'dev-client')].concat(rendererConfig.entry.renderer)

    const compiler = webpack(rendererConfig)
    hotMiddleware = webpackHotMiddleware(compiler, { log: false })

    compiler.plugin('compilation', compilation => {
      compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
        hotMiddleware.publish({ action: 'reload' })
        cb()
      })
    })

    compiler.plugin('done', stats => {
      logStats('Renderer', stats)
    })

    const server = new WebpackDevServer(
      compiler,
      {
        contentBase: path.join(__dirname, '../'),
        quiet: true,
        setup (app, ctx) {
          app.use(hotMiddleware)
          ctx.middleware.waitUntilValid((a) => {
            resolve()
          })
        }
      }
    )

    server.listen(9080)
  })
}

function startMain () {
  return new Promise((resolve, reject) => {
    let mainConfig = require('./webpack.main.config')
    mainConfig.entry.main = [path.join(__dirname, '../src/main/index.dev.js')].concat(mainConfig.entry.main)

    const compiler = webpack(mainConfig)

    compiler.plugin('watch-run', (compilation, done) => {
      logStats('Main', chalk.white.bold('compiling...'))
      hotMiddleware.publish({ action: 'compiling' })
      done()
    })

    compiler.watch({}, (err, stats) => {
      if (err) {
        console.log(err)
        return
      }

      logStats('Main', stats)

      if (electronProcess && electronProcess.kill) {
        electronProcess.kill()
        startElectron()
      }

      resolve()
    })
  })
}

function startElectron() {
  electronProcess = spawn(electron, [path.join(__dirname, '../dist/electron/main.js')])
  electronProcess.stdout.on('data', data => {
    let log = ''

    data = data.toString().split(/\r?\n/)
    data.forEach(line => {
      log += '  ' + line + '\n'
    })

    if (/[0-9A-z]+/.test(data[0])) {
      console.log(
        chalk.blue.bold('┏ Electron -------------------') +
        '\n\n' +
        log +
        chalk.blue.bold('┗ ----------------------------') +
        '\n'
      )
    }
  })

  electronProcess.on('exit', (code, signal) => {
    if (signal !== 'SIGTERM') process.exit()
  })
}

function init () {
  say('electron-vue', {
    font: 'simple3d',
    colors: ['yellow'],
    space: false
  })
  console.log(chalk.blue('  getting ready...') + '\n')

  Promise.all([startRenderer(), startMain()])
    .then(() => {
      startElectron()
    })
    .catch(err => {
      console.error(err)
    })
}

init()

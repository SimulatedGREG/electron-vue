'use strict'

const chalk = require('chalk')
const electron = require('electron')
const ora = require('ora')
const path = require('path')
const { spawn } = require('child_process')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackHotMiddleware = require('webpack-hot-middleware')

const mainConfig = require('./webpack.main.config')
const rendererConfig = require('./webpack.renderer.config')

let hotMiddleware

function startRenderer () {
  return new Promise((resolve, reject) => {
    let rendererConfig = require('./webpack.renderer.config')

    rendererConfig.entry.renderer = [path.join(__dirname, 'dev-client')].concat(rendererConfig.entry.renderer)

    const compiler = webpack(rendererConfig)
    hotMiddleware = webpackHotMiddleware(compiler, {
      // log: (msg) => {
      //   let fn = console.log.bind(console)
      //   let args = [].slice.call(arguments)
      //   args.unshift('\n\n' + chalk.bgBlue.white('  Begin Renderer Process  ') + '\n')
      //   if (msg) args.push(msg)
      //   args.push('\n' + chalk.bgBlue.white('  End Renderer Process  ') + '\n')
      //   return console.log.apply(console, args)
      // }
      log: false
    })
    compiler.plugin('compilation', compilation => {
      compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
        hotMiddleware.publish({ action: 'reload' })
        cb()
      })
    })

    const server = new WebpackDevServer(
      compiler,
      {
        contentBase: path.join(__dirname, '../'),
        quiet: true,
        stats: { colors: true },
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

    compiler.watch({}, (err, stats) => {
      if (err) {
        console.log(err)
        return
      }

      let log = '\n' + chalk.yellow.bold('┏ Main Process -----------') + '\n\n'
      stats.toString({
        colors: require('supports-color'),
        chunks: false
      }).split(/\r?\n/).forEach(line => {
        log += '  ' + line + '\n'
      })
      log += '\n' + chalk.yellow.bold('┗ ------------------------') + '\n'

      console.log(log)

      if (electronProcess && electronProcess.kill) {
        electronProcess.kill()
        startElectron()
      }

      resolve()
    })
  })
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

let electronProcess = null
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
        chalk.blue.bold('┏ Electron ---------------') +
        '\n\n' +
        log +
        chalk.blue.bold('┗ ------------------------') +
        '\n'
      )
    }
  })

  electronProcess.on('exit', (code, signal) => {
    if (signal !== 'SIGTERM') process.exit()
  })
}

function init () {
  const spinner = ora({
    spinner: 'triangle',
    text: chalk.cyan('getting ready')
  })

  spinner.start()

  Promise.all([startRenderer(), startMain()])
    .then(() => {
      spinner.stop()
      startElectron()
    })
    .catch(err => {
      console.error(err)
    })
}

init()

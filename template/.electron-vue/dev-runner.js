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
        contentBase: path.join(__dirname, '../dist/static'),
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

      let log = '\n' + chalk.bgMagenta.white('  Begin Main Process  ') + '\n\n'
      stats.toString({
        colors: require('supports-color')
      }).split(/\r?\n/).forEach(line => {
        log += '  ' + line + '\n'
      })
      log += '\n' + chalk.bgMagenta.white('  End Main Process  ') + '\n'

      console.log(log)

      if (electronProcess && electronProcess.kill) {
        electronProcess.kill()
        startElectron()
      }

      resolve()
    })
  })
}

let electronProcess = null
function startElectron() {
  electronProcess = spawn(electron, [path.join(__dirname, '../dist/electron/main.js')])
  electronProcess.stdout.on('data', data => {
    if (Array.from(data).length > 0)
      console.log(chalk.black.bgBlue(' ELECTRON ') + '  ' + data.toString().trim())
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

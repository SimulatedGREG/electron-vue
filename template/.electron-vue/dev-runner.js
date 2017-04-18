'use strict'

import chalk from 'chalk'
import electron from 'electron'
import ora from 'ora'
import path from 'path'
import { spawn, exec } from 'child_process'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webpackHotMiddleware from 'webpack-hot-middleware'

function startRenderer () {
  return new Promise((resolve, reject) => {
    let rendererConfig = require('./webpack.renderer.config.js')

    rendererConfig.entry.renderer = [path.join(__dirname, 'dev-client')].concat(rendererConfig.entry.renderer)

    const compiler = webpack(rendererConfig)
    const hotMiddleware = webpackHotMiddleware(compiler, {
      log: () => {}
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
        stats: { colors: true },
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
    setTimeout(() => resolve(), 2000)
  })
}


function startElectron() {
  let child = spawn(electron, [path.join(__dirname, '../src/main/index.dev.js')])
  child.stdout.on('data', data => {
    if (Array.from(data).length > 0)
      console.log(chalk.black.bgBlue(' ELECTRON ') + '  ' + data.toString().trim())
  })

  child.on('exit', () => {
    process.exit()
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

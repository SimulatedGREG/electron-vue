/**
 * Credits to https://github.com/bradstewart/electron-boilerplate-vue/blob/master/build/dev-runner.js
 */
'use strict'

const config = require('../config')
const exec = require('child_process').exec
const treeKill = require('tree-kill')

let YELLOW = '\x1b[33m'
let BLUE = '\x1b[34m'
let END = '\x1b[0m'

let isElectronOpen = false

function format (command, data, color) {
  return color + command + END +
    '  ' + // Two space offset
    data.toString().trim().replace(/\n/g, '\n' + repeat(' ', command.length + 2)) +
    '\n'
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

let children = []

function run (command, color, name) {
  let child = exec(command)

  child.stdout.on('data', data => {
    console.log(format(name, data, color))

    /**
     * Start electron after VALID build
     * (prevents electron from opening a blank window that requires refreshing)
     *
     * NOTE: needs more testing for stability
     */
    if (/VALID/g.test(data.toString().trim().replace(/\n/g, '\n' + repeat(' ', command.length + 2))) && !isElectronOpen) {
      console.log(`${BLUE}Starting electron...\n${END}`)
      run('cross-env NODE_ENV=development electron app/electron.js', BLUE, 'electron')
      isElectronOpen = true
    }
  })

  child.stderr.on('data', data => console.error(format(name, data, color)))
  child.on('exit', code => exit(code))

  children.push(child)
}

function exit (code) {
  children.forEach(child => {
    treeKill(child.pid)
  })
}

console.log(`${YELLOW}Starting webpack-dev-server...\n${END}`)
run(`webpack-dev-server --inline --hot --colors --port ${config.port} --content-base app/dist`, YELLOW, 'webpack')

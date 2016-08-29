'use strict'

const { spawn } = require('child_process')
const suppose = require('suppose')
const builds = require('./builds.json')

let YELLOW = '\x1b[33m'
let BLUE = '\x1b[34m'
let END = '\x1b[0m'

process.chdir(process.cwd() + '/tests/builds')

Object.keys(builds).forEach(key => {
  generate(key, builds[key])
})

function generate (key, build) {
  console.log(`${YELLOW}Generate: ${key}${END}`)
  suppose('vue', ['init', 'simulatedgreg/electron-vue', key], { debug: process.stdout })
    .when(/Application Name/g).respond(build[0])
    .when(/Project description/g).respond(build[1])
    .when(/version/g).respond(build[2])
    .when(/ESLint/g).respond(build[3])
    .when(/config/g).respond(build[4])
    .when(/plugins/g).respond(build[5])
    .when(/author/g).respond(build[6])
  .on('error', err => {
    console.log(err.message)
  })
  .end(code => {
    if (code === 0) install(key)
  })
}

function install (key) {
  let child = spawn('npm', ['install', '--depth', '0'], { cwd: `${process.cwd()}/${key}`, stdio: 'inherit' })

  child.on('close', code => {
    if (code === 0) pack(key)
    child.kill()
  })
}

function pack (key) {
  let child = spawn('npm', ['run', 'pack'], { cwd: `${process.cwd()}/${key}`, stdio: 'inherit' })

  child.on('close', code => {
    console.log(`${BLUE}\`${key}\` passed${END}`)
    child.kill()
  })
}


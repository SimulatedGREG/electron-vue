'use strict'

const projectDir = process.env.SEMAPHORE_PROJECT_DIR
const templateName = process.argv[2]

const suppose = require('suppose')
const template = require('./builds.json')[templateName]

const YELLOW = '\x1b[33m'
const END = '\x1b[0m'

process.chdir(process.cwd() + '/builds')

generate(templateName, template)

setTimeout(() => {
  process.exit()
}, 4000)

function generate (key, build) {
  console.log(`${YELLOW}Generating \`${key}\`${END}`)

  suppose('vue', ['init', `${projectDir}`, key], { debug: process.stdout })
    .when(/Application Name/g).respond(build[0])
    .when(/Application Id/g).respond(build[1])
    .when(/Application Version/g).respond(build[2])
    .when(/Project description/g).respond(build[3])
    .when(/Scss/g).respond(build[4])
    .when(/plugins/g).respond(build[5])
    .when(/ESLint/g).respond(build[6])
    .when(/config/g).respond(build[7])
    .when(/unit/g).respond(build[8])
    .when(/end-to-end/g).respond(build[9])
    .when(/build tool/g).respond(build[10])
    .when(/author/g).respond(build[11])
  .on('error', err => {
    console.log(err.message)
  })
  .end(code => {
    process.exit(code)
  })
}


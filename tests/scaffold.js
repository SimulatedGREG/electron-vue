'use strict'

const suppose = require('suppose')
process.chdir(process.cwd() + '/tests/builds')

suppose('vue', ['init', 'simulatedgreg/electron-vue', 'm'], {debug: process.stdout})
  .when(/Application Name/g).respond('\n')
  .when(/Project description/g).respond('\n')
  .when(/version/g).respond('\u001b[B\n')
  .when(/ESLint/g).respond('\n')
  .when(/config/g).respond('\n')
  .when(/plugins/g).respond('\n')
  .when(/author/g).respond('\n')
.on('error', err => {
  console.log(err.message)
})
.end(code => {
  console.log('done', code)
})

'use strict'

const { join } = require('path')
const { readFileSync, writeFileSync } = require('fs')
const { get } = require('https')

function getCurrentSHA (author) {
  return new Promise((resolve, reject) => {
    let isBranch = process.argv[2].indexOf('#') > -1

    get({
      host: 'api.github.com',
      path: `/repos/simulatedgreg/electron-vue/commits${isBranch ? '?sha=' + process.argv[2].split('#')[1] : ''}`,
      headers: {
        'User-Agent': author
      }
    }, res => {
      res.setEncoding('utf8')
      let rawData = ''

      res.on('data', chunk => {
        rawData += chunk
      })
      res.on('end', () => {
        try {
          let parsed = JSON.parse(rawData)
          resolve(parsed[0].sha)
        } catch (e) {
          reject(e)
        }
      })
    }).on('error', e => {
      reject(e)
    })
  })
}

function appendSHALink (sha, destDirName) {
  let readmePath = join(destDirName, '/README.md')
  let md = readFileSync(readmePath, 'utf8')
  md = md.replace(
    ' using',
    `@[${sha.substring(0, 7)}](https://github.com/SimulatedGREG/electron-vue/tree/${sha}) using`
  )
  writeFileSync(readmePath, md, 'utf8')
}

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Application Name',
      default: 'your-app'
    },
    appid: {
        type: 'string',
        required: true,
        message: 'Application Id',
        default: 'com.example.yourapp'
    },
    appver: {
        type: 'string',
        required: true,
        message: 'Application Version',
        default: '0.0.1'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'An electron-vue project'
    },
    usesass: {
        type: 'confirm',
        message: 'Use Sass / Scss?',
        required: true
    },
    plugins: {
      type: 'checkbox',
      message: 'Select which Vue plugins to install',
      choices: ['axios', 'vue-electron', 'vue-router', 'vuex', 'vuex-electron'],
      default: ['axios', 'vue-electron', 'vue-router', 'vuex', 'vuex-electron']
    },
    eslint: {
      type: 'confirm',
      require: true,
      message: 'Use linting with ESLint?',
      default: true
    },
    eslintConfig: {
      when: 'eslint',
      type: 'list',
      message: 'Which ESLint config would you like to use?',
      choices: [
        {
          name: 'Standard (https://github.com/feross/standard)',
          value: 'standard',
          short: 'Standard'
        },
        {
          name: 'Airbnb (https://github.com/airbnb/javascript)',
          value: 'airbnb',
          short: 'Airbnb'
        },
        {
          name: 'none (configure it yourself)',
          value: 'none',
          short: 'none'
        }
      ]
    },
    unit: {
      type: 'confirm',
      message: 'Set up unit testing with Karma + Mocha?',
      required: true
    },
    e2e: {
      type: 'confirm',
      message: 'Set up end-to-end testing with Spectron + Mocha?',
      require: true
    },
    builder: {
      type: 'list',
      message: 'What build tool would you like to use?',
      choices: [
        {
          name: 'electron-builder (https://github.com/electron-userland/electron-builder)',
          value: 'builder',
          short: 'builder'
        },
        {
          name: 'electron-packager (https://github.com/electron-userland/electron-packager)',
          value: 'packager',
          short: 'packager'
        }
      ]
    }
  },
  helpers: {
    isEnabled (list, check, opts) {
      if (list[check]) return opts.fn(this)
      else return opts.inverse(this)
    },
    deps (plugins) {
      let output = ''
      let dependencies = {
        'axios': '^0.18.0',
        'vue-electron': '^1.0.6',
        'vue-router': '^3.0.1',
        'vuex': '^3.0.1',
        'vuex-electron': '^1.0.0'
      }

      if (Object.keys(plugins).length > 0) output += ',\n'

      Object.keys(plugins).forEach((p, i) => {
        output += `    "${p}": "${dependencies[p]}"`
        if (i !== Object.keys(plugins).length - 1) output += ',\n'
      })

      return output
    },
    testing (unit, e2e, opts) {
      if (unit || e2e) {
        return opts.fn(this)
      }
    }
  },
  filters: {
    'src/renderer/routes.js': 'plugins[\'vue-router\']',
    'src/renderer/components/LandingPageView/CurrentPage.vue': 'plugins[\'vue-router\']',
    'src/renderer/router/**/*': 'plugins[\'vue-router\']',
    'src/renderer/store/**/*': 'plugins[\'vuex\']',
    'test/e2e/**/*': 'e2e',
    'test/unit/**/*': 'unit',
    '.electron-vue/build.config.js': 'builder === \'packager\'',
    'test/.eslintrc': 'e2e || unit',
    '.eslintignore': 'eslint',
    '.eslintrc.js': 'eslint',
    'appveyor.yml': 'builder === \'builder\'',
    '.travis.yml': 'builder === \'builder\''
  },
  complete (data) {
    getCurrentSHA(data.author).then(sha => {
      let path = !data.inPlace ? data.destDirName : null
      if (path !== null) appendSHALink(sha, path)
      console.log([
        '\n---',
        '',
        'All set. Welcome to your new electron-vue project!',
        '',
        'Make sure to check out the documentation for this boilerplate at',
        '\x1b[33mhttps://simulatedgreg.gitbooks.io/electron-vue/content/\x1b[0m.',
        '',
        `Next Steps:\n${!data.inPlace ? '\n  \x1b[33m$\x1b[0m cd ' + data.destDirName : ''}`,
        '  \x1b[33m$\x1b[0m yarn (or `npm install`)',
        '  \x1b[33m$\x1b[0m yarn run dev (or `npm run dev`)'
      ].join('\n'))
    }, () => {
      console.log('\x1b[33mwarning\x1b[0m Failed to append commit SHA on README.md')
    })
  }
}

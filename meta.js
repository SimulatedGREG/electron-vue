'use strict'

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Application Name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'An electron-vue project'
    },
    vueVersion: {
      type: 'list',
      required: true,
      message: 'Which version of Vue.js would you like installed?',
      choices: ['2.x', '1.x']
    },
    plugins: {
      type: 'checkbox',
      message: 'Select which Vue plugins to install',
      choices: ['vue-electron', 'vue-resource', 'vue-router', 'vuex'],
      default: ['vue-electron', 'vue-resource', 'vue-router', 'vuex']
    },
    plugins: {
      type: 'checkbox',
      message: 'Select which Vue plugins to install',
      choices: ['vue-electron', 'vue-resource', 'vue-router', 'vuex'],
      default: ['vue-electron', 'vue-resource', 'vue-router', 'vuex']
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
      message: 'Which eslint config would you like to use?',
      choices: [
        {
          name: 'Standard (https://github.com/feross/standard)',
          value: 'standard',
          short: 'Standard'
        },
        {
          name: 'AirBNB (https://github.com/airbnb/javascript)',
          value: 'airbnb',
          short: 'AirBNB'
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
      message: 'Setup unit testing with Karma + Jasmine?',
      required: true
    },
    e2e: {
      type: 'confirm',
      message: 'Setup end-to-end testing with Spectron + Mocha?',
      require: true
    }
  },
  helpers: {
    isEnabled (list, check, opts) {
      if (list[check]) return opts.fn(this)
      else return opts.inverse(this)
    },
    deps (plugins, version) {
      let output = ''
      let dependencies = {
        'vue-electron': '^1.0.0',
        'vue-resource': '^1.0.3',
        'vue-router': version === '2.x' ? '^2.0.0' : '^0.7.13',
        'vuex': version === '2.x' ? '^2.0.0' : '^1.0.0'
      }

      if (Object.keys(plugins).length > 0) output += ',\n'

      Object.keys(plugins).forEach((p, i) => {
        output += `    "${p}": "${dependencies[p]}"`
        if (i !== Object.keys(plugins).length - 1) output += ',\n'
      })

      return output
    },
    ver (version, module) {
      let output = ''

      if (module === 'core') {
        output += '"vue": "'
        output += (version === '2.x') ? '^2.0.1' : '^1.0.28'
        output += '"'
      } else {
        output += '"vue-loader": "'
        output += (version === '2.x') ? '^9.5.1' : '^8.5.2'
        output += '",'
      }

      return output
    }
  },
  filters: {
    'app/src/routes.js': 'plugins[\'vue-router\']',
    'app/src/components/LandingPageView/CurrentPage.vue': 'plugins[\'vue-router\']',
    'app/src/vuex/**/*': 'plugins[\'vuex\']',
    'tasks/vue/**/*': 'plugins[\'vue-router\']',
    'tasks/vuex/**/*': 'plugins[\'vuex\']',
    'test/e2e/**/*': 'e2e',
    'test/unit/**/*': 'unit',
    '.eslintignore': 'eslint',
    '.eslintrc.js': 'eslint'
  },
  completeMessage: `---

All set. More configurations can be made at \x1b[33m{{destDirName}}/config.js\x1b[0m.

Make sure to check out the documentation for this boilerplate at \x1b[33mhttps://simulatedgreg.gitbooks.io/electron-vue/content/index.html\x1b[0m.

Next steps:
  1. \x1b[34mcd {{destDirName}}\x1b[0m
  2. \x1b[34mnpm install\x1b[0m
  3. \x1b[34mnpm run dev\x1b[0m`
}

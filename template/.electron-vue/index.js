process.env.BABEL_ENV = 'main'

require('babel-register')()

require('./dev-runner')

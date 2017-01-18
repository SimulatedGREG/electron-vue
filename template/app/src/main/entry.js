// Sets babel environment to main
process.env.NODE_ENV = 'development'
process.env.BABEL_ENV = 'main'

require('../../../node_modules/babel-register')({
  ignore: /node_modules/
})
require('./index')

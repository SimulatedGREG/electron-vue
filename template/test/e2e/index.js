'use strict'

// Enable use of es2015 on required files
require('babel-register')({
  ignore: /node_modules/
})

// Require all JS files in `./specs`
require('require-dir')('./specs')

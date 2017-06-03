const path = require('path')

module.exports = {
  arch: 'x64',
  asar: true,
  dir: path.join(__dirname, '../'),
  icon: path.join(__dirname, '../build/icons/icon'),
  ignore: /(^\/(src|test|\.[a-z]+|README|yarn|static|dist\/web))|\.gitkeep/,
  out: path.join(__dirname, '../build'),
  overwrite: true,
  platform: process.env.BUILD_TARGET || 'all'
}

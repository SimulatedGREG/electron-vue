const CopyWebpackPlugin = require('copy-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { join } = require('path')

const webpackRenderer = require('electron-webpack/webpack.renderer.config')

module.exports = env => {
  return new Promise((resolve, reject) => {
    webpackRenderer(env).then(rendererConfig => {
      delete rendererConfig.output.libraryTarget
      rendererConfig.output.path = join(__dirname, '../dist/web')
      rendererConfig.target = 'web'
      rendererConfig.externals = []

      rendererConfig.plugins.push(new DefinePlugin({
        'process.env.IS_WEB': 'true'
      }))

      rendererConfig.plugins.push(new CopyWebpackPlugin([
        {
          from: join(__dirname, '../static'),
          to: join(__dirname, '../dist/web/static'),
          ignore: ['.*']
        }
      ]))

      resolve(rendererConfig)
    })
  })
}

const merge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')
const { resolve } = require('./utils')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: resolve('dist'),
    overlay: true
  },
  watchOptions: {
    ignored: /node_modules/
  }
})

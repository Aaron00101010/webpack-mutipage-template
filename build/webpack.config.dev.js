const path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

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

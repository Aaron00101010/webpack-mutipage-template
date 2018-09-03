const merge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')
const routerConfig = require('./router-config')
const { resolve } = require('./utils')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: resolve('dist'),
    overlay: true,
    historyApiFallback: {
      rewrites: routerConfig
    }
  },
  watchOptions: {
    ignored: /node_modules/
  }
})

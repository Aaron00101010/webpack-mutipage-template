const merge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')
const { resolve } = require('./utils')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: resolve('dist'),
    overlay: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/page/index/index.html' },
        { from: /^\/list/, to: '/page/list/list.html' },
        { from: /^\/detail/, to: '/page/detail/detail.html' }
        // { from: /.*/, to: '/page/index/index.html' }
      ]
    }
  },
  watchOptions: {
    ignored: /node_modules/
  }
})

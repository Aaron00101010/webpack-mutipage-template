const merge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')
const { webpackRouterConfig } = require('./router-config')
const generateHtmlListConfig = require('./generate-html-list-config')
const { resolve } = require('./utils')

module.exports = merge.smart(
  webpackRouterConfig,
  generateHtmlListConfig,
  baseConfig,
  {
    mode: 'development',
    devServer: {
      contentBase: resolve('dist'),
      openPage: '/htmlList.html',
      overlay: true,
      inline: true
    },
    watchOptions: {
      ignored: /node_modules/
    }
  }
)
console.log(123)

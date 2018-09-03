const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.config.base')
const {webpackRouterConfig} = require('./router-config')
const { resolve, generateHtmlList } = require('./utils')

// 添加所有页面列表页
generateHtmlList()
const htmlListConfig = {plugins: [new HtmlWebpackPlugin({
  filename: 'htmlList.html',
  template: 'temp/htmLlist.html',
  chunks: [],
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true
  }
})]}

module.exports = merge(htmlListConfig, baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: resolve('dist'),
    openPage: '/htmlList.html',
    overlay: true,
    inline: true,
    historyApiFallback: {
      rewrites: webpackRouterConfig
    }
  },
  watchOptions: {
    ignored: /node_modules/
  }
})

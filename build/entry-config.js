// 多页面配置
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('./utils')

const entries = glob.sync(resolve('src/page/**/*.js'))
const entriesOpt = {}
const pluginsOpt = []

const faviconPath = resolve('src/image/favicon/favicon.png')

entries.forEach(item => {
  const chunkName = item.match(/src\/page\/(.+)\.js/)[1]
  const templatePath = item.replace(/.js$/, '.html')
  let fileName = templatePath.match(/src\/(page\/.+\.html$)/)[1]

  entriesOpt[chunkName] = item

  pluginsOpt.push(
    new HtmlWebpackPlugin({
      favicon: faviconPath,
      filename: fileName,
      template: templatePath,
      chunks: ['vendor', 'manifest', 'common-styles', chunkName],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  )
})

const config = {
  entry: entriesOpt,
  plugins: pluginsOpt
}

module.exports = config

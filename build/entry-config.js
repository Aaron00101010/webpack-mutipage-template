// 多文件，entry，HTMLWebpackPlugin配置
const glob = require('glob')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entries = glob.sync(path.resolve(__dirname, '..', 'src/page/**/*.js'))
const entriesOpt = {}
const htmlTemplateOpt = []

const faviconPath = path.resolve(__dirname, '..', 'src/image/favicon/favicon.png')

entries.forEach(item => {
  const chunkName = item.match(/src\/page\/(.+)\.js/)[1]
  const templatePath = item.replace(/.js$/, '.html')
  let fileName = templatePath.match(/src\/(page\/.+\.html$)/)[1]

  if (chunkName === 'index/index') {
    fileName = 'index.html'
  }

  entriesOpt[chunkName] = item

  htmlTemplateOpt.push(
    new HtmlWebpackPlugin({
      favicon: faviconPath,
      filename: fileName,
      template: templatePath,
      hash: true,
      chunks: [chunkName]
    })
  )
})

const config = {
  entry: entriesOpt,
  plugins: htmlTemplateOpt
}

module.exports = config

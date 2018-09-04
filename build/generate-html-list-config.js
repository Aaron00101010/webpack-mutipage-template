const { resolve } = require('./utils')
const fs = require('fs')
const { routerConfig } = require('./router-config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function generateHtmlList () {
  let htmlStr = `<table><tr><th>文件列表</th></tr>`
  routerConfig.forEach(item => {
    htmlStr += `<tr>
      <td><a href=${item.path} target='_blank'>${item.page}</a></td>
    </tr>`
  })
  htmlStr += '</table>'

  fs.writeFileSync(resolve('temp/htmlList.html'), htmlStr, err => {
    if (err) {
      throw err
    }
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
  })
}
generateHtmlList()

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'htmlList.html',
      template: 'temp/htmLlist.html',
      chunks: []
    })
  ]
}

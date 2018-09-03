const path = require('path')
const fs = require('fs')
const {routerConfig} = require('./router-config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

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
  })
}

module.exports = {
  resolve, generateHtmlList
}

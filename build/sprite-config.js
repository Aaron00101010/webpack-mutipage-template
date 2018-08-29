// 雪碧图配置
const glob = require('glob')
const path = require('path')
const WebpackSpritesmith = require('webpack-spritesmith')

const folders = glob.sync(path.resolve(__dirname, '..', 'src/sprite/img/*'))
const pluginsArr = []

folders.forEach(path => {
  const generatePath = path.replace(/(sprite\/)(img)/, '$1generate')
  const refPath = `~${path.match(/sprite\/img\/(.+)/)[1]}/sprite.png`
  pluginsArr.push(
    new WebpackSpritesmith({
      src: {
        cwd: path,
        glob: '*.png'
      },
      target: {
        image: `${generatePath}/sprite.png`,
        css: `${generatePath}/sprite.scss`
      },
      apiOptions: {
        cssImageRef: refPath
      }
    })
  )
})

module.exports = {
  plugins: pluginsArr
}

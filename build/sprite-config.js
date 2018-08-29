//雪碧图配置
const glob = require('glob');
const path = require('path');
const WebpackSpritesmith = require('webpack-spritesmith');

const folders = glob.sync(path.resolve(__dirname, '..', 'src/sprite/img/*'))
const pluginsArr = [];

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

folders.forEach(path => {
  const generatePath = path.replace(/(sprite\/)(img)/,'$1generate')
  pluginsArr.push(
    new WebpackSpritesmith({
      src: {
        cwd: path,
        glob: '*.png'
      },
      target: {
        image: `${path}/sprite.png`,
        css: resolve('src/sprite/generate/common/sprite.scss')
      },
    })
  );
});

module.exports = {
  plugins: [
    new WebpackSpritesmith({
      src: {
        cwd: resolve('src/sprite/img/common'),
        glob: '*.png'
      },
      target: {
        image: resolve('src/sprite/generate/common/sprite.png'),
        css: resolve('src/sprite/generate/common/sprite.scss')
      },
      apiOptions: {
        cssImageRef: "~common/sprite.png"
      }
    }),
    new WebpackSpritesmith({
      src: {
        cwd: resolve('src/sprite/img/index'),
        glob: '*.png'
      },
      target: {
        image: resolve('src/sprite/generate/index/sprite.png'),
        css: resolve('src/sprite/generate/index/sprite.scss')
      },
      apiOptions: {
        cssImageRef: "~index/sprite.png"
      }
    })
  ]
}

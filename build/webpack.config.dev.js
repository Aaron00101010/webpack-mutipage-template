const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = merge(commonConfig, {
  entry: {
    index: resolve('src/script/page/index/index.js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      // filename: resolve('dist/page/index/index.html'),
      template: 'src/page/index/index.html'
    })
  ]
});

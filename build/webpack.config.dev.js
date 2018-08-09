const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: {
    index: resolve('src/script/page/index/index.js'),
    list: resolve('src/script/page/list/list.js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'src/image/favicon/100x100.png',
      filename: 'index.html',
      template: 'src/page/index/index.html',
      inject: 'body',
      hash: true,
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      favicon: 'src/image/favicon/100x100.png',
      filename: 'list.html',
      template: 'src/page/list/list.html',
      inject: 'body',
      hash: true,
      chunks: ['list']
    })
  ],
  devServer: {
    // contentBase: resolve('dist'),
    contentBase:'../',
    overlay: true,
    // hotOnly:true
  }
});

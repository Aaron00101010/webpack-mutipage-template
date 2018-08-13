const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

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
      filename: 'dist/page/index.html',
      template: 'src/page/index/index.html',
      hash: true,
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      favicon: 'src/image/favicon/100x100.png',
      filename: 'dist/page/list/list.html',
      template: 'src/page/list/list.html',
      hash: true,
      chunks: ['list']
    })
    // new CopyWebpackPlugin([{
    //   from:'src/image',
    //   to:'dist/image'
    // }])
  ],
  devServer: {
    contentBase: resolve('dist'),
    overlay: true
  }
});

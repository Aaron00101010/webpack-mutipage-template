const path = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')

const baseConfig = require('./webpack.config.base')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseConfig, {
  mode: 'production',
  module: {
    rules: [{
      test: /\.s?css$/,
      include: [resolve('src/style')],
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
        'postcss-loader'
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/style/[name].[chunkhash].css',
      chunkFilename: '[id].[hash].css'
    }),
    new CleanWebpackPlugin([resolve('dist')], {root: resolve('')})
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      new UglifyWebpackPlugin()
    ]
  }
})

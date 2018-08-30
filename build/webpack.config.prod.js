// const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const baseConfig = require('./webpack.config.base')
const { resolve } = require('./utils')

module.exports = merge(baseConfig, {
  mode: 'production',
  // devtool: '#@cheap-source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        include: [resolve('src/style')],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].[id].[contenthash].css',
      chunkFilename: 'style/[name].[id].[contenthash].css'
    }),
    new CleanWebpackPlugin([resolve('dist')], { root: resolve('') }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: resolve('temp/report.html'),
      generateStatsFile: true,
      statsFilename: resolve('temp/report.json'),
      openAnalyzer: false
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    },
    minimizer: [new OptimizeCSSAssetsPlugin(), new UglifyWebpackPlugin()]
  }
})

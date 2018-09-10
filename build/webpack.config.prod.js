const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const smp = new SpeedMeasurePlugin()

const baseConfig = require('./webpack.config.base')
const { resolve } = require('./utils')

module.exports = smp.wrap(
  merge(baseConfig, {
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
            'postcss-loader',
            'sass-loader'
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
        openAnalyzer: true
      })
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            priority: 0
          },
          commonStyles: {
            name: 'common-styles',
            test: /[\\/]style[\\/]common[\\/]common.scss/,
            chunks: 'all',
            priority: 0
          }
        }
      },
      runtimeChunk: {
        name: 'manifest'
      },
      minimizer: [
        new OptimizeCSSAssetsPlugin(),
        new UglifyWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin()
      ]
    }
  })
)

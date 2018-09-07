const webpack = require('webpack')
const merge = require('webpack-merge')
const enteriesConfig = require('./entry-config')
const spriteConfig = require('./sprite-config')
const { resolve } = require('./utils')
const globalLibsVarsConfig = require('./global-js-lib-config')

let config = merge(enteriesConfig, spriteConfig, {
  context: resolve(''),
  resolve: {
    extensions: ['.js', '.scss', '.json'],
    modules: ['node_modules', resolve('src/sprite/generate')],
    alias: {
      '@': resolve('src'),
      '@sprite': resolve('src/sprite/generate')
    }
  },
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: 'script/[name].[id].[contenthash].js',
    chunkFilename: 'script/[name].[id].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        include: [resolve('src')]
      },
      {
        test: /\.scss$/,
        include: [resolve('src/style')],
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              interpolate: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              outputPath: 'image'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin(globalLibsVarsConfig)
  ]
})

module.exports = config

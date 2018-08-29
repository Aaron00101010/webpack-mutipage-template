const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const enteriesConfig = require('./entry-config');
const spriteConfig = require('./sprite-config');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(enteriesConfig,spriteConfig, {
  context: path.resolve(__dirname, '..'),
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
    filename: 'script/[chunkhash].js',
    chunkFilename: '[name].[chunhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        include: [resolve('src/script/**/*.js')],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        include: [resolve('src/style/')],
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
              outputPath: 'static/image'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
});

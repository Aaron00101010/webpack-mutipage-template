const path = require('path');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.config.base');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: resolve('dist'),
    overlay: true
  },
  watchOptions: {
    ignored: /node_modules/
  },
  resolve: {

  },
  plugins: [
  ]
});

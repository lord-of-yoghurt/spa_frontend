const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
    ]
  },
  output: {
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  plugins: [
    new Dotenv({
      path: './.env',
      safe: false
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
});

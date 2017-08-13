const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    'app': [
      'whatwg-fetch',
      'babel-polyfill',
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      "./src/index.js"
    ],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: "index.js",
    publicPath: '/public',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['transform-runtime', 'react-hot-loader/babel'],
          presets: ['react', 'es2015']
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // remove for prod
    // new webpack.optimize.OccurenceOrderPlugin(), // error: plugin is not a constructor
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

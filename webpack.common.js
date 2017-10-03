const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'app': [
      'whatwg-fetch',
      'babel-polyfill',
      "./src/index.js"
    ],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: "index.js",
    publicPath: '/public',
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
  node: {
    fs: 'empty',
  },
  resolve: {
    extensions: ['.js', '.es6']
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(), // error: plugin is not a constructor
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

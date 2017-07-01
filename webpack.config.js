const webpack = require('webpack');

module.exports = {
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      "./entry.js"
    ],
  },
  output: {
    filename: "./build/bundle.js"
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
    new webpack.HotModuleReplacementPlugin()
  ]
};

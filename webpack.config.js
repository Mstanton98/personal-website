const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const config = {
  entry: {
    app: [ APP_DIR + '/index.jsx' ]
  },
  output: {
    path: BUILD_DIR,
    publicPath:'/public/',
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};

module.exports = config;

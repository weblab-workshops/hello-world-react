const path = require('path');
const entryFile = path.resolve(__dirname, 'src', 'index.js');
const outputDir = path.resolve(__dirname, 'dist');

const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [entryFile],
  output: {
    publicPath:"/",
    filename: 'bundle.js',
    path: outputDir
  },
  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  }
};
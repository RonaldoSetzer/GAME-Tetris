const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (function(options) {
  return {
    entry: {
      main: path.resolve("src/index.ts")
    },
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
      rules: [
        { test: /\.ts$/, loader: "ts-loader" }
      ]
    },
    plugins: [ new HtmlWebpackPlugin() ],
    resolve: {
      extensions: ['.ts', '.js', '.json']
    }
  }
})();
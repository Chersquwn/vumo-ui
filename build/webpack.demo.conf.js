var path = require('path')
var merge = require('webpack-merge')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var baseWebpackConf = require('./webpack.base.conf')
var autoprefixer = require('autoprefixer')

module.exports = merge(baseWebpackConf, {

  entry: {
    app: './example/index.js'
  },

  output: {
    path: path.resolve(__dirname, '..', 'example/dist'),
    filename: '[name].[chunkhash:7].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"production"'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '..', 'example/index.html'),
      path: path.resolve(__dirname, '')
    }),
    new ExtractTextPlugin({
      filename: path.resolve(__dirname, '..', 'example/dist/css/[name].[contenthash:7].css')
    }),
  ]

})

var path = require('path')
var merge = require('webpack-merge')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var baseWebpackConf = require('./webpack.base.conf')

module.exports = merge(baseWebpackConf, {

  output: {
    path: path.resolve(__dirname, '..', 'dist')
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
    new ExtractTextPlugin({
      filename: path.resolve(__dirname, '..', 'dist/css/[name].[contenthash:7].css')
    }),
  ]

})

var path = require('path')
var merge = require('webpack-merge')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var baseWebpackConf = require('./webpack.base.conf')
var openBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = merge(baseWebpackConf, {

  entry: {
    app: './example/index.js'
  },

  output: {
    path: path.resolve(__dirname, '..', 'example'),
    publicPath: ''
  },

  devtool: '#cheap-module-eval-source-map',

  devServer: {
    historyApiFallback: true,
    inline: true,
    hot: true,
    stats: {
      colors: true
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"development"'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new openBrowserPlugin({
      url: 'http://localhost:8080'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '..', 'example/index.html'),
      path: path.resolve(__dirname, '')
    })
  ]

})

var path = require('path')
var autoprefixer = require('autoprefixer')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {

  entry: './src/index.js',

  output: {
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'scss': resolve('src/scss')
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          },
          postcss: [
            autoprefixer({
              browsers: ['iOS >= 7', 'Android >= 4.1']
            })
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('example')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }

}
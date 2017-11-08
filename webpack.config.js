var path = require('path')  // JS built-in
var HtmlWebpackPlugin = require('html-webpack-plugin') //installed via npm

// Need to import webpack directly to make use of the production features
// - need NODE_ENV
// - need uglify / minify code
var webpack = require('webpack')


// For explanation, visit webpack doc at https://webpack.js.org/concepts/
// Note:
//   - whenever we hit refresh at a route we get error "cannot get /...". To solve this:
//     - add config.output.publicPath = '/'
//     - add config.devServer.historyApiFallback = true
var config = {
  entry: ['babel-polyfill' ,'./app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)/, use: 'babel-loader' },
      { test: /\.css/, use: ['style-loader', 'css-loader'] },

    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
    })
  ]
}

// production
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config
const path = require('path')  // JS built-in
const HtmlWebpackPlugin = require('html-webpack-plugin') //installed via npm


// For explanation, visit webpack doc at https://webpack.js.org/concepts/
// Note:
//   - whenever we hit refresh at a route we get error "cannot get /...". To solve this:
//     - add config.output.publicPath = '/'
//     - add config.devServer.historyApiFallback = true
const config = {
  entry: './app/index.js',
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




module.exports = config;
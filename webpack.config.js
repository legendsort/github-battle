const path = require('path')  // JS built-in
const HtmlWebpackPlugin = require('html-webpack-plugin') //installed via npm


// For explanation, visit webpack doc at https://webpack.js.org/concepts/
const config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)/, use: 'babel-loader' },
      { test: /\.css/, use: ['style-loader', 'css-loader'] },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
    })
  ]
}

module.exports = config;
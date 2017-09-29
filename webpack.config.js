const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './src/Client.js',
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  devServer: {
    publicPath: '/dist/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        include: path.resolve(__dirname, 'src'),
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
}

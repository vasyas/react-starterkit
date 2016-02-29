var webpack = require('webpack');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

var config = {
  entry: [
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  devServer: {
    contentBase: 'www',
    port: 3000,
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  devtool: 'source-map',
  output: {
    path: './build',
    filename: 'index.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([ { from: 'www'} ], ".")
  ],
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: ["./src/js"],
        exclude: /node_modules/
      },
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      }
    ]
  },
  eslint: { configFile: '.eslintrc' }
};

module.exports = config;
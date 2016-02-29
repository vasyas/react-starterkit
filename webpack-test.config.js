var config = {
  entry: [
    'stack-source-map/register',
    './test/index.js'
  ],

  output: { // will be available at http://localhost:3002/index
    path: 'build',
    filename: "index.js"
  },

  devtool: 'eval-source-map',

  devServer: {
    port: 3002,
    inline: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.test\.js$/,
        loaders: ['mocha', 'babel'],
        exclude: /node_modules/
      },
    ]
  },
  eslint: { configFile: '.eslintrc' }
};

module.exports = config;

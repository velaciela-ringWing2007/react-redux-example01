var path = require('path');

module.exports = {
  entry: {
    js: './src/index.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  // devServer: {
  //   contentBase: '/in',
  //   port: 8888,
  //   inline: true,
  //   historyApiFallback: true
  // }
}

const path = require('path')

module.exports = {
  entry: './src/client.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'client.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
    modules: ['node_modules', 'config/' + process.env.NODE_ENV ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'react', 'es2015' ]
        }
      }
    ]
  }
}


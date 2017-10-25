const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './lib/cartojss.js',
  output: {
    filename: 'cartojss.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'cartojss',
    libraryTarget: 'umd'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: false
    })
  ]
};

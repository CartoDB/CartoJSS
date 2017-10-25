const path = require('path');

module.exports = {
  entry: './lib/cartojss.js',
  output: {
    filename: 'cartojss.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'CartoJSS',
    libraryTarget: 'umd'
  }
};

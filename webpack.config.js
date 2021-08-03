const path = require('path');

module.exports = {
  entry: './src/client/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/client'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public/client'),
    open: false,
    port: 1338,
  },
  devtool: 'source-map',
};

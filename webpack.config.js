require('dotenv').config();
const path = require('path');

const { PORT } = process.env;

module.exports = {
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    port: PORT,
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
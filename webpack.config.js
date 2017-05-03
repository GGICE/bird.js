const path = require('path')

module.exports = {
  entry: {
    bird: "./src/bird.js"
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].js",
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, 'src/common/'),
    }
  }
};

const path = require('path')
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    Bird: './src/bird.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'bird'
  },
  module: {
    rules: []
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, 'src/common/'),
    }
  },
  plugins: [
    // new UglifyJSPlugin()  
  ]
}

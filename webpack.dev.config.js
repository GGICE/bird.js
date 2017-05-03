const config = require('./config')
const opn = require('opn')
const path = require('path')

module.exports = {
    entry: {
      debug: "./debug/debug.js",
      test: "./test/test.js"
    },
    output: {
      path: __dirname,
      filename: "./dist/[name].js"
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
    },
    devtool: 'source-map',
    devServer: {
      contentBase: "./",
      hot: true,
      inline: true,
      host: '0.0.0.0',
      port: config.port
    }
};

opn('http://localhost:' + config.port);
opn('http://localhost:' + config.port + '/test');

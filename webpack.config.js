module.exports = {
  entry: {
    bird: "./src/bird.ts",
    test: "./test/test.ts"
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].js"
  },
  module: {
    loaders: [
      { 
        test: /\.tsx?$/, 
        loader: 'ts-loader'
      }
    ]
  },
  devServer: {
    contentBase: "./",
    hot: true,
    inline: true,
    port: 9210
  }
};
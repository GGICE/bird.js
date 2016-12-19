module.exports = {
  entry: {
    // bird: "./src/Bird.ts",
    test: "./test/test.ts"
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].js"
  },
  resolve: {
    extensions: ["", ".js", ".ts"],
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
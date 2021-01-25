module.exports = {
  entry: "./lib/index.js",
  output: {
    filename: "index.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader")
      }
    ]
  }
};

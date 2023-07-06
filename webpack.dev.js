/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: "./public",
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

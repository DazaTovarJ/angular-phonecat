const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[id].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[chunkhash].css",
    }),
  ],
  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          name: false,
        },
      },
    },
  },
};

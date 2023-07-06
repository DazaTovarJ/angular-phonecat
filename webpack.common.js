const path = require("path");

const { ProvidePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  entry: {
    app: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|svg|png|jpg|gif)$/,
        type: "asset",
      },
      {
        mimetype: "image/svg+xml",
        scheme: "data",
        type: "asset/resource",
        generator: {
          filename: "icons/[hash].svg",
        },
      },
      {
        test: /\.(component|template)\.html?$/,
        type: "asset/source",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new ProvidePlugin({
      "window.jQuery": "jquery",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
    moduleIds: "deterministic",
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
};

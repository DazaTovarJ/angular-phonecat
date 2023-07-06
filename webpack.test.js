const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});

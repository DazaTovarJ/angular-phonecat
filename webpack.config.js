const path = require("path");

const { merge } = require("webpack-merge");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ForkTsCheckerNotifierWebpackPlugin = require("fork-ts-checker-notifier-webpack-plugin");

const webpackCommon = require("./webpack.common");

const envFile = {
  production: "prod",
  development: "dev",
};

/**
 *
 * @param {*} env
 * @param {*} argv
 * @returns {import("webpack").Configuration}
 */
module.exports = (env, argv) => {
  const envFileSuffix = !argv.mode ? envFile.production : envFile[argv.mode];
  /**
   * @type {import("webpack").Configuration}
   */
  const envConfig = require(`./webpack.${envFileSuffix}`);

  /**
   * @type {import("webpack").Configuration}
   */
  const appConfig = {
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          configFile: path.resolve(__dirname, "tsconfig.app.json"),
        },
      }),
      new ForkTsCheckerNotifierWebpackPlugin({
        title: "TypeScript",
        excludeWarnings: false,
      }),
    ],
  };
  if (!argv.mode) {
    appConfig.mode = "production";
  }

  return merge(webpackCommon, envConfig, appConfig);
};

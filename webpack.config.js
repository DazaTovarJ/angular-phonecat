const path = require("path");

const { merge } = require("webpack-merge");

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
  const appConfig = {};
  if (!argv.mode) {
    appConfig.mode = "production";
  }

  return merge(webpackCommon, envConfig, appConfig);
};

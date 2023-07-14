const path = require("path");
const testConfig = require("./webpack.test");

module.exports = function (config) {
  config.set({
    basePath: "",

    files: [
      {
        pattern: "node_modules/angular/angular.js",
        included: false,
        watched: false,
      },
      {
        pattern: "node_modules/angular-animate/angular-animate.js",
        included: false,
        watched: false,
      },
      {
        pattern: "node_modules/angular-resource/angular-resource.js",
        included: false,
        watched: false,
      },
      {
        pattern: "node_modules/angular-route/angular-route.js",
        included: false,
        watched: false,
      },
      {
        pattern: "node_modules/angular-mocks/angular-mocks.js",
        included: false,
        watched: false,
      },
      "src/test.ts",
      { pattern: "src/app/**/*.module.[j|t]s", included: false, watched: true },
      { pattern: "*!(.module|.spec).[j|t]s", included: false, watched: true },
      {
        pattern: "!(node_modules)/**/*!(.module|.spec).[j|t]s",
        included: false,
        watched: true,
      },
      { pattern: "src/app/**/*.spec.[j|t]s", included: false, watched: true },
      { pattern: "**/*.html", included: false, watched: true },
    ],

    preprocessors: {
      "src/test.ts": ["webpack"],
    },

    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    coverageReporter: {
      dir: path.join(__dirname, "./coverage/angular-phonecat"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
    },

    webpack: testConfig,

    autoWatch: true,

    frameworks: ["jasmine", "webpack"],

    reporters: ["progress", "kjhtml"],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ["Chrome"],

    autoWatchBatchDelay: 300,

    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("karma-webpack"),
    ],
  });
};

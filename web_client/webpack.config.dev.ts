import * as webpack from "webpack";

import {
  sharedModuleConfig,
  sharedPlugins,
  sharedOutput,
  sharedEntry,
  sharedResolve,
} from "./webpack.config.sharedConfig";

// webpack config for a react app in typescript
const webpackConfig: webpack.Configuration = {
  devtool: "inline-source-map",
  entry: sharedEntry,
  mode: "development",
  module: sharedModuleConfig,
  output: sharedOutput,
  plugins: sharedPlugins,
  resolve: sharedResolve,
};

module.exports = webpackConfig;

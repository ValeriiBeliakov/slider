import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';
import { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/types";


export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const isDev = options.mode === "development";
  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
  ];
  if (!isDev) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      })
    );
    // plugins.push(new BundleAnalyzerPlugin())
  }
  return plugins;
}

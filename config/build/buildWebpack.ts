import  webpack  from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildDevServer } from "./buildDevServer";
import { BuildOptions } from "./types/types";

export function buildWebpack(options:BuildOptions):webpack.Configuration{
    const isDev = options.mode === 'development';
 return {
     mode:options.mode,
     entry:options.paths.entry,
     output:{
         filename:'[name].[contenthash:8].js',
         path:options.paths.build,
         clean:true
     },
     plugins: buildPlugins(options),
     module:{
         rules:buildLoaders(options),
     },
     resolve:buildResolvers(options),
     devtool:isDev && 'inline-source-map',
     devServer:isDev ? BuildDevServer(options) : undefined
}
}
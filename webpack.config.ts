import path from "path";
import webpack from "webpack";
import {
  BuildMode,
  BuildPaths,
} from "./config/build/types/types";
import { buildWebpack } from "./config/build/buildWebpack";

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    public: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, "src"),
  };
  const config: webpack.Configuration = buildWebpack({
    port: env.port,
    mode: env.mode,
    paths: paths,
  });
  return config;
};

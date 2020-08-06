import webpack from "webpack";
import path from "path";

import nodeExternals from "webpack-node-externals";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.ts",
  target: "node",
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
};

export default config;

/* eslint-env node */
import HtmlPlugin from "html-webpack-plugin";
import WebpackModules from "webpack-modules";
import TerserPlugin from "terser-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

const isDevelopment = process.env.NODE_ENV !== "production";

const webpackConfig = (env) => {
  return {
    mode: env === "production" ? "production" : "development",
    devtool: env === "production" ? "cheap-source-maps" : "eval",
    entry: {
      main: "./src/index.tsx",
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                plugins: [isDevelopment && "react-refresh/babel"].filter(
                  Boolean
                ),
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new WebpackModules(),
      new HtmlPlugin({
        template: "./src/index.ejs",
        title: "Hello",
        chunks: ["main"],
        hash: true,
        meta: {
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
      }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
        }),
      ],
    },
  };
};

export default webpackConfig;

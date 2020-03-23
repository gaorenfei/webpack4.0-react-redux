const path = require("path");
const config = require("./config");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //HTML模板
const DotenvFlow = require("dotenv-flow-webpack"); //配置env文件

module.exports = (env) => {
  return {
    entry: {
      main: path.join(__dirname, "../src/main.jsx")
    },
    output: {
      chunkFilename: "[name].[contenthash:6].js", // 按需加载文件名称
      filename: "app.js", // 打包后文件名为app.js
      path: path.resolve(__dirname, "../dist"), //打包后的文件资源在dist文件下
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|woff|woff2)$/,
          include: config.srcPath,
          loader: "url-loader?limit=8192&name=images/[hash:8].[name].[ext]",
          exclude: /node_modules/
        },
        {
          test: /\.(ttf|eot|mp4|ogg|svg)$/,
          include: config.srcPath,
          loader: "file-loader",
          exclude: /node_modules/
        },
        {
          test: /\.(js|jsx)$/,
          enforce: "pre",
          use: [{
            loader: "eslint-loader",
            options: { // 指定错误报告的格式规范
              formatter: require("eslint-friendly-formatter")
            }
          }],
          include: config.srcPath,
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"],
      alias: { // 引入模块别名
        "@": `${config.srcPath}`,
        actions: `${config.srcPath}/actions`,
        stores: `${config.srcPath}/stores`,
        pages: `${config.srcPath}/pages/`,
        util: `${config.srcPath}/util/`,
        styles: `${config.srcPath}/styles/`
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(__dirname, "../index.html"), //样板
        inject: "body", //注入到哪里
        chunksSortMode: "none",
        hash: true
      }),
      new DotenvFlow(),
      //全局变量
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      })
    ]
  }
}
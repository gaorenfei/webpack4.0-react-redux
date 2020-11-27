const path = require("path");
const config = require("./config");
module.exports = {
    mode: "development",
    entry: path.join(__dirname, "../server/index.js"),
    output: {
        filename: "app.js",
        path: path.join(__dirname, "../server/build")
    },
    target: "node",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: { // 引入模块别名
            "@": `${config.srcPath}`,
            actions: `${config.srcPath}/actions`,
            stores: `${config.srcPath}/stores`,
            pages: `${config.srcPath}/pages/`,
            util: `${config.srcPath}/util/`,
            styles: `${config.srcPath}/styles/`
          }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader",
                      options: {
                        javascriptEnabled: true
                      }
                    }
                ]
            },
            {
            test: /\.jsx?$/,
            use: "babel-loader",
            exclude: /node_modules/
        }]
    }
};
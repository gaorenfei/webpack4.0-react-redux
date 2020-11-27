// 处理css
// import csshook from "css-modules-require-hook/preset";
// 处理图片
// import assethook from "asset-require-hook";
// assethook({
//     extensions: ["png", "jpg"]
// });

import fs from "fs";
import path from "path";
import express from "express";

import React from "react";
import { StaticRouter, matchPath } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux"
import App from "../src/app";
import store from "@/stores";
// import routes from "../src/routes/serverRouter";
const app = express();

app.get("/*", (req, res) => {
    // const currentRoute = routes.find(route => matchPath(req.path, route)) || {};
        const context = {}
        const renderedString = renderToString(
            <Provider store={store}>
                <StaticRouter context={context} location = {req.path}>
                    <App></App>
                </StaticRouter>
            </Provider>
        );
    fs.readFile(path.resolve("index.html"), "utf8", (error, data) => {
        if (error) {
            res.send("<p>Server Error</p>");
            return false;
        }
        res.send(data.replace("{{root}}", renderedString));
    })
});

app.listen(3000);
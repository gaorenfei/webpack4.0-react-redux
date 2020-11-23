import React from "react";
import ReactDOM from "react-dom";
const { Provider }  = require('react-redux');
const { HashRouter } = require("react-router-dom");
import App from "./app";
import store from "./stores";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
    </Provider>,
    document.getElementById("root")
  );

// webpack进行热更新
if ((module as any).hot) {
  (module as any).hot.accept();
}

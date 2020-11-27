import React from "react";
import { Switch, Route } from "react-router-dom";

import login from "pages/login";
import home from "pages/home";
import NoMatch from "pages/404";
import fetchData from "util";
let router = [
  {
    path: "/",
    exact: true,
    component: login,
    fetchData
  },
  {
    path: "/home",
    exact: true,
    component: home
  }
];

const Routers = () => (
  <Switch>
    {router.map(({ component, path, exact }) => {
      return (
        <Route component={component}
            exact={exact}
            key={path}
            path={path}
        />
      );
    })}
    <Route component={NoMatch}/>
  </Switch>
);

export default Routers;

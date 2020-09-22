import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Like from "./components/Like";
import Home from "./components/Home";

const Main = () => {
  return (
    <div>
      <HashRouter basename="/">
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/home" exact component={() => <Home />} />
          <Route path="/like" exact component={() => <Like />} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Main;

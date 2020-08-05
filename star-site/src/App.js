import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.css";

import WorkPage from "./PageComponents/WorkPage/";
import MainPage from "./PageComponents/MainPage/";

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route path="/work" component={WorkPage}></Route>
        <Route path="/writing"></Route>
        <Route exact path="/" component={MainPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
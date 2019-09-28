import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { store } from "./constants/store";
import { history } from "./constants/global";
import { App } from "./app";

const Index = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);

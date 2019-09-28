import React from "react";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";
import { Menu } from "./components/organisms/menu";
import { Documentation } from "./components/organisms/documentation";
import { TabsWithParamsContainer } from "./example/containers/tabs-with-params-container";
import { TabsWithoutParamsContainer } from "./example/containers/tabs-without-params-container";

axios.defaults.baseURL = "https://swapi.co/api";

export const App = () => (
  <Menu>
    <Switch>
      <Redirect from="/" to="/documentation" />
      <Route exact path="/documentation">
        <Documentation />
      </Route>
      <Route path="/tabs-with-params">
        <TabsWithParamsContainer />
      </Route>
      <Route path="/tabs-without-params">
        <TabsWithoutParamsContainer />
      </Route>
    </Switch>
  </Menu>
);

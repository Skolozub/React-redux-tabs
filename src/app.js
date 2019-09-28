import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import { Menu } from "./components/organisms/menu";
import { Documentation } from "./components/organisms/documentation";

axios.defaults.baseURL = "https://swapi.co/api";

export const App = () => (
  <Menu>
    <Switch>
      <Route path="/" component={Documentation} />
    </Switch>
  </Menu>
);

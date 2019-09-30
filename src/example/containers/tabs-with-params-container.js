import React from "react";
import { Tabs } from "../components/atoms/tabs";
import ListContainer from "./list-container";
import { store } from "../../constants/store";
import { registerTabs } from "../../containers/register-tabs";
import { connect } from "react-redux";

const tabsWithParams = [
  ["1", "Все", ListContainer],
  ["2", "Категории", ListContainer],
  ["3", "Мои", ListContainer],
  ["4", "Режим редактирования", ListContainer]
];

const RegisteredTabs = registerTabs({
  store,
  activeTabKey: "1",
  tabsName: "withparams",
  withparams: true
});

const TabsWithParamsContainer = ({ params, options, location }) => (
  <Tabs>
    <RegisteredTabs />
    <Tabs.Header>
      {tabsWithParams.map(([key, title]) => (
        <Tabs.Tab key={key} tabKey={key} {...{ params, ...options, location }}>
          {title}
        </Tabs.Tab>
      ))}
    </Tabs.Header>
    <Tabs.Body>
      {tabsWithParams.map(([key, _, Component]) => (
        <Tabs.Content key={key} tabKey={key} {...{ params, ...options }}>
          <Component {...{ params }} />
        </Tabs.Content>
      ))}
    </Tabs.Body>
  </Tabs>
);

const mapStateToProps = state => ({
  params: state.tabs.withparams.params,
  options: state.tabs.withparams.options,
  location: state.router.location
});

export default connect(mapStateToProps)(TabsWithParamsContainer);

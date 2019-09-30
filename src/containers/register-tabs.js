import React from "react";
import TabsContainer from "./tabs-container";
import { redisterTabsComponent } from "../actions/tabs-actions";

export const registerTabs = ({
  store,
  tabsName,
  activeTabKey,
  paramName = "page",
  withparams = false
}) => {
  store.dispatch(
    redisterTabsComponent({
      tabsName,
      options: { paramName, withparams }
    })
  );

  return props => (
    <TabsContainer
      {...{ ...props, tabsName, activeTabKey, paramName, withparams }}
    />
  );
};

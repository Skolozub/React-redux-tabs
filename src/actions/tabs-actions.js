import { TABS_REGISTERED, TABS_SET_PARAMS, TABS_DEL_PARAMS } from "./constants";

export const redisterTabs = ({ tabsName, options }) => ({
  type: TABS_REGISTERED,
  payload: { tabsName, options }
});

export const setTabsParams = ({ tabsName, params }) => ({
  type: TABS_SET_PARAMS,
  payload: { tabsName, params }
});

export const deleteTabs = ({ tabsName }) => ({
  type: TABS_DEL_PARAMS,
  payload: { tabsName }
});

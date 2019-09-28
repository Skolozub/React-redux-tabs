import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { history } from "../constants/global";
import { tabsReducer } from "./tabs-reducer";

export const rootReducer = combineReducers({
  router: connectRouter(history),
  tabs: tabsReducer
});

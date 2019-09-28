import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { history } from "../constants/global";

export const rootReducer = combineReducers({
  router: connectRouter(history)
});

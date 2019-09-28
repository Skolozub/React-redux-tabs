import {
  TABS_REGISTERED,
  TABS_SET_PARAMS,
  TABS_DEL_PARAMS
} from "../actions/constants";

const initialState = {};

export const tabsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TABS_REGISTERED: {
      return {
        ...state,
        [payload.tabsName]: {
          params: {},
          options: { ...payload.options }
        }
      };
    }

    case TABS_SET_PARAMS: {
      return {
        ...state,
        [payload.tabsName]: {
          ...state[payload.tabsName],
          params: { ...payload.params }
        }
      };
    }

    case TABS_DEL_PARAMS: {
      return {
        ...state,
        [payload.tabsName]: {
          ...state[payload.tabsName],
          params: {}
        }
      };
    }

    default: {
      return state;
    }
  }
};

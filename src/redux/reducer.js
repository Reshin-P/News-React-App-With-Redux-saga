import * as types from "./actionTypes";


export const newsReducer = (state = {}, action) => {
    console.log(action);
  switch (action.type) {
    case types.NEWS_START:
      return {
        ...state,
        loading: true,
      };
    case types.NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload,
      };
    case types.NEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


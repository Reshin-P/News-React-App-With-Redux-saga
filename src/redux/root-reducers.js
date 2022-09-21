import { combineReducers } from "redux";
import { newsReducer} from "./reducer.js";

const rootReducer = combineReducers({
  news:newsReducer
});

export default rootReducer;

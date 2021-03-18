import {combineReducers} from "redux";
import JSONFormatterReducer from "./JSONFormatter/JSONFormatterReducer";

export default combineReducers({
  JSONFormatter: JSONFormatterReducer
});

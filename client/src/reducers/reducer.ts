import { combineReducers } from "redux";
import { user } from "./user";
import { todaytask } from "./todaytask";

export default combineReducers({
  user,
  todaytask,
});

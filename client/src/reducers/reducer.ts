import { combineReducers } from "redux";
import { user } from "./user";
import { todaytask } from "./todaytask";
import { inboxtask } from "./inboxtask";
import { weeklytask } from "./weeklytask";
import { project } from "./project";

export default combineReducers({
  user,
  todaytask,
  inboxtask,
  weeklytask,
  project,
});

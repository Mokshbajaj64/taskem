import { combineReducers } from "redux";
import { user } from "./user";
import { todaytask } from "./todaytask";
import { inboxtask } from "./inboxtask";
import { weeklytask } from "./weeklytask";
import { project } from "./project";
import { singleproject } from "./singleproject";
import { tag } from "./tag";

export default combineReducers({
  user,
  todaytask,
  inboxtask,
  weeklytask,
  project,
  singleproject,
  tag,
});

import { combineReducers } from "redux";
import { user } from "./user";
import { todaytask } from "./todaytask";
import { inboxtask } from "./inboxtask";
import { weeklytask } from "./weeklytask";
import { project } from "./project";
import { singleproject } from "./singleproject";
import { tag } from "./tag";
import { singletag } from "./singletag";
import { projecttask } from "./projecttask";
import { completedtasks } from "./completedtasks";
import { deletedtasks } from "./deletedtasks";

export default combineReducers({
  user,
  todaytask,
  inboxtask,
  weeklytask,
  project,
  singleproject,
  tag,
  singletag,
  projecttask,
  completedtasks,
  deletedtasks,
});

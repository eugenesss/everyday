/**
 * App Reducers
 */
import { combineReducers } from "redux";
import settings from "./settings";
import authUserReducer from "./AuthUserReducer";
import leadReducer from "./crm/LeadReducer";
import reportReducer from "./ReportReducer";

const reducers = combineReducers({
  settings,
  authUser: authUserReducer,
  leadState: leadReducer,
  reportState: reportReducer
});

export default reducers;

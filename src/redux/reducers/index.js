/**
 * App Reducers
 */
import { combineReducers } from "redux";
import settings from "./settings";
import authUserReducer from "./AuthUserReducer";
import leadReducer from "./crm/LeadReducer";

const reducers = combineReducers({
  settings,
  authUser: authUserReducer,
  leadState: leadReducer
});

export default reducers;

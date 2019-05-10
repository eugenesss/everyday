/**
 * App Reducers
 */
import { combineReducers } from "redux";
import settings from "./settings";
import authUserReducer from "./AuthUserReducer";
import leadReducer from "./crm/LeadReducer";
import calendarCalendarReducer from "./calendar/CalendarReducer";

const reducers = combineReducers({
  settings,
  authUser: authUserReducer,
  leadState: leadReducer,
  calendarState: calendarCalendarReducer,
});

export default reducers;

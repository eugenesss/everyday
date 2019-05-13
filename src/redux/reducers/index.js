/**
 * App Reducers
 */
import { combineReducers } from "redux";
import settings from "./settings";
import authUserReducer from "./AuthUserReducer";
import LeadReducer from "./crm/LeadReducer";
import reportReducer from "./ReportReducer";
import QuotationReducer from "./accounting/QuotationReducer";

const reducers = combineReducers({
  settings,
  authUser: authUserReducer,
  leadState: LeadReducer,
  quotationState: QuotationReducer,
  reportState: reportReducer
});

export default reducers;

/**
 * App Reducers
 */
import { combineReducers } from "redux";
import settings from "./settings";
import authUserReducer from "./AuthUserReducer";
import reportReducer from "./ReportReducer";
import QuotationReducer from "./accounting/QuotationReducer";

// crm
import LeadReducer from "./crm/LeadReducer";
import CustomerReducer from "./crm/CustomerReducer";
import AccountReducer from "./crm/AccountReducer";
import DealReducer from "./crm/DealReducer";

const reducers = combineReducers({
  settings,
  authUser: authUserReducer,
  crmState: combineReducers({
    leadState: LeadReducer,
    customerState: CustomerReducer,
    accountState: AccountReducer,
    dealState: DealReducer
  }),
  quotationState: QuotationReducer,
  reportState: reportReducer
});

export default reducers;

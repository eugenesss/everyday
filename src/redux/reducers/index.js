/**
 * App Reducers
 */
import { combineReducers } from "redux";
import settings from "./settings";

import QuotationReducer from "./accounting/QuotationReducer";

// crm
import LeadReducer from "./crm/LeadReducer";
import CustomerReducer from "./crm/CustomerReducer";
import AccountReducer from "./crm/AccountReducer";
import DealReducer from "./crm/DealReducer";

// system
import authUserReducer from "./AuthUserReducer";
import reportReducer from "./ReportReducer";
import calendarCalendarReducer from "./calendar/CalendarReducer";
import usersReducer from "./settings/users/UsersReducer";

const reducers = combineReducers({
  settings,
  authUser: authUserReducer,
  crmState: combineReducers({
    leadState: LeadReducer,
    customerState: CustomerReducer,
    accountState: AccountReducer,
    dealState: DealReducer
  }),
  accountingState: combineReducers({
    quotationState: QuotationReducer
  }),
  reportState: reportReducer,
  calendarState: calendarCalendarReducer,
  usersState: usersReducer
});

export default reducers;

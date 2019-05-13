/**
 * App Reducers
 */
import { combineReducers } from "redux";
import settings from "./settings";

// accounting
import QuotationReducer from "./accounting/QuotationReducer";
import InvoiceReducer from "./accounting/InvoiceReducer";
import CreditNoteReducer from "./accounting/CreditNoteReducer";

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
    quotationState: QuotationReducer,
    invoiceState: InvoiceReducer,
    creditNoteState: CreditNoteReducer
  }),
  reportState: reportReducer,
  calendarState: calendarCalendarReducer,
  usersState: usersReducer
});

export default reducers;

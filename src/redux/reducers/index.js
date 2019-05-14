/**
 * App Reducers
 */
import { combineReducers } from "redux";
import settings from "./settings";
import { reducer as modal } from "redux-modal";

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
import authUserReducer from "./system/AuthUserReducer";
import reportReducer from "./system/ReportReducer";
import calendarReducer from "./calendar/CalendarReducer";
import usersReducer from "./settings/userControl/UsersReducer";
import rolesReducer from "./settings/userControl/RolesReducer";

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
  calendarState: calendarReducer,
  usersState: usersReducer,
  rolesState: rolesReducer,
  modal
});

export default reducers;

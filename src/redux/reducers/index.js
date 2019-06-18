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
import PaymentState from "./accounting/PaymentReducer";

// crm
import LeadReducer from "./crm/LeadReducer";
import CustomerReducer from "./crm/CustomerReducer";
import AccountReducer from "./crm/AccountReducer";
import DealReducer from "./crm/DealReducer";
import CrmFieldReducer from "./crm/CrmFieldReducer";
import SalesTeamReducer from "./crm/SalesTeamReducer";

//settings
import usersReducer from "./settings/userControl/UsersReducer";
import companyReducer from "./settings/general/CompanyReducer";
import groupsReducer from "./settings/userControl/GroupsReducer";
import rolesReducer from "./settings/userControl/RolesReducer";
import hierarchiesReducer from "./settings/userControl/HierarchiesReducer";

// system
import authUserReducer from "./system/AuthUserReducer";
import reportReducer from "./system/ReportReducer";
import calendarReducer from "./calendar/CalendarReducer";

const reducers = combineReducers({
  settings,
  authUser: authUserReducer,
  crmState: combineReducers({
    leadState: LeadReducer,
    customerState: CustomerReducer,
    accountState: AccountReducer,
    dealState: DealReducer,
    crmField: CrmFieldReducer,
    salesTeamState: SalesTeamReducer
  }),
  accountingState: combineReducers({
    quotationState: QuotationReducer,
    invoiceState: InvoiceReducer,
    creditNoteState: CreditNoteReducer,
    paymentState: PaymentState
  }),
  reportState: reportReducer,
  calendarState: calendarReducer,
  usersState: usersReducer,
  rolesState: rolesReducer,
  groupsState: groupsReducer,
  hierarchiesState: hierarchiesReducer,
  companyState: companyReducer,
  modal
});

export default reducers;

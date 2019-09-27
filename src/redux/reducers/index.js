/**
 * App Reducers
 */
import { combineReducers } from "redux";
import { reducer as modal } from "redux-modal";

// accounting
import QuotationReducer from "./accounting/QuotationReducer";
import InvoiceReducer from "./accounting/InvoiceReducer";
import CreditNoteReducer from "./accounting/CreditNoteReducer";
import PaymentState from "./accounting/PaymentReducer";
import AccountingReducer from "./accounting/AccountingReducer";

// crm
import {
  LeadReducer,
  CustomerReducer,
  AccountReducer,
  DealReducer,
  CrmFieldReducer
} from "Ducks/crm";

//settings
import usersReducer from "./settings/userControl/UsersReducer";
import companyReducer from "./settings/general/CompanyReducer";
import groupsReducer from "./settings/userControl/GroupsReducer";
import rolesReducer from "./settings/userControl/RolesReducer";

// system
import authUserReducer from "./system/AuthUserReducer";
import { ReportReducer } from "Ducks/report";
import { CalendarReducer } from "Ducks/calendar";
import { WidgetReducer } from "Ducks/widget";

const reducers = combineReducers({
  authUser: authUserReducer,
  crmState: combineReducers({
    leadState: LeadReducer,
    customerState: CustomerReducer,
    accountState: AccountReducer,
    dealState: DealReducer,
    crmField: CrmFieldReducer
  }),
  accountingState: combineReducers({
    quotationState: QuotationReducer,
    invoiceState: InvoiceReducer,
    creditNoteState: CreditNoteReducer,
    paymentState: PaymentState,
    accountState: AccountingReducer
  }),
  widgetState: WidgetReducer,
  reportState: ReportReducer,
  calendarState: CalendarReducer,
  usersState: usersReducer,
  rolesState: rolesReducer,
  groupsState: groupsReducer,
  companyState: companyReducer,
  modal
});

export default reducers;

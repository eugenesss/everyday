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

// system
import authUserReducer from "./system/AuthUserReducer";
import reportReducer from "./system/ReportReducer";
import calendarReducer from "./calendar/CalendarReducer";
import WidgetReducer from "./system/WidgetReducer";

// upload file
import uploadFileReducer from "./upload/uploadFileReducer";
import ImportReducer from "./system/ImportReducer";

const reducers = combineReducers({
  authUser: authUserReducer,
  uploadFile: uploadFileReducer,
  importRecord: ImportReducer,
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
    paymentState: PaymentState,
    accountState: AccountingReducer
  }),
  widgetState: WidgetReducer,
  reportState: reportReducer,
  calendarState: calendarReducer,
  usersState: usersReducer,
  rolesState: rolesReducer,
  groupsState: groupsReducer,
  companyState: companyReducer,
  modal
});

export default reducers;

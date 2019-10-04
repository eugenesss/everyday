/**
 * App Reducers
 */
import { combineReducers } from "redux";
import { reducer as modal } from "redux-modal";

// accounting
// import QuotationReducer from "./accounting/QuotationReducer";
// import InvoiceReducer from "./accounting/InvoiceReducer";
// import CreditNoteReducer from "./accounting/CreditNoteReducer";
// import PaymentState from "./accounting/PaymentReducer";
// import AccountingReducer from "./accounting/AccountingReducer";

// account
import {
  // AccountingReducer,
  CreditNoteReducer,
  InvoiceReducer,
  PaymentReducer,
  QuotationReducer
} from "Ducks/accounting";


// crm
import {
  LeadReducer,
  CustomerReducer,
  AccountReducer,
  DealReducer,
  CrmFieldReducer
} from "Ducks/crm";

//settings
import { UserManagementReducer, RolesReducer } from "Ducks/setting";

// system
import authUserReducer from "./system/AuthUserReducer";
import { ReportReducer } from "Ducks/report";
import { CalendarReducer } from "Ducks/calendar";
import { WidgetReducer } from "Ducks/widget";

const reducers = combineReducers({
  // sessionState: combineReducers({
  //   authState: AuthReducer,
  //   registerState: RegisterState,
  //   forgetPasswordState: ForgetPasswordReducer
  // }),
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
    paymentState: PaymentReducer,
    // accountState: AccountingReducer
  }),
  widgetState: WidgetReducer,
  reportState: ReportReducer,
  calendarState: CalendarReducer,
  usersState: UserManagementReducer,
  rolesState: RolesReducer,
  // groupsState: groupsReducer,
  // companyState: CompanySettingsReducer,
  modal
});

export default reducers;

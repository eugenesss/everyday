/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// accounting
import quoteSagas from "./accounting/Quotation";
import invoiceSagas from "./accounting/Invoice";
import creditNoteSagas from "./accounting/CreditNote";
import paymentSagas from "./accounting/Payment";
import accountingSagas from "./accounting/Accounting";

//  crm
import {
  LeadSaga,
  CustomerSaga,
  AccountSaga,
  DealSaga,
  CrmFieldSaga
} from "Ducks/crm";

// settings
import { UserManagementSaga, RolesSaga } from "Ducks/setting";

// calendar
import { CalendarSaga } from "Ducks/calendar";

// session
import { ForgetPasswordSaga, RegisterSaga } from "Ducks/session";
import AuthSaga from "Ducks/session/auth/AuthSaga";

// reports
import { ReportSaga } from "Ducks/report";

// widgets
import { WidgetSaga } from "Ducks/widget";

export default function* rootSaga() {
  yield all([
    // Accounting
    quoteSagas(),
    invoiceSagas(),
    accountingSagas(),
    creditNoteSagas(),
    paymentSagas(),

    // CRM
    LeadSaga(),
    CustomerSaga(),
    AccountSaga(),
    DealSaga(),
    CrmFieldSaga(),

    // Session
    AuthSaga(),
    ForgetPasswordSaga(),
    RegisterSaga(),

    // System
    ReportSaga(),
    WidgetSaga(),

    // Calendar
    CalendarSaga(),

    // Settings
    RolesSaga(),
    UserManagementSaga()
  ]);
}

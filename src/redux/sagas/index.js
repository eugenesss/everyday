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

// auth
import loginSagas from "./auth/Login";
import registerSagas from "./auth/Register";

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

    // Auth
    loginSagas(),
    registerSagas(),

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

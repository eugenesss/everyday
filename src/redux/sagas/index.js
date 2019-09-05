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
import leadSagas from "./crm/Lead";
import customerSagas from "./crm/Customer";
import accountSagas from "./crm/Account";
import dealSagas from "./crm/Deal";
import crmFieldSagas from "./crm/CrmField";

// settings
import userSagas from "./settings/userControl/Users";
import companySagas from "./settings/general/Company";
import roleSagas from "./settings/userControl/Roles";
import groupSagas from "./settings/userControl/Groups";

// calendar
import calendarSagas from "./calendar/Calendar";

// auth
import loginSagas from "./auth/Login";
import registerSagas from "./auth/Register";

// uploadFile
import uploadFileSagas from "./upload/uploadFile";

// import record
import importRecordSagas from "./import/Import";

// reports
import reportSagas from "./report/Report";

// widgets
import widgetSagas from "./widget/Widget";

export default function* rootSaga(getState) {
  yield all([
    // Accounting
    quoteSagas(),
    invoiceSagas(),
    accountingSagas(),
    creditNoteSagas(),
    paymentSagas(),

    // CRM
    leadSagas(),
    customerSagas(),
    accountSagas(),
    dealSagas(),
    crmFieldSagas(),

    // Auth
    loginSagas(),
    registerSagas(),

    // System
    uploadFileSagas(),
    importRecordSagas(),
    reportSagas(),
    widgetSagas(),
    // Calendar
    calendarSagas(),

    // Settings
    roleSagas(),
    groupSagas(),
    userSagas(),
    companySagas()
  ]);
}

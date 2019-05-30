/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// accounting
import quoteSagas from "./accounting/Quotation";
import invoiceSagas from "./accounting/Invoice";
import creditNoteSagas from "./accounting/CreditNote";

//  crm
import leadSagas from "./crm/Lead";
import customerSagas from "./crm/Customer";
import accountSagas from "./crm/Account";
import dealSagas from "./crm/Deal";
import crmFieldSagas from "./crm/CrmField";

//settings
import userSagas from "./settings/userControl/Users";
import roleSagas from "./settings/userControl/Roles";
import groupSagas from "./settings/userControl/Groups";
import companySagas from "./settings/general/Company";

export default function* rootSaga(getState) {
  yield all([
    roleSagas(),
    userSagas(),
    groupSagas(),
    companySagas(),
    quoteSagas(),
    invoiceSagas(),
    creditNoteSagas(),
    leadSagas(),
    customerSagas(),
    accountSagas(),
    dealSagas(),
    crmFieldSagas()
  ]);
}

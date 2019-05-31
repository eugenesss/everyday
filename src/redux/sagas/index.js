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

//settings
import userSagas from "./settings/userControl/Users";
import companySagas from "./settings/general/Company";
import roleSagas from "./settings/userControl/Roles";
import groupSagas from "./settings/userControl/Groups";
import hierarchySagas from "./settings/userControl/Hierarchies";;

export default function* rootSaga(getState) {
  yield all([
    roleSagas(),
    groupSagas(),
    hierarchySagas(),
    userSagas(),
    companySagas(),
    quoteSagas(),
    invoiceSagas(),
    creditNoteSagas(),
    leadSagas(),
    customerSagas(),
    accountSagas(),
    dealSagas()
  ]);
}

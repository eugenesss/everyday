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

// users
import userSagas from "./setting/users/Users"
//roles
import roleSagas from "./setting/roles/Roles"

export default function* rootSaga(getState) {
  yield all([
    roleSagas(),
    userSagas(),
    quoteSagas(),
    invoiceSagas(),
    creditNoteSagas(),
    leadSagas(),
    customerSagas(),
    accountSagas(),
    dealSagas()
  ]);
}

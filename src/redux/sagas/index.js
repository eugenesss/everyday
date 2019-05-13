/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// Sagas
import quoteSagas from "./accounting/Quotation";
//  crm
import leadSagas from "./crm/Lead";
import customerSagas from "./crm/Customer";
import accountSagas from "./crm/Account";
import dealSagas from "./crm/Deal";

export default function* rootSaga(getState) {
  yield all([
    quoteSagas(),
    leadSagas(),
    customerSagas(),
    accountSagas(),
    dealSagas()
  ]);
}

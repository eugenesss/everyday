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

export default function* rootSaga(getState) {
  yield all([
    quoteSagas(),
    invoiceSagas(),
    creditNoteSagas(),
    leadSagas(),
    customerSagas(),
    accountSagas(),
    dealSagas()
  ]);
}

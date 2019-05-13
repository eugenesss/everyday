/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// Sagas
import leadSagas from "./crm/Lead";
import customerSagas from "./crm/Customer";
import quoteSagas from "./accounting/Quotation";

export default function* rootSaga(getState) {
  yield all([quoteSagas(), leadSagas(), customerSagas()]);
}

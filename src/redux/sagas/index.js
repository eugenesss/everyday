/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// Sagas
import leadSagas from "./Lead";

export default function* rootSaga(getState) {
  yield all([]);
}

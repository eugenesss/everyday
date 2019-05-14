import {
  all,
  call,
  fork,
  put,
  takeEvery,
  select,
  delay
} from "redux-saga/effects";
import { CHANGE_INVOICE_LIST_VIEW, GET_ALL_INVOICE } from "Types";
import { getInvoiceSuccess, getInvoiceFailure } from "Actions";

import api from "Api";

//=========================
// REQUESTS
//=========================
const getAllInvoiceRequest = async () => {
  const result = [
    ["All Quote", "All Quote", "Minneapolis", 30, "$100,000", "hello", "eheje"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
    ["Frankie Parry", "Agency Legal", "Jacksonville", 71, "$210,000"]
  ];
  return result;
};
const getMyInvoiceRequest = async () => {
  const result = [
    ["My Quote", "My Quote", "singapore", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
  ];
  return result;
};
const getOpenInvoiceRequest = async () => {
  const result = [
    ["Open Quote", "Open Quote", "singapore", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
  ];
  return result;
};
const getClosedInvoiceRequest = async () => {
  const result = [
    ["Closed Quote", "Closed Quote", "singapore", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
  ];
  return result;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* changeInvoiceList({ payload }) {
  let data;
  try {
    if (payload == "All Invoices") {
      // All Invoices
      yield delay(500);
      data = yield call(getAllInvoiceRequest);
      yield put(getInvoiceSuccess(data));
    } else if (payload == "My Invoices") {
      // My Invoices
      data = yield call(getMyInvoiceRequest);
      yield delay(500);
      yield put(getInvoiceSuccess(data));
    } else if (payload == "Open Invoices") {
      // Open Invoices
      data = yield call(getOpenInvoiceRequest);
      yield delay(500);
      yield put(getInvoiceSuccess(data));
    } else if (payload == "Closed Invoices") {
      // Closed Invoices
      data = yield call(getClosedInvoiceRequest);
      yield delay(500);
      yield put(getInvoiceSuccess(data));
    } else {
      yield delay(500);
      data = yield call(getAllInvoiceRequest);
      yield put(getInvoiceSuccess(data));
    }
  } catch (error) {
    yield put(getInvoiceFailure(error));
  }
}
function* getAllInvoiceFromDB() {
  try {
    const data = yield call(getAllInvoiceRequest);
    yield put(getInvoiceSuccess(data));
  } catch (error) {
    yield put(getInvoiceFailure(error));
  }
}
//=======================
// WATCHER FUNCTIONS
//=======================
export function* changeViewWatcher() {
  yield takeEvery(CHANGE_INVOICE_LIST_VIEW, changeInvoiceList);
}
export function* getAllInvoiceWatcher() {
  yield takeEvery(GET_ALL_INVOICE, getAllInvoiceFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([fork(changeViewWatcher), fork(getAllInvoiceWatcher)]);
}

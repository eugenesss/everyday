import {
  all,
  call,
  fork,
  put,
  takeEvery,
  select,
  delay
} from "redux-saga/effects";
import {
  CHANGE_INVOICE_LIST_VIEW,
  GET_ALL_INVOICE,
  GET_SINGLE_INVOICE
} from "Types";
import {
  getInvoiceSuccess,
  getInvoiceFailure,
  getSingleInvoiceSuccess
} from "Actions";

import api from "Api";

import { invoice, invoiceList } from "Components/DummyData";
import { get } from "http";

//=========================
// REQUESTS
//=========================
const getAllInvoiceRequest = async () => {
  const result = invoiceList;
  return result;
};
const getMyInvoiceRequest = async () => {
  const result = invoiceList;
  return result;
};
const getOpenInvoiceRequest = async () => {
  const result = invoiceList;
  return result;
};
const getClosedInvoiceRequest = async () => {
  const result = invoiceList;
  return result;
};
const getInvoiceRequest = async invID => {
  console.log(`fetching ${invID}`);
  const result = invoice;
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
    yield delay(500);
    yield put(getInvoiceSuccess(data));
  } catch (error) {
    yield put(getInvoiceFailure(error));
  }
}
function* getInvoiceFromDB({ payload }) {
  try {
    const data = yield call(getInvoiceRequest, payload);
    yield delay(500);
    yield put(getSingleInvoiceSuccess(data));
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
export function* getSingleInvoiceWatcher() {
  yield takeEvery(GET_SINGLE_INVOICE, getInvoiceFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(changeViewWatcher),
    fork(getAllInvoiceWatcher),
    fork(getSingleInvoiceWatcher)
  ]);
}

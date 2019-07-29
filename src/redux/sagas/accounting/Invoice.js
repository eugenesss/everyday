import {
  all,
  call,
  fork,
  put,
  takeEvery,
  select,
  delay
} from "redux-saga/effects";

import * as types from 'Types'

import * as actions from 'Actions'

import api from "Api";

import { invoice, invoiceList } from "Components/DummyData";
import { custSummary } from "../../../components/DummyData";

//=========================
// REQUESTS
//=========================
const getAllInvoiceRequest = async () => {
  const result = await api.get("/invoices");
  return result.data;
};

const getInvoiceRequest = async invoiceID => {
  const result = await api.get(`/invoices/${invoiceID}`);
  return result.data;
};

const deleteInvoicefromDBRequest = async(item) => {
  const result = await api.delete(`/invoices/${item.payload}`);
  return result.data;
}


const patchStateInvoiceRequest = async (payload) => {

  const result = await api.post(`/invoices/updateStatus/`, {data: payload});
    return result.data;

};


const createNewVersionStateInvoiceRequest = async (payload) => {
  const result = await api.post(`/invoices/convert`, {data: payload});
  console.log(result.data)
  return result.data;
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

const getInvoiceSummaryRequest = async () => {
  const result = custSummary;
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
      yield put(actions.getInvoiceSuccess(data));
    } else if (payload == "My Invoices") {
      // My Invoices
      data = yield call(getMyInvoiceRequest);
      yield delay(500);
      yield put(actions.getInvoiceSuccess(data));
    } else if (payload == "Open Invoices") {
      // Open Invoices
      data = yield call(getOpenInvoiceRequest);
      yield delay(500);
      yield put(actions.getInvoiceSuccess(data));
    } else if (payload == "Closed Invoices") {
      // Closed Invoices
      data = yield call(getClosedInvoiceRequest);
      yield delay(500);
      yield put(actions.getInvoiceSuccess(data));
    } else {
      yield delay(500);
      data = yield call(getAllInvoiceRequest);
      yield put(actions.getInvoiceSuccess(data));
    }
  } catch (error) {
    yield put(actions.getInvoiceFailure(error));
  }
}
function* getAllInvoiceFromDB() {
  try {
    const data = yield call(getAllInvoiceRequest);
    yield delay(500);
    yield put(actions.getInvoiceSuccess(data));
  } catch (error) {
    yield put(actions.getInvoiceFailure(error));
  }
}
function* getInvoiceFromDB({ payload }) {
  try {
    const data = yield call(getInvoiceRequest, payload);
    yield delay(500);
    yield put(actions.getSingleInvoiceSuccess(data));
  } catch (error) {
    yield put(actions.getInvoiceFailure(error));
  }
}
function* getInvoiceSummaryFromDB() {
  try {
    const data = yield call(getInvoiceSummaryRequest);
    yield put(actions.getInvoiceSummarySuccess(data));
  } catch (error) {
    yield put(actions.getInvoiceSummaryFailure(error));
  }
}


function* deleteInvoicefromDB(item) {
  try {
    const data = yield call(deleteInvoicefromDBRequest, item);
    if(data.count == 0){
      var error = new Error();
      throw error
    }
    yield put(actions.deleteSingleInvoiceSuccess(data));
  } catch (error) {
    yield put(actions.deleteSingleInvoiceFailure('Unable to delete the record'));
  }
}


function* patchStateInvoice({ payload }) {
  try {
    const data = yield call(patchStateInvoiceRequest, payload);
    yield put(actions.InvoiceHandleStateUpdateSuccess(data.data));
  } catch (error) {
    yield put(actions.InvoiceHandleStateUpdateFailure(error));
  }
}

function* createNewVersionStateInvoice({ payload }) {
  try {
    const data = yield call(createNewVersionStateInvoiceRequest, payload);
    console.log(data)
    yield put(actions.InvoiceHandleStateUpdateSuccess(data.data));
  } catch (error) {
    yield put(actions.InvoiceHandleStateUpdateFailure(error));
  }
}






//=======================
// WATCHER FUNCTIONS
//=======================
export function* changeViewWatcher() {
  yield takeEvery(types.CHANGE_INVOICE_LIST_VIEW, changeInvoiceList);
}
export function* getAllInvoiceWatcher() {
  yield takeEvery(types.GET_ALL_INVOICE, getAllInvoiceFromDB);
}
export function* getSingleInvoiceWatcher() {
  yield takeEvery(types.GET_SINGLE_INVOICE, getInvoiceFromDB);
}
export function* getInvoiceSummaryWatcher() {
  yield takeEvery(types.GET_INVOICE_SUMMARY, getInvoiceSummaryFromDB);
}
export function* deleteInvoiceSummaryWatcher() {
  yield takeEvery(types.DELETE_INVOICE, deleteInvoicefromDB);
}
export function* patchStateInvoiceWatcher() {
  yield takeEvery(types.INVOICE_HANDLE_STATE_UPDATE, patchStateInvoice);
}
export function* createNewVersionInvoiceWatcher() {
  yield takeEvery(types.INVOICE_HANDLE_STATE_CREATE_NEW_VERSION, createNewVersionStateInvoice);
}

export function* revertPreviousVersionQuotationWatcher() {
  yield takeEvery(Types.HANDLE_STATE_REVERT_PREVIOUS_VERSION, revertPreviousVersionStateQuotation);
}




//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(changeViewWatcher),
    fork(getAllInvoiceWatcher),
    fork(getSingleInvoiceWatcher),
    fork(getInvoiceSummaryWatcher),
    fork(deleteInvoiceSummaryWatcher),
    fork(patchStateInvoiceWatcher),
    fork(createNewVersionInvoiceWatcher),
  ]);
}

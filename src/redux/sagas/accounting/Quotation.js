import {
  all,
  call,
  fork,
  put,
  takeEvery,
  select,
  delay
} from "redux-saga/effects";
import { CHANGE_QUOTATION_LIST_VIEW, GET_ALL_QUOTATION } from "Types";
import { getQuotationSuccess, getQuotationFailure } from "Actions";

import api from "Api";

//=========================
// REQUESTS
//=========================
const getAllQuoteRequest = async () => {
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
const getMyQuoteRequest = async () => {
  const result = [
    ["My Quote", "My Quote", "singapore", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
  ];
  return result;
};
const getOpenQuoteRequest = async () => {
  const result = [
    ["Open Quote", "Open Quote", "singapore", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
  ];
  return result;
};
const getClosedQuoteRequest = async () => {
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
function* changeQuoteList({ payload }) {
  let data;
  try {
    if (payload == "All Quotations") {
      yield delay(500);
      data = yield call(getAllQuoteRequest);
      yield put(getQuotationSuccess(data));
    } else if (payload == "My Quotations") {
      data = yield call(getMyQuoteRequest);
      yield delay(500);
      yield put(getQuotationSuccess(data));
    } else if (payload == "Open Quotations") {
      data = yield call(getOpenQuoteRequest);
      yield delay(500);
      yield put(getQuotationSuccess(data));
    } else if (payload == "Closed Quotations") {
      data = yield call(getClosedQuoteRequest);
      yield delay(500);
      yield put(getQuotationSuccess(data));
    } else {
      yield delay(500);
      data = yield call(getAllQuoteRequest);
      yield put(getQuotationSuccess(data));
    }
  } catch (error) {
    yield put(getQuotationFailure(error));
  }
}
function* getAllQuoteFromDB() {
  try {
    const data = yield call(getAllQuoteRequest);
    yield put(getQuotationSuccess(data));
  } catch (error) {
    yield put(getQuotationFailure(error));
  }
}
/*
function* getMyQuoteFromDB() {
  const data = yield call(getMyQuoteRequest);
  yield put(getMyQuotationSuccess(data));
} */

//=======================
// WATCHER FUNCTIONS
//=======================
export function* changeViewWatcher() {
  yield takeEvery(CHANGE_QUOTATION_LIST_VIEW, changeQuoteList);
}
export function* getAllQuoteWatcher() {
  yield takeEvery(GET_ALL_QUOTATION, getAllQuoteFromDB);
}
/*
export function* getMyQuoteWatcher() {
  yield takeEvery(GET_MY_QUOTATION, getMyQuoteFromDB);
} */

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(changeViewWatcher),
    fork(getAllQuoteWatcher)
    // fork(getMyQuoteWatcher)
  ]);
}

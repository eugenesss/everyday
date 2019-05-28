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
  CHANGE_QUOTATION_LIST_VIEW,
  GET_ALL_QUOTATION,
  GET_SINGLE_QUOTATION,
  GET_QUOTE_SUMMARY
} from "Types";
import {
  getQuotationSuccess,
  getQuotationFailure,
  getSingleQuotationSuccess,
  getQuotationSummarySuccess,
  getQuotationSummaryFailure
} from "Actions";

import api from "Api";

import { quote, quoteList } from "Components/DummyData";
import { leadSummary } from "../../../components/DummyData";

//=========================
// REQUESTS
//=========================
const getAllQuoteRequest = async () => {
  const result = quoteList;
  return result;
};
const getMyQuoteRequest = async () => {
  const result = quoteList;
  return result;
};
const getOpenQuoteRequest = async () => {
  const result = quoteList;
  return result;
};
const getClosedQuoteRequest = async () => {
  const result = quoteList;
  return result;
};
const getQuoteRequest = async quoteID => {
  console.log(`fetching ${quoteID}`);
  const result = quote;
  return result;
};
const getQuoteSummaryRequest = async () => {
  const result = leadSummary;
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
    yield delay(500);
    yield put(getQuotationSuccess(data));
  } catch (error) {
    yield put(getQuotationFailure(error));
  }
}
function* getQuoteFromDB({ payload }) {
  try {
    const data = yield call(getQuoteRequest, payload);
    yield delay(500);
    yield put(getSingleQuotationSuccess(data));
  } catch (error) {
    yield put(getQuotationFailure(error));
  }
}
function* getQuoteSummaryFromDB() {
  try {
    const data = yield call(getQuoteSummaryRequest);
    yield put(getQuotationSummarySuccess(data));
  } catch (error) {
    yield put(getQuotationSummaryFailure(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* changeViewWatcher() {
  yield takeEvery(CHANGE_QUOTATION_LIST_VIEW, changeQuoteList);
}
export function* getAllQuoteWatcher() {
  yield takeEvery(GET_ALL_QUOTATION, getAllQuoteFromDB);
}
export function* getSingleQuotationWatcher() {
  yield takeEvery(GET_SINGLE_QUOTATION, getQuoteFromDB);
}
export function* getQuoteSummaryWatcher() {
  yield takeEvery(GET_QUOTE_SUMMARY, getQuoteSummaryFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(changeViewWatcher),
    fork(getAllQuoteWatcher),
    fork(getSingleQuotationWatcher),
    fork(getQuoteSummaryWatcher)
  ]);
}

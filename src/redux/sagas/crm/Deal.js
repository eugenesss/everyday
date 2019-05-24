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
  CHANGE_DEAL_LIST_VIEW,
  GET_ALL_DEAL,
  GET_SINGLE_DEAL,
  GET_DEAL_SUMMARY,
  SUBMIT_DEAL
} from "Types";
import {
  getDealSuccess,
  getDealFailure,
  getSingleDealSuccess,
  getDealSummarySuccess,
  getDealSummaryFailure,
  submitDealSuccess,
  submitDealError
} from "Actions";

import api from "Api";

import { dealList, deal, leadSummary } from "Components/DummyData";

//=========================
// REQUESTS
//=========================
const getAllDealRequest = async () => {
  const result = dealList;
  return result;
};
const getMyDealRequest = async () => {
  const result = dealList;
  return result;
};
const getOpenDealRequest = async () => {
  const result = dealList;
  return result;
};
const getClosedDealRequest = async () => {
  const result = dealList;
  return result;
};
const getWonDealRequest = async () => {
  const result = dealList;
  return result;
};
const getDealRequest = async dealID => {
  console.log(`fetching ${dealID}`);
  const result = deal;
  return result;
};
const getDealSummaryRequest = async () => {
  const result = leadSummary;
  return result;
};
const postDealRequest = async deal => {
  console.log(deal);
  const result = {};
  return result;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* changeDealList({ payload }) {
  let data;
  try {
    if (payload == "All Deals") {
      // All Deals
      data = yield call(getAllDealRequest);
      yield delay(500);
      yield put(getDealSuccess(data));
    } else if (payload == "My Deals") {
      // My Deals
      data = yield call(getMyDealRequest);
      yield delay(500);
      yield put(getDealSuccess(data));
    } else if (payload == "Open Deals") {
      // Open Deals
      data = yield call(getOpenDealRequest);
      yield delay(500);
      yield put(getDealSuccess(data));
    } else if (payload == "Closed Deals") {
      // Open Deals
      data = yield call(getClosedDealRequest);
      yield delay(500);
      yield put(getDealSuccess(data));
    } else if (payload == "Won Deals") {
      // Open Deals
      data = yield call(getWonDealRequest);
      yield delay(500);
      yield put(getDealSuccess(data));
    } else {
      yield delay(500);
      data = yield call(getAllDealRequest);
      yield put(getDealSuccess(data));
    }
  } catch (error) {
    yield put(getDealFailure(error));
  }
}
function* getAllDealFromDB() {
  try {
    const data = yield call(getAllDealRequest);
    yield delay(500);
    yield put(getDealSuccess(data));
  } catch (error) {
    yield put(getDealFailure(error));
  }
}
function* getDealFromDB({ payload }) {
  try {
    const data = yield call(getDealRequest, payload);
    yield delay(500);
    yield put(getSingleDealSuccess(data));
  } catch (error) {
    yield put(getDealFailure(error));
  }
}
function* getDealSummaryFromDB() {
  try {
    const data = yield call(getDealSummaryRequest);
    yield put(getDealSummarySuccess(data));
  } catch (error) {
    yield put(getDealSummaryFailure(error));
  }
}
function* postDealFromDB() {
  try {
    const getDealState = state => state.crmState.dealState.dealForm.deal;
    const deal = yield select(getDealState);
    const data = yield call(postDealRequest, deal);
    yield delay(800);
    yield put(submitDealSuccess(data));
  } catch (error) {
    yield put(submitDealError(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* changeViewWatcher() {
  yield takeEvery(CHANGE_DEAL_LIST_VIEW, changeDealList);
}
export function* getAllDealWatcher() {
  yield takeEvery(GET_ALL_DEAL, getAllDealFromDB);
}
export function* getSingleDealWatcher() {
  yield takeEvery(GET_SINGLE_DEAL, getDealFromDB);
}
export function* getDealSummaryWatcher() {
  yield takeEvery(GET_DEAL_SUMMARY, getDealSummaryFromDB);
}
export function* postDealWatcher() {
  yield takeEvery(SUBMIT_DEAL, postDealFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(changeViewWatcher),
    fork(getAllDealWatcher),
    fork(getSingleDealWatcher),
    fork(getDealSummaryWatcher),
    fork(postDealWatcher)
  ]);
}

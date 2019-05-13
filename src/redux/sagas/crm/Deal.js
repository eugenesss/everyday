import {
  all,
  call,
  fork,
  put,
  takeEvery,
  select,
  delay
} from "redux-saga/effects";
import { CHANGE_DEAL_LIST_VIEW, GET_ALL_DEAL } from "Types";
import { getDealSuccess, getDealFailure } from "Actions";

import api from "Api";

//=========================
// REQUESTS
//=========================
const getAllDealRequest = async () => {
  const result = [
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"],
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"],
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"],
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"]
  ];
  return result;
};
const getMyDealRequest = async () => {
  const result = [
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"],
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"],
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"],
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"]
  ];
  return result;
};
const getOpenDealRequest = async () => {
  const result = [
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"],
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"],
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"],
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"]
  ];
  return result;
};
const getClosedDealRequest = async () => {
  const result = [
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"],
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"],
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"],
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"]
  ];
  return result;
};
const getWonDealRequest = async () => {
  const result = [
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"],
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"],
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"],
    [1, 2, "All dal", "All ", "all deal", 30, "$100,000", "hello", "eheje"]
  ];
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
    yield put(getDealSuccess(data));
  } catch (error) {
    yield put(getDealFailure(error));
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

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([fork(changeViewWatcher), fork(getAllDealWatcher)]);
}

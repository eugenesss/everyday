import {
  all,
  call,
  fork,
  put,
  takeEvery,
  select,
  delay
} from "redux-saga/effects";
import { CHANGE_LEAD_LIST_VIEW, GET_ALL_LEAD, GET_SINGLE_LEAD } from "Types";
import { getLeadSuccess, getLeadFailure, getSingleLeadSuccess } from "Actions";

import api from "Api";

import { leadList, lead, lead2 } from "Components/DummyData";

//=========================
// REQUESTS
//=========================
const getAllLeadRequest = async () => {
  const result = leadList;
  return result;
};
const getMyLeadRequest = async () => {
  const result = leadList;
  return result;
};
const getOpenLeadRequest = async () => {
  const result = leadList;
  return result;
};
const getHotLeadRequest = async () => {
  const result = leadList;
  return result;
};
const getColdLeadRequest = async () => {
  const result = leadList;
  return result;
};
const getLeadRequest = async leadID => {
  console.log(`fetching lead ${leadID}`);
  const result = leadID == 1 ? lead : lead2;

  return result;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* changeLeadList({ payload }) {
  let data;
  try {
    if (payload == "All Leads") {
      // All Leads
      data = yield call(getAllLeadRequest);
      yield delay(500);
      yield put(getLeadSuccess(data));
    } else if (payload == "My Leads") {
      // My Leads
      data = yield call(getMyLeadRequest);
      yield delay(500);
      yield put(getLeadSuccess(data));
    } else if (payload == "Open Leads") {
      // Open Leads
      data = yield call(getOpenLeadRequest);
      yield delay(500);
      yield put(getLeadSuccess(data));
    } else if (payload == "Hot Leads") {
      // Hot Leads
      data = yield call(getHotLeadRequest);
      yield delay(500);
      yield put(getLeadSuccess(data));
    } else if (payload == "Cold Leads") {
      // Cold Leads
      data = yield call(getColdLeadRequest);
      yield delay(500);
      yield put(getLeadSuccess(data));
    } else {
      yield delay(500);
      data = yield call(getAllLeadRequest);
      yield put(getLeadSuccess(data));
    }
  } catch (error) {
    yield put(getLeadFailure(error));
  }
}
function* getAllLeadFromDB() {
  try {
    const data = yield call(getAllLeadRequest);
    yield delay(500);
    yield put(getLeadSuccess(data));
  } catch (error) {
    yield put(getLeadFailure(error));
  }
}
function* getLeadFromDB({ payload }) {
  try {
    const data = yield call(getLeadRequest, payload);
    yield delay(500);
    yield put(getSingleLeadSuccess(data));
  } catch (error) {
    yield put(getLeadFailure(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* changeViewWatcher() {
  yield takeEvery(CHANGE_LEAD_LIST_VIEW, changeLeadList);
}
export function* getAllLeadWatcher() {
  yield takeEvery(GET_ALL_LEAD, getAllLeadFromDB);
}
export function* getSingleLeadWatcher() {
  yield takeEvery(GET_SINGLE_LEAD, getLeadFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(changeViewWatcher),
    fork(getAllLeadWatcher),
    fork(getSingleLeadWatcher)
  ]);
}

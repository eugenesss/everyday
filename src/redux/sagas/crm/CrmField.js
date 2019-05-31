import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_LEAD_SOURCE, GET_LEAD_STATUS, GET_INDUSTRY } from "Types";
import {
  getCrmFieldFailure,
  getLeadSourceSuccess,
  getLeadStatusSuccess,
  getIndustrySuccess
} from "Actions";

import api from "Api";

//=========================
// REQUESTS
//=========================
const getLeadSourceRequest = async () => {
  const result = await api.get("/leadsources");
  return result.data;
};
const getLeadStatusRequest = async () => {
  const result = await api.get("/leadstatus");
  return result.data;
};
const getIndustryRequest = async () => {
  const result = await api.get("/leadindustries");
  return result.data;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getLeadSourceFromDB() {
  try {
    const data = yield call(getLeadSourceRequest);
    yield put(getLeadSourceSuccess(data));
  } catch (error) {
    yield put(getCrmFieldFailure(error));
  }
}
function* getLeadStatusFromDB() {
  try {
    const data = yield call(getLeadStatusRequest);
    yield put(getLeadStatusSuccess(data));
  } catch (error) {
    yield put(getCrmFieldFailure(error));
  }
}
function* getIndustryFromDB() {
  try {
    const data = yield call(getIndustryRequest);
    yield put(getIndustrySuccess(data));
  } catch (error) {
    yield put(getCrmFieldFailure(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getLeadSourceWatcher() {
  yield takeEvery(GET_LEAD_SOURCE, getLeadSourceFromDB);
}
export function* getLeadStatusWatcher() {
  yield takeEvery(GET_LEAD_STATUS, getLeadStatusFromDB);
}
export function* getIndustryWatcher() {
  yield takeEvery(GET_INDUSTRY, getIndustryFromDB);
}
//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(getLeadSourceWatcher),
    fork(getLeadStatusWatcher),
    fork(getIndustryWatcher)
  ]);
}

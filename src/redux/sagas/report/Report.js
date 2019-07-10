import { all, call, fork, put, takeEvery, delay } from "redux-saga/effects";
import {
  GET_DEALS_BY_OWNER,
  GET_DEALS_BY_TYPE,
  GET_DEALS_PIPELINE
} from "Types";
import {
  getReportFailure,
  getDealsByOwnerSuccess,
  getDealsByTypeSuccess,
  getDealsPipelineSuccess
} from "Actions";

import api from "Api";

//=========================
// REQUESTS
//=========================
const getDealsByOwnerRequest = async (start, end) => {
  // const result = await api.get("/accounts");
  // return result.data;
  console.log("---- getting report deals by owner");
  return {};
};
const getDealsByTypeRequest = async (start, end) => {
  console.log("---- getting deals by type");
  return {};
};
const getDealsPipelineRequest = async (start, end) => {
  console.log("------ getting deals pipeline");
  return {};
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getDealsByOwner({ payload }) {
  const { start, end } = payload;
  try {
    const data = yield call(getDealsByOwnerRequest, start, end);
    yield delay(500);
    yield put(getDealsByOwnerSuccess(data));
  } catch (error) {
    yield put(getReportFailure(error));
  }
}
function* getDealsByType({ payload }) {
  const { start, end } = payload;
  try {
    const data = yield call(getDealsByTypeRequest, start, end);
    yield delay(500);
    yield put(getDealsByTypeSuccess(data));
  } catch (error) {
    yield put(getReportFailure(error));
  }
}
function* getDealsPipeline({ payload }) {
  const { start, end } = payload;
  try {
    const data = yield call(getDealsPipelineRequest, start, end);
    yield delay(500);
    yield put(getDealsPipelineSuccess(data));
  } catch (error) {
    yield put(getReportFailure(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getDealsByOwnerWatcher() {
  yield takeEvery(GET_DEALS_BY_OWNER, getDealsByOwner);
}
export function* getDealsByTypeWatcher() {
  yield takeEvery(GET_DEALS_BY_TYPE, getDealsByType);
}
export function* getDealsPipelineWatcher() {
  yield takeEvery(GET_DEALS_PIPELINE, getDealsPipeline);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(getDealsByOwnerWatcher),
    fork(getDealsByTypeWatcher),
    fork(getDealsPipelineWatcher)
  ]);
}

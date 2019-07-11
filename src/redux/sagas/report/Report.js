import { all, call, fork, put, takeEvery, delay } from "redux-saga/effects";
import {
  GET_DEALS_BY_OWNER,
  GET_DEALS_BY_TYPE,
  GET_DEALS_PIPELINE,
  GET_LEADS_BY_STATUS,
  GET_LEADS_BY_OWNER,
  GET_LEADS_BY_SOURCE
} from "Types";
import {
  getReportFailure,
  getDealsByOwnerSuccess,
  getDealsByTypeSuccess,
  getDealsPipelineSuccess,
  getLeadsByStatusSuccess,
  getLeadsByOwnerSuccess,
  getLeadsBySourceSuccess
} from "Actions";

import api from "Api";

//=========================
// REQUESTS
//=========================
const getDealsByOwnerRequest = async (startDate, endDate) => {
  const result = await api.post("/deals/reports/dealsbyowner", {
    startDate,
    endDate
  });
  return result.data.data;
};
const getDealsByTypeRequest = async (startDate, endDate) => {
  const result = await api.post("/deals/reports/dealsbytype", {
    startDate,
    endDate
  });
  return result.data.data;
};
const getDealsPipelineRequest = async (startDate, endDate) => {
  const result = await api.post("/deals/reports/dealspipeline", {
    startDate,
    endDate
  });
  return result.data.data;
};
const getLeadsByStatusRequest = async (startDate, endDate) => {
  const result = await api.post("/leads/reports/leadsbystatus", {
    startDate,
    endDate
  });
  return result.data.data;
};
const getLeadsByOwnerRequest = async (startDate, endDate) => {
  const result = await api.post("/leads/reports/leadsbyowner", {
    startDate,
    endDate
  });
  return result.data.data;
};
const getLeadsBySourceRequest = async (startDate, endDate) => {
  const result = await api.post("/leads/reports/leadsbysource", {
    startDate,
    endDate
  });
  return result.data.data;
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
function* getLeadsByStatus({ payload }) {
  const { start, end } = payload;
  try {
    const data = yield call(getLeadsByStatusRequest, start, end);
    yield delay(500);
    yield put(getLeadsByStatusSuccess(data));
  } catch (error) {
    yield put(getReportFailure(error));
  }
}
function* getLeadsByOwner({ payload }) {
  const { start, end } = payload;
  try {
    const data = yield call(getLeadsByOwnerRequest, start, end);
    yield delay(500);
    yield put(getLeadsByOwnerSuccess(data));
  } catch (error) {
    yield put(getReportFailure(error));
  }
}
function* getLeadsBySource({ payload }) {
  const { start, end } = payload;
  try {
    const data = yield call(getLeadsBySourceRequest, start, end);
    yield delay(500);
    yield put(getLeadsBySourceSuccess(data));
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
export function* getLeadsByStatusWatcher() {
  yield takeEvery(GET_LEADS_BY_STATUS, getLeadsByStatus);
}
export function* getLeadsByOwnerWatcher() {
  yield takeEvery(GET_LEADS_BY_OWNER, getLeadsByOwner);
}
export function* getLeadsBySourceWatcher() {
  yield takeEvery(GET_LEADS_BY_SOURCE, getLeadsBySource);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(getDealsByOwnerWatcher),
    fork(getDealsByTypeWatcher),
    fork(getDealsPipelineWatcher),
    fork(getLeadsByStatusWatcher),
    fork(getLeadsByOwnerWatcher),
    fork(getLeadsBySourceWatcher)
  ]);
}

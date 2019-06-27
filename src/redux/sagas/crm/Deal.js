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
  SUBMIT_DEAL,
  ON_SUBMIT_NEW_STAGE,
  SUBMIT_EDIT_DEAL,
  DELETE_DEAL,
  ADD_NOTE_DEAL
} from "Types";
import {
  getDealSuccess,
  getDealFailure,
  getSingleDealSuccess,
  getDealSummarySuccess,
  getDealSummaryFailure,
  submitDealSuccess,
  submitDealError,
  newStageSuccess,
  newStageFailure,
  deleteDealSuccess,
  deleteDealFailure,
  addNoteDealSuccess,
  addNoteDealFailure
} from "Actions";

import api from "Api";

import { leadSummary } from "Components/DummyData";

//=========================
// REQUESTS
//=========================
const getAllDealRequest = async () => {
  const result = await api.get("/deals");
  return result.data;
};
const getOpenDealRequest = async () => {
  const result = await api.get("/deals");
  return result.data;
};
const getClosedDealRequest = async () => {
  const result = await api.get("/deals");
  return result.data;
};
const getWonDealRequest = async () => {
  const result = await api.get("/deals");
  return result.data;
};
const getDealRequest = async dealID => {
  const result = await api.get(`/deals/${dealID}`);
  return result.data;
};
const getDealSummaryRequest = async () => {
  const result = leadSummary;
  return result;
};
const postDealRequest = async deal => {
  const result = await api.post("/deals", deal);
  return result.data;
};
const postNewStageRequest = async payload => {
  const { dealID, stageID } = payload;
  const result = await api.post(`/deals/updateStage`, {
    dealID: dealID,
    stageID: stageID
  });
  return result.data.data;
};
const patchDealRequest = async deal => {
  const result = await api.patch(`/deals/${deal.id}`, deal);
  return result.data;
};
const deleteDealRequest = async id => {
  const result = await api.delete(`/deals/${id}`);
  return result.data;
};
const addNoteDealRequest = async (id, note) => {
  const result = await api.post(`/deals/${id}/notes`, note);
  return result.data;
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
function* postDealToDB() {
  try {
    const getDealState = state => state.crmState.dealState.dealForm.deal;
    const deal = yield select(getDealState);
    const data = yield call(postDealRequest, deal);
    yield delay(500);
    yield put(submitDealSuccess(data));
  } catch (error) {
    yield put(submitDealError(error));
  }
}
function* postStageToDB({ payload }) {
  try {
    const deal = yield call(postNewStageRequest, payload);
    yield delay(500);
    yield put(newStageSuccess(deal));
  } catch (error) {
    yield put(newStageFailure(error));
  }
}
function* patchDealToDB() {
  try {
    const getDealState = state => state.crmState.dealState.dealForm.deal;
    const deal = yield select(getDealState);
    const data = yield call(patchDealRequest, deal);
    yield delay(500);
    yield put(submitDealSuccess(data));
  } catch (error) {
    yield put(submitDealError(error));
  }
}
function* deleteDealFromDB({ payload }) {
  try {
    const deleteResult = yield call(deleteDealRequest, payload);
    yield delay(500);
    yield put(deleteDealSuccess(payload));
  } catch (error) {
    yield put(deleteDealFailure(error));
  }
}
function* addNoteDealToDB({ payload }) {
  const { id, note } = payload;
  try {
    const data = yield call(addNoteDealRequest, id, note);
    yield put(addNoteDealSuccess(data));
  } catch (error) {
    yield put(addNoteDealFailure(error));
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
  yield takeEvery(SUBMIT_DEAL, postDealToDB);
}
export function* updateDealStageWatcher() {
  yield takeEvery(ON_SUBMIT_NEW_STAGE, postStageToDB);
}
export function* patchDealWatcher() {
  yield takeEvery(SUBMIT_EDIT_DEAL, patchDealToDB);
}
export function* deleteDealWatcher() {
  yield takeEvery(DELETE_DEAL, deleteDealFromDB);
}
export function* addNoteDealWatcher() {
  yield takeEvery(ADD_NOTE_DEAL, addNoteDealToDB);
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
    fork(postDealWatcher),
    fork(updateDealStageWatcher),
    fork(patchDealWatcher),
    fork(deleteDealWatcher),
    fork(addNoteDealWatcher)
  ]);
}

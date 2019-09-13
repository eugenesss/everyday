import { all, call, fork, put, takeEvery, delay } from "redux-saga/effects";
import {
  CHANGE_DEAL_LIST_VIEW,
  GET_ALL_DEAL,
  GET_SINGLE_DEAL,
  GET_DEAL_SUMMARY,
  NEW_DEAL,
  ON_SUBMIT_NEW_STAGE,
  EDIT_DEAL,
  DELETE_DEAL,
  ADD_NOTE_DEAL,
  TRANSFER_DEAL,
  GET_DEAL_FORM_FIELDS
} from "Types";
import {
  getDealSuccess,
  getDealFailure,
  getSingleDealSuccess,
  getDealSummarySuccess,
  getDealSummaryFailure,
  newDealSuccess,
  newDealFailure,
  editDealSuccess,
  editDealFailure,
  newStageSuccess,
  newStageFailure,
  deleteDealSuccess,
  deleteDealFailure,
  addNoteDealSuccess,
  addNoteDealFailure,
  transferDealSuccess,
  transferDealFailure,
  getDealFormSuccess,
  getDealFormFailure
} from "Actions";

import { singleDeal } from "Helpers/url/crm";

import api from "Api";

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
  const result = [];
  return result;
};
const postDealRequest = async deal => {
  const result = await api.post("/deals", deal);
  return result.data;
};
const postNewStageRequest = async (dealID, stageID) => {
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
const transferDealRequest = async (id, newOwner) => {
  const result = await api.post(`/deals/transfer`, { dealIds: [id], newOwner });
  return result.data.updatedRecords[0];
};
const getDealFormFieldsRequest = async () => {
  const result = await api.get("/deals/formFields");
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
      yield put(getDealSuccess(data));
    } else if (payload == "Open Deals") {
      // Open Deals
      data = yield call(getOpenDealRequest);
      yield put(getDealSuccess(data));
    } else if (payload == "Closed Deals") {
      // Open Deals
      data = yield call(getClosedDealRequest);
      yield put(getDealSuccess(data));
    } else if (payload == "Won Deals") {
      // Open Deals
      data = yield call(getWonDealRequest);
      yield put(getDealSuccess(data));
    } else {
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
function* getDealFromDB({ payload }) {
  try {
    const data = yield call(getDealRequest, payload);
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
function* postDealToDB({ payload }) {
  const { form, redirect, history } = payload;
  try {
    const data = yield call(postDealRequest, form);
    yield delay(500);
    if (redirect) history.push(singleDeal(data.id));
    yield put(newDealSuccess(data));
  } catch (error) {
    yield put(newDealFailure(error));
  }
}
function* postStageToDB({ payload }) {
  const { dealID, stageID } = payload;
  try {
    const deal = yield call(postNewStageRequest, dealID, stageID);
    yield delay(500);
    yield put(newStageSuccess(deal));
  } catch (error) {
    yield put(newStageFailure(error));
  }
}
function* patchDealToDB({ payload }) {
  try {
    const data = yield call(patchDealRequest, payload);
    yield delay(500);
    yield put(editDealSuccess(data));
  } catch (error) {
    yield put(editDealFailure(error));
  }
}
function* deleteDealFromDB({ payload }) {
  try {
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
function* transferDealInDB({ payload }) {
  const { id, newOwner } = payload;
  try {
    const data = yield call(transferDealRequest, id, newOwner);
    window.location.replace(singleDeal(data.id));
    yield delay(500);
    yield put(transferDealSuccess(data));
  } catch (error) {
    yield put(transferDealFailure(error));
  }
}
function* getDealFormFieldsFromDB() {
  try {
    const data = yield call(getDealFormFieldsRequest);
    yield put(getDealFormSuccess(data));
  } catch (error) {
    yield put(getDealFormFailure(error));
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
  yield takeEvery(NEW_DEAL, postDealToDB);
}
export function* updateDealStageWatcher() {
  yield takeEvery(ON_SUBMIT_NEW_STAGE, postStageToDB);
}
export function* patchDealWatcher() {
  yield takeEvery(EDIT_DEAL, patchDealToDB);
}
export function* deleteDealWatcher() {
  yield takeEvery(DELETE_DEAL, deleteDealFromDB);
}
export function* addNoteDealWatcher() {
  yield takeEvery(ADD_NOTE_DEAL, addNoteDealToDB);
}
export function* transferDealWatcher() {
  yield takeEvery(TRANSFER_DEAL, transferDealInDB);
}
export function* getDealFormFieldsWatcher() {
  yield takeEvery(GET_DEAL_FORM_FIELDS, getDealFormFieldsFromDB);
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
    fork(addNoteDealWatcher),
    fork(transferDealWatcher),
    fork(getDealFormFieldsWatcher)
  ]);
}

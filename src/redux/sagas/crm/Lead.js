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
  CHANGE_LEAD_LIST_VIEW,
  GET_ALL_LEAD,
  GET_SINGLE_LEAD,
  GET_LEAD_SUMMARY,
  SUBMIT_NEW_LEAD,
  CONVERT_LEAD,
  SUBMIT_EDIT_LEAD,
  DELETE_LEAD
} from "Types";
import {
  getLeadSuccess,
  getLeadFailure,
  getSingleLeadSuccess,
  getLeadSummarySuccess,
  getLeadSummaryFailure,
  newLeadSuccess,
  newLeadError,
  convertLeadSuccess,
  convertLeadFailure,
  deleteLeadSuccess,
  deleteLeadFailure
} from "Actions";

import api from "Api";

import { leadSummary } from "Components/DummyData";

//=========================
// REQUESTS
//=========================
const getAllLeadRequest = async () => {
  const result = await api.get("/leads");
  return result.data;
};
const getMyLeadRequest = async () => {
  const result = await api.get("/leads");
  return result.data;
};
const getOpenLeadRequest = async () => {
  const result = await api.get("/leads");
  return result.data;
};
const getHotLeadRequest = async () => {
  const result = await api.get("/leads");
  return result.data;
};
const getColdLeadRequest = async () => {
  const result = await api.get("/leads");
  return result.data;
};
const getLeadRequest = async leadID => {
  const result = await api.get(`/leads/${leadID}`);
  return result.data;
};
const getLeadSummaryRequest = async () => {
  const result = leadSummary;
  return result;
};
const postLeadRequest = async lead => {
  const result = await api.post("/leads", lead);
  return result.data;
};
const convertLeadRequest = async data => {
  const result = await api.post(`/leads/convert/${data.leadID}`, {
    dealDetails: data.dealDetails
  });
  return result.data;
};
const editLeadRequest = async lead => {
  const result = await api.patch(`/leads/${lead.id}`, lead);
  return result.data;
};
const deleteLeadRequest = async id => {
  const result = await api.delete(`/leads/${id}`);
  return result.data;
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
function* getLeadSummaryFromDB() {
  try {
    const data = yield call(getLeadSummaryRequest);
    yield put(getLeadSummarySuccess(data));
  } catch (error) {
    yield put(getLeadSummaryFailure(error));
  }
}
function* postLeadToDB() {
  try {
    const getLeadState = state => state.crmState.leadState.leadForm.lead;
    const lead = yield select(getLeadState);
    const data = yield call(postLeadRequest, lead);
    yield delay(500);
    yield put(newLeadSuccess(data));
  } catch (error) {
    yield put(newLeadError(error));
  }
}
function* convertLeadToDB({ payload }) {
  try {
    const getDealDetail = state =>
      state.crmState.leadState.leadToConvert.dealDetails;
    const dealDetails = yield select(getDealDetail);
    const leadID = payload;
    const id = { dealDetails, leadID };
    const data = yield call(convertLeadRequest, id);
    yield delay(500);
    yield put(convertLeadSuccess(data));
  } catch (error) {
    yield put(convertLeadFailure(error));
  }
}
function* editLeadToDB() {
  try {
    const getLeadState = state => state.crmState.leadState.leadForm.lead;
    const lead = yield select(getLeadState);
    const data = yield call(editLeadRequest, lead);
    yield delay(500);
    yield put(newLeadSuccess(data));
  } catch (error) {
    yield put(newLeadError(error));
  }
}
function* deleteLeadFromDB({ payload }) {
  try {
    const deleteResult = yield call(deleteLeadRequest, payload);
    yield delay(500);
    yield put(deleteLeadSuccess(payload));
  } catch (error) {
    yield put(deleteLeadFailure(error));
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
export function* getLeadSummaryWatcher() {
  yield takeEvery(GET_LEAD_SUMMARY, getLeadSummaryFromDB);
}
export function* postLeadWatcher() {
  yield takeEvery(SUBMIT_NEW_LEAD, postLeadToDB);
}
export function* convertLeadWatcher() {
  yield takeEvery(CONVERT_LEAD, convertLeadToDB);
}
export function* editLeadWatcher() {
  yield takeEvery(SUBMIT_EDIT_LEAD, editLeadToDB);
}
export function* deleteLeadWatcher() {
  yield takeEvery(DELETE_LEAD, deleteLeadFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(changeViewWatcher),
    fork(getAllLeadWatcher),
    fork(getSingleLeadWatcher),
    fork(getLeadSummaryWatcher),
    fork(postLeadWatcher),
    fork(convertLeadWatcher),
    fork(editLeadWatcher),
    fork(deleteLeadWatcher)
  ]);
}

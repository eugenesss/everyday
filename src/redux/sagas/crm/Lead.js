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
  DELETE_LEAD,
  ADD_NOTE_LEAD,
  CHECK_ACCOUNT_EXIST,
  TRANSFER_LEAD
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
  deleteLeadFailure,
  addNoteLeadSuccess,
  addNoteLeadFailure,
  checkAccountExistSuccess,
  checkAccountExistFailure,
  transferLeadSuccess,
  transferLeadFailure
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
const convertLeadRequest = async (id, dealDetails, accountId) => {
  const result = await api.post(`/leads/convert/${id}`, {
    dealDetails: dealDetails,
    existingAccountId: accountId
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
const addNoteLeadRequest = async (id, note) => {
  const result = await api.post(`/leads/${id}/notes`, note);
  return result.data;
};
const checkAccountRequest = async companyName => {
  const result = await api.post(`/accounts/accountExist`, {
    accountName: companyName
  });
  return result.data;
};
const transferLeadRequest = async (id, newOwner) => {
  const result = await api.post(`/leads/transfer`, { leadIds: [id], newOwner });
  return result.data.updatedRecords[0];
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
  const { id, dealDetails, accountId } = payload;
  try {
    const data = yield call(convertLeadRequest, id, dealDetails, accountId);
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
    yield call(deleteLeadRequest, payload);
    yield delay(500);
    yield put(deleteLeadSuccess(payload));
  } catch (error) {
    yield put(deleteLeadFailure(error));
  }
}
function* addLeadNoteToDB({ payload }) {
  const { id, note } = payload;
  try {
    const data = yield call(addNoteLeadRequest, id, note);
    yield put(addNoteLeadSuccess(data));
  } catch (error) {
    yield put(addNoteLeadFailure(error));
  }
}
function* checkAccountFromDB({ payload }) {
  try {
    const data = yield call(checkAccountRequest, payload);
    yield put(checkAccountExistSuccess(data.count, data.data));
  } catch (error) {
    yield put(checkAccountExistFailure(error));
  }
}
function* transferLeadToDB({ payload }) {
  const { id, newOwner } = payload;
  try {
    const data = yield call(transferLeadRequest, id, newOwner);
    window.location.replace(`/app/crm/leads/${data.id}`);
    yield delay(500);
    yield put(transferLeadSuccess(data));
  } catch (error) {
    yield put(transferLeadFailure(error));
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
export function* addNoteLeadWatcher() {
  yield takeEvery(ADD_NOTE_LEAD, addLeadNoteToDB);
}
export function* checkAccountExistWatcher() {
  yield takeEvery(CHECK_ACCOUNT_EXIST, checkAccountFromDB);
}
export function* transferLeadWatcher() {
  yield takeEvery(TRANSFER_LEAD, transferLeadToDB);
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
    fork(deleteLeadWatcher),
    fork(addNoteLeadWatcher),
    fork(checkAccountExistWatcher),
    fork(transferLeadWatcher)
  ]);
}

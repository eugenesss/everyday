import { all, call, fork, put, takeEvery, delay } from "redux-saga/effects";
import {
  CHANGE_ACCOUNT_LIST_VIEW,
  GET_ALL_ACCOUNT,
  GET_SINGLE_ACCOUNT,
  NEW_ACCOUNT,
  EDIT_ACCOUNT,
  ADD_NOTE_ACCOUNT,
  DELETE_ACCOUNT,
  SET_ACCOUNT_ACTIVE,
  TRANSFER_ACCOUNT
} from "Types";
import {
  getAccountFailure,
  getAccountSuccess,
  getSingleAccountSuccess,
  newAccountSuccess,
  newAccountFailure,
  editAccountSuccess,
  editAccountFailure,
  deleteAccountSuccess,
  deleteAccountFailure,
  addNoteAccountSuccess,
  addNoteAccountFailure,
  setAccountActiveSuccess,
  setAccountActiveFailure,
  transferAccountSuccess,
  transferAccountFailure
} from "Actions";
import { singleAccount } from "Helpers/url/crm";

import api from "Api";

//=========================
// REQUESTS
//=========================
const getAllAccountRequest = async () => {
  const result = await api.get("/accounts");
  return result.data;
};
const getActiveAccountRequest = async () => {
  const result = await api.get("/accounts");
  return result.data;
};
const getInactiveAccountRequest = async () => {
  const result = await api.get("/accounts");
  return result.data;
};
const getAccountRequest = async acctID => {
  const result = await api.get(`/accounts/${acctID}`);
  return result.data;
};
const postAccountRequest = async acct => {
  const result = await api.post("/accounts", acct);
  return result.data;
};
const patchAccountRequest = async acct => {
  const result = await api.patch(`/accounts/${acct.id}`, acct);
  return result.data;
};
const deleteAccountRequest = async id => {
  const result = await api.delete(`/accounts/${id}`);
  return result.data;
};
const addNoteAccountRequest = async (id, note) => {
  const result = await api.post(`/accounts/${id}/notes`, note);
  return result.data;
};
const setAccountActiveRequest = async (id, status) => {
  const result = await api.patch(`/accounts/${id}`, { isActive: status });
  return result.data;
};
const transferAccountRequest = async (id, newOwner) => {
  const result = await api.post("/accounts/transfer", {
    acctIds: [id],
    newOwner
  });
  return result.data.updatedRecords[0];
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* changeAccountList({ payload }) {
  let data;
  try {
    if (payload == "All Accounts") {
      // All Accounts
      data = yield call(getAllAccountRequest);
      yield delay(500);
      yield put(getAccountSuccess(data));
    } else if (payload == "Active Accounts") {
      // My Accounts
      data = yield call(getActiveAccountRequest);
      yield delay(500);
      yield put(getAccountSuccess(data));
    } else if (payload == "Inactive Accounts") {
      // Open Accounts
      data = yield call(getInactiveAccountRequest);
      yield delay(500);
      yield put(getAccountSuccess(data));
    } else {
      yield delay(500);
      data = yield call(getAllAccountRequest);
      yield put(getAccountSuccess(data));
    }
  } catch (error) {
    yield put(getAccountFailure(error));
  }
}
function* getAllAccountFromDB() {
  try {
    const data = yield call(getAllAccountRequest);
    yield delay(500);
    yield put(getAccountSuccess(data));
  } catch (error) {
    yield put(getAccountFailure(error));
  }
}
function* getAccountFromDB({ payload }) {
  try {
    const data = yield call(getAccountRequest, payload);
    yield delay(500);
    yield put(getSingleAccountSuccess(data));
  } catch (error) {
    yield put(getAccountFailure(error));
  }
}
function* postAccountToDB({ payload }) {
  try {
    const data = yield call(postAccountRequest, payload);
    yield delay(500);
    yield put(newAccountSuccess(data));
  } catch (error) {
    yield put(newAccountFailure(error));
  }
}
function* patchAccountToDB({ payload }) {
  try {
    const data = yield call(patchAccountRequest, payload);
    yield delay(500);
    yield put(editAccountSuccess(data));
  } catch (error) {
    yield put(editAccountFailure(error));
  }
}
function* deleteAccountFromDB({ payload }) {
  try {
    yield call(deleteAccountRequest, payload);
    yield delay(500);
    yield put(deleteAccountSuccess(payload));
  } catch (error) {
    let errorMessage;
    if (error.response) {
      errorMessage = error.response.data.error;
    } else {
      errorMessage = error;
    }
    yield put(deleteAccountFailure(errorMessage));
  }
}
function* addNoteAccountToDB({ payload }) {
  const { id, note } = payload;
  try {
    const data = yield call(addNoteAccountRequest, id, note);
    yield put(addNoteAccountSuccess(data));
  } catch (error) {
    yield put(addNoteAccountFailure(error));
  }
}
function* setAccountActiveToDB({ payload }) {
  const { id, status } = payload;
  try {
    const data = yield call(setAccountActiveRequest, id, status);
    yield delay(500);
    yield put(setAccountActiveSuccess(data));
  } catch (error) {
    yield put(setAccountActiveFailure(error));
  }
}
function* transferAccountInDB({ payload }) {
  const { id, newOwner } = payload;
  try {
    const data = yield call(transferAccountRequest, id, newOwner);
    window.location.replace(singleAccount(data.id));
    yield delay(500);
    yield put(transferAccountSuccess(data));
  } catch (error) {
    yield put(transferAccountFailure(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* changeViewWatcher() {
  yield takeEvery(CHANGE_ACCOUNT_LIST_VIEW, changeAccountList);
}
export function* getAllAccountWatcher() {
  yield takeEvery(GET_ALL_ACCOUNT, getAllAccountFromDB);
}
export function* getSingleAccountWatcher() {
  yield takeEvery(GET_SINGLE_ACCOUNT, getAccountFromDB);
}
export function* postAccountWatcher() {
  yield takeEvery(NEW_ACCOUNT, postAccountToDB);
}
export function* patchAccountWatcher() {
  yield takeEvery(EDIT_ACCOUNT, patchAccountToDB);
}
export function* deleteAccounttWatcher() {
  yield takeEvery(DELETE_ACCOUNT, deleteAccountFromDB);
}
export function* addNoteAccountWatcher() {
  yield takeEvery(ADD_NOTE_ACCOUNT, addNoteAccountToDB);
}
export function* setAccountActiveWatcher() {
  yield takeEvery(SET_ACCOUNT_ACTIVE, setAccountActiveToDB);
}
export function* transferAccountWatcher() {
  yield takeEvery(TRANSFER_ACCOUNT, transferAccountInDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(changeViewWatcher),
    fork(getAllAccountWatcher),
    fork(getSingleAccountWatcher),
    fork(postAccountWatcher),
    fork(patchAccountWatcher),
    fork(deleteAccounttWatcher),
    fork(addNoteAccountWatcher),
    fork(setAccountActiveWatcher),
    fork(transferAccountWatcher)
  ]);
}

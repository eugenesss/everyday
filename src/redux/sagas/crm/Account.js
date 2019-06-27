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
  CHANGE_ACCOUNT_LIST_VIEW,
  GET_ALL_ACCOUNT,
  GET_SINGLE_ACCOUNT,
  SUBMIT_ACCOUNT,
  SUBMIT_EDIT_ACCOUNT,
  ADD_NOTE_ACCOUNT,
  SET_ACCOUNT_ACTIVE
} from "Types";
import {
  getAccountFailure,
  getAccountSuccess,
  getSingleAccountSuccess,
  submitAccountSuccess,
  submitAccountError,
  addNoteAccountSuccess,
  addNoteAccountFailure,
  setAccountActiveSuccess,
  setAccountActiveFailure
} from "Actions";

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
const addNoteAccountRequest = async (id, note) => {
  const result = await api.post(`/accounts/${id}/notes`, note);
  return result.data;
};
const setAccountActiveRequest = async (id, status) => {
  const result = await api.patch(`/accounts/${id}`, { isActive: status });
  return result.data;
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
function* postAccountToDB() {
  try {
    const getAcctState = state =>
      state.crmState.accountState.accountForm.account;
    const acct = yield select(getAcctState);
    const data = yield call(postAccountRequest, acct);
    yield delay(500);
    yield put(submitAccountSuccess(data));
  } catch (error) {
    yield put(submitAccountError(error));
  }
}
function* patchAccountToDB() {
  try {
    const getAcctState = state =>
      state.crmState.accountState.accountForm.account;
    const acct = yield select(getAcctState);
    const data = yield call(patchAccountRequest, acct);
    yield delay(500);
    yield put(submitAccountSuccess(data));
  } catch (error) {
    yield put(submitAccountError(error));
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
  yield takeEvery(SUBMIT_ACCOUNT, postAccountToDB);
}
export function* patchAccountWatcher() {
  yield takeEvery(SUBMIT_EDIT_ACCOUNT, patchAccountToDB);
}
export function* addNoteAccountWatcher() {
  yield takeEvery(ADD_NOTE_ACCOUNT, addNoteAccountToDB);
}
export function* setAccountActiveWatcher() {
  yield takeEvery(SET_ACCOUNT_ACTIVE, setAccountActiveToDB);
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
    fork(addNoteAccountWatcher),
    fork(setAccountActiveWatcher)
  ]);
}

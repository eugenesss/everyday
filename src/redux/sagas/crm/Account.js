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
  SUBMIT_ACCOUNT
} from "Types";
import {
  getAccountFailure,
  getAccountSuccess,
  getSingleAccountSuccess,
  submitAccountSuccess,
  submitAccountError
} from "Actions";

import api from "Api";

import { accountList, account, custSummary } from "Components/DummyData";

//=========================
// REQUESTS
//=========================
const getAllAccountRequest = async () => {
  const result = accountList;
  return result;
};
const getMyAccountRequest = async () => {
  const result = accountList;
  return result;
};
const getOpenAccountRequest = async () => {
  const result = accountList;
  return result;
};
const getAccountRequest = async acctID => {
  console.log(`fetching ${acctID}`);
  const result = account;
  return result;
};
const postAccountRequest = async acct => {
  console.log(acct);
  const result = {};
  return result;
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
    } else if (payload == "My Accounts") {
      // My Accounts
      data = yield call(getMyAccountRequest);
      yield delay(500);
      yield put(getAccountSuccess(data));
    } else if (payload == "Open Accounts") {
      // Open Accounts
      data = yield call(getOpenAccountRequest);
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
    yield delay(800);
    yield put(submitAccountSuccess(data));
  } catch (error) {
    yield put(submitAccountError(error));
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

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(changeViewWatcher),
    fork(getAllAccountWatcher),
    fork(getSingleAccountWatcher),
    fork(postAccountWatcher)
  ]);
}

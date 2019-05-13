import {
  all,
  call,
  fork,
  put,
  takeEvery,
  select,
  delay
} from "redux-saga/effects";
import { CHANGE_ACCOUNT_LIST_VIEW, GET_ALL_ACCOUNT } from "Types";
import { getAccountSuccess, getAccountFailure } from "Actions";

import api from "Api";

//=========================
// REQUESTS
//=========================
const getAllAccountRequest = async () => {
  const result = [
    ["All account", "All ", "Minneapolis", 30, "$100,000", "hello", "eheje"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
    ["Frankie Parry", "Agency Legal", "Jacksonville", 71, "$210,000"]
  ];
  return result;
};
const getMyAccountRequest = async () => {
  const result = [
    ["My account", "My account", "singapore", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
  ];
  return result;
};
const getOpenAccountRequest = async () => {
  const result = [
    ["Open account", "Open account", "singapore", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
  ];
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
    yield put(getAccountSuccess(data));
  } catch (error) {
    yield put(getAccountFailure(error));
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

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([fork(changeViewWatcher), fork(getAllAccountWatcher)]);
}

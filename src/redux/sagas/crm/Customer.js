import {
  all,
  call,
  fork,
  put,
  takeEvery,
  select,
  delay
} from "redux-saga/effects";
import { CHANGE_CUSTOMER_LIST_VIEW, GET_ALL_CUSTOMER } from "Types";
import { getCustomerSuccess, getCustomerFailure } from "Actions";

import api from "Api";

//=========================
// REQUESTS
//=========================
const getAllCustomerRequest = async () => {
  const result = [
    ["All Lead", "All Lead", "Minneapolis", 30, "$100,000", "hello", "eheje"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
    ["Frankie Parry", "Agency Legal", "Jacksonville", 71, "$210,000"]
  ];
  return result;
};
const getMyCustomerRequest = async () => {
  const result = [
    ["My Lead", "My Lead", "singapore", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
  ];
  return result;
};
const getOpenCustomerRequest = async () => {
  const result = [
    ["Open Lead", "Open Lead", "singapore", 30, "$100,000"],
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
function* changeCustomerList({ payload }) {
  let data;
  try {
    if (payload == "All Customers") {
      // All Customers
      data = yield call(getAllCustomerRequest);
      yield delay(500);
      yield put(getCustomerSuccess(data));
    } else if (payload == "My Customers") {
      // My Customers
      data = yield call(getMyCustomerRequest);
      yield delay(500);
      yield put(getCustomerSuccess(data));
    } else if (payload == "Open Customers") {
      // Open Customers
      data = yield call(getOpenCustomerRequest);
      yield delay(500);
      yield put(getCustomerSuccess(data));
    } else {
      yield delay(500);
      data = yield call(getAllCustomerRequest);
      yield put(getCustomerSuccess(data));
    }
  } catch (error) {
    yield put(getCustomerFailure(error));
  }
}
function* getAllCustomerFromDB() {
  try {
    const data = yield call(getAllCustomerRequest);
    yield put(getCustomerSuccess(data));
  } catch (error) {
    yield put(getCustomerFailure(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* changeViewWatcher() {
  yield takeEvery(CHANGE_CUSTOMER_LIST_VIEW, changeCustomerList);
}
export function* getAllCustomerWatcher() {
  yield takeEvery(GET_ALL_CUSTOMER, getAllCustomerFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([fork(changeViewWatcher), fork(getAllCustomerWatcher)]);
}

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
  CHANGE_CUSTOMER_LIST_VIEW,
  GET_ALL_CUSTOMER,
  GET_SINGLE_CUSTOMER
} from "Types";
import {
  getCustomerFailure,
  getCustomerSuccess,
  getSingleCustomerSuccess
} from "Actions";

import api from "Api";

import { customerList, cust, cust2 } from "Components/DummyData";

//=========================
// REQUESTS
//=========================
const getAllCustomerRequest = async () => {
  const result = customerList;
  return result;
};
const getMyCustomerRequest = async () => {
  const result = customerList;
  return result;
};
const getOpenCustomerRequest = async () => {
  const result = customerList;
  return result;
};
const getCustomerRequest = async custID => {
  console.log(`fetching ${custID}`);
  const result = custID == 1 ? cust : cust2;
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
function* getCustomerFromDB({ payload }) {
  try {
    const data = yield call(getCustomerRequest, payload);
    yield put(getSingleCustomerSuccess(data));
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
export function* getSingleCustomerWatcher() {
  yield takeEvery(GET_SINGLE_CUSTOMER, getCustomerFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(changeViewWatcher),
    fork(getAllCustomerWatcher),
    fork(getSingleCustomerWatcher)
  ]);
}

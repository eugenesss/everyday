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
  GET_SINGLE_CUSTOMER,
  SUBMIT_CUSTOMER
} from "Types";
import {
  getCustomerFailure,
  getCustomerSuccess,
  getSingleCustomerSuccess,
  submitCustomerSuccess,
  submitCustomerError
} from "Actions";

import api from "Api";

//=========================
// REQUESTS
//=========================
const getAllCustomerRequest = async () => {
  const result = await api.get("/customers");
  return result.data;
};
const getMyCustomerRequest = async () => {
  const result = await api.get("/customers");
  return result.data;
};
const getOpenCustomerRequest = async () => {
  const result = await api.get("/customers");
  return result.data;
};
const getCustomerRequest = async custID => {
  const result = await api.get(`/customers/${custID}`);
  return result.data;
};
const postCustomerRequest = async cust => {
  const result = await api.post("/customers", cust);
  return result.data;
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
    yield delay(500);
    yield put(getCustomerSuccess(data));
  } catch (error) {
    yield put(getCustomerFailure(error));
  }
}
function* getCustomerFromDB({ payload }) {
  try {
    const data = yield call(getCustomerRequest, payload);
    yield delay(500);
    yield put(getSingleCustomerSuccess(data));
  } catch (error) {
    yield put(getCustomerFailure(error));
  }
}
function* postCustomerToDB() {
  try {
    const getCustState = state =>
      state.crmState.customerState.customerForm.customer;
    const cust = yield select(getCustState);
    const data = yield call(postCustomerRequest, cust);
    yield delay(800);
    yield put(submitCustomerSuccess(data));
  } catch (error) {
    yield put(submitCustomerError(error));
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
export function* postCustomerWatcher() {
  yield takeEvery(SUBMIT_CUSTOMER, postCustomerToDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(changeViewWatcher),
    fork(getAllCustomerWatcher),
    fork(getSingleCustomerWatcher),
    fork(postCustomerWatcher)
  ]);
}

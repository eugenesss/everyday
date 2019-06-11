import { all, call, fork, put, takeEvery, delay } from "redux-saga/effects";
import {
  CHANGE_PAYMENT_LIST_VIEW,
  GET_ALL_PAYMENT,
  GET_SINGLE_PAYMENT
} from "Types";
import {
  getPaymentSuccess,
  getPaymentFailure,
  getSinglePaymentSuccess
} from "Actions";

import api from "Api";

import { creditNote } from "Components/DummyData";

const PaymentList = [];

//=========================
// REQUESTS
//=========================
const getAllPaymentRequest = async () => {
  const result = [];
  return result;
};
const getMyPaymentRequest = async () => {
  const result = PaymentList;
  return result;
};
const getOpenPaymentRequest = async () => {
  const result = PaymentList;
  return result;
};
const getClosedPaymentRequest = async () => {
  const result = PaymentList;
  return result;
};
const getPaymentRequest = async paymentID => {
  console.log(`fetching ${paymentID}`);
  const result = creditNote;
  return result;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* changePaymentList({ payload }) {
  let data;
  try {
    if (payload == "All Credit Notes") {
      // All Credit Notes
      yield delay(500);
      data = yield call(getAllPaymentRequest);
      yield put(getPaymentSuccess(data));
    } else if (payload == "My Credit Notes") {
      // My Credit Notes
      data = yield call(getMyPaymentRequest);
      yield delay(500);
      yield put(getPaymentSuccess(data));
    } else if (payload == "Open Credit Notes") {
      // Open Credit Notes
      data = yield call(getOpenPaymentRequest);
      yield delay(500);
      yield put(getPaymentSuccess(data));
    } else if (payload == "Closed Credit Notes") {
      // Closed Credit Notes
      data = yield call(getClosedPaymentRequest);
      yield delay(500);
      yield put(getPaymentSuccess(data));
    } else {
      yield delay(500);
      data = yield call(getAllPaymentRequest);
      yield put(getPaymentSuccess(data));
    }
  } catch (error) {
    yield put(getPaymentFailure(error));
  }
}
function* getAllPaymentFromDB() {
  try {
    const data = yield call(getAllPaymentRequest);
    yield delay(500);
    yield put(getPaymentSuccess(data));
  } catch (error) {
    yield put(getPaymentFailure(error));
  }
}
function* getPaymentFromDB({ payload }) {
  try {
    const data = yield call(getPaymentRequest, payload);
    yield delay(500);
    yield put(getSinglePaymentSuccess(data));
  } catch (error) {
    yield put(getPaymentFailure(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* changeViewWatcher() {
  yield takeEvery(CHANGE_PAYMENT_LIST_VIEW, changePaymentList);
}
export function* getAllPaymentWatcher() {
  yield takeEvery(GET_ALL_PAYMENT, getAllPaymentFromDB);
}
export function* getSinglePaymentWatcher() {
  yield takeEvery(GET_SINGLE_PAYMENT, getPaymentFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(changeViewWatcher),
    fork(getAllPaymentWatcher),
    fork(getSinglePaymentWatcher)
  ]);
}

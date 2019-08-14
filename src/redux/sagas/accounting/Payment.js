import { all, call, fork, put, takeEvery, delay } from "redux-saga/effects";
import * as types from "Types";
import * as actions from "Actions";

import api from "Api";

import { creditNote } from "Components/DummyData";

const PaymentList = [];

//=========================
// REQUESTS
//=========================


const makePaymentRequest = async data => {
  console.log(`makePaymentRequest`);

  let item = {...data}
  item.paidAmount = parseInt(item.paidAmount.split('$')[1]) 
  console.log(item)

  const result = await api.post("/accountreconciles", item); 
  return result.data;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================

function* makePaymentFromDB({ payload }) {
  try {
    const data = yield call(makePaymentRequest, payload);
    yield delay(500);
    yield put(actions.makePaymentSuccess(data));
  } catch (error) {
    yield put(actions.makePaymentFailure(error));
  }
}
//=======================
// WATCHER FUNCTIONS
//=======================

export function* makePaymentWatcher() {
  yield takeEvery(types.MAKE_PAYMENT, makePaymentFromDB);
}


//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(makePaymentWatcher)
  ]);
}

import { all, call, fork, put, takeEvery, delay } from "redux-saga/effects";
import {
  CHANGE_CREDIT_NOTE_LIST_VIEW,
  GET_ALL_CREDIT_NOTE,
  GET_SINGLE_CREDIT_NOTE
} from "Types";
import {
  getCreditNoteSuccess,
  getCreditNoteFailure,
  getSingleCreditNoteSuccess
} from "Actions";

import api from "Api";

//=========================
// REQUESTS
//=========================
// const getAllCreditNoteRequest = async () => {
//   const result = creditNoteList;
//   return result;
// };
// const getMyCreditNoteRequest = async () => {
//   const result = creditNoteList;
//   return result;
// };
// const getOpenCreditNoteRequest = async () => {
//   const result = creditNoteList;
//   return result;
// };
// const getClosedCreditNoteRequest = async () => {
//   const result = creditNoteList;
//   return result;
// };
// const getCreditNoteRequest = async credID => {
//   console.log(`fetching ${credID}`);
//   const result = creditNote;
//   return result;
// };

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* changeCreditNoteList({ payload }) {
  let data;
  try {
    if (payload == "All Credit Notes") {
      // All Credit Notes
      yield delay(500);
      data = yield call(getAllCreditNoteRequest);
      yield put(getCreditNoteSuccess(data));
    } else if (payload == "My Credit Notes") {
      // My Credit Notes
      data = yield call(getMyCreditNoteRequest);
      yield delay(500);
      yield put(getCreditNoteSuccess(data));
    } else if (payload == "Open Credit Notes") {
      // Open Credit Notes
      data = yield call(getOpenCreditNoteRequest);
      yield delay(500);
      yield put(getCreditNoteSuccess(data));
    } else if (payload == "Closed Credit Notes") {
      // Closed Credit Notes
      data = yield call(getClosedCreditNoteRequest);
      yield delay(500);
      yield put(getCreditNoteSuccess(data));
    } else {
      yield delay(500);
      data = yield call(getAllCreditNoteRequest);
      yield put(getCreditNoteSuccess(data));
    }
  } catch (error) {
    yield put(getCreditNoteFailure(error));
  }
}
function* getAllCreditNoteFromDB() {
  try {
    const data = yield call(getAllCreditNoteRequest);
    yield delay(500);
    yield put(getCreditNoteSuccess(data));
  } catch (error) {
    yield put(getCreditNoteFailure(error));
  }
}
function* getCreditNoteFromDB({ payload }) {
  try {
    const data = yield call(getCreditNoteRequest, payload);
    yield delay(500);
    yield put(getSingleCreditNoteSuccess(data));
  } catch (error) {
    yield put(getCreditNoteFailure(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* changeViewWatcher() {
  yield takeEvery(CHANGE_CREDIT_NOTE_LIST_VIEW, changeCreditNoteList);
}
export function* getAllCreditNoteWatcher() {
  yield takeEvery(GET_ALL_CREDIT_NOTE, getAllCreditNoteFromDB);
}
export function* getSingleCreditNoteWatcher() {
  yield takeEvery(GET_SINGLE_CREDIT_NOTE, getCreditNoteFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(changeViewWatcher),
    fork(getAllCreditNoteWatcher),
    fork(getSingleCreditNoteWatcher)
  ]);
}

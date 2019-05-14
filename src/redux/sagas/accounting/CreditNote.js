import {
  all,
  call,
  fork,
  put,
  takeEvery,
  select,
  delay
} from "redux-saga/effects";
import { CHANGE_CREDIT_NOTE_LIST_VIEW, GET_ALL_CREDIT_NOTE } from "Types";
import { getCreditNoteSuccess, getCreditNoteFailure } from "Actions";

import api from "Api";

//=========================
// REQUESTS
//=========================
const getAllCreditNoteRequest = async () => {
  const result = [
    ["All Quote", "All Quote", "Minneapolis", 30, "$100,000", "hello", "eheje"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
    ["Frankie Parry", "Agency Legal", "Jacksonville", 71, "$210,000"]
  ];
  return result;
};
const getMyCreditNoteRequest = async () => {
  const result = [
    ["My Quote", "My Quote", "singapore", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
  ];
  return result;
};
const getOpenCreditNoteRequest = async () => {
  const result = [
    ["Open Quote", "Open Quote", "singapore", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
  ];
  return result;
};
const getClosedCreditNoteRequest = async () => {
  const result = [
    ["Closed Quote", "Closed Quote", "singapore", 30, "$100,000"],
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
    yield put(getCreditNoteSuccess(data));
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

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([fork(changeViewWatcher), fork(getAllCreditNoteWatcher)]);
}

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
  CHANGE_LEAD_LIST_VIEW,
  GET_ALL_LEAD,
  GET_SINGLE_LEAD,
  GET_LEAD_SUMMARY,
  SUBMIT_NEW_LEAD
} from "Types";
import {
  getLeadSuccess,
  getLeadFailure,
  getSingleLeadSuccess,
  getLeadSummarySuccess,
  getLeadSummaryFailure,
  newLeadSuccess,
  newLeadError
} from "Actions";

import api from "Api";

import { leadList, lead, lead2, leadSummary } from "Components/DummyData";

//=========================
// REQUESTS
//=========================
const getAllLeadRequest = async () => {
  const result = leadList;
  return result;
};
const getMyLeadRequest = async () => {
  const result = leadList;
  return result;
};
const getOpenLeadRequest = async () => {
  const result = leadList;
  return result;
};
const getHotLeadRequest = async () => {
  const result = leadList;
  return result;
};
const getColdLeadRequest = async () => {
  const result = leadList;
  return result;
};
const getLeadRequest = async leadID => {
  console.log(`fetching lead ${leadID}`);
  const result = leadID == 1 ? lead : lead2;
  return result;
};
const getLeadSummaryRequest = async () => {
  const result = leadSummary;
  return result;
};
const postLeadRequest = async lead => {
  console.log(lead);
  const result = {};
  return result;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* changeLeadList({ payload }) {
  let data;
  try {
    if (payload == "All Leads") {
      // All Leads
      data = yield call(getAllLeadRequest);
      yield delay(500);
      yield put(getLeadSuccess(data));
    } else if (payload == "My Leads") {
      // My Leads
      data = yield call(getMyLeadRequest);
      yield delay(500);
      yield put(getLeadSuccess(data));
    } else if (payload == "Open Leads") {
      // Open Leads
      data = yield call(getOpenLeadRequest);
      yield delay(500);
      yield put(getLeadSuccess(data));
    } else if (payload == "Hot Leads") {
      // Hot Leads
      data = yield call(getHotLeadRequest);
      yield delay(500);
      yield put(getLeadSuccess(data));
    } else if (payload == "Cold Leads") {
      // Cold Leads
      data = yield call(getColdLeadRequest);
      yield delay(500);
      yield put(getLeadSuccess(data));
    } else {
      yield delay(500);
      data = yield call(getAllLeadRequest);
      yield put(getLeadSuccess(data));
    }
  } catch (error) {
    yield put(getLeadFailure(error));
  }
}
function* getAllLeadFromDB() {
  try {
    const data = yield call(getAllLeadRequest);
    yield delay(500);
    yield put(getLeadSuccess(data));
  } catch (error) {
    yield put(getLeadFailure(error));
  }
}
function* getLeadFromDB({ payload }) {
  try {
    const data = yield call(getLeadRequest, payload);
    yield delay(500);
    yield put(getSingleLeadSuccess(data));
  } catch (error) {
    yield put(getLeadFailure(error));
  }
}
function* getLeadSummaryFromDB() {
  try {
    const data = yield call(getLeadSummaryRequest);
    yield put(getLeadSummarySuccess(data));
  } catch (error) {
    yield put(getLeadSummaryFailure(error));
  }
}
function* postLeadToDB() {
  try {
    const getLeadState = state => state.crmState.leadState.leadForm.lead;
    const lead = yield select(getLeadState);
    const data = yield call(postLeadRequest, lead);
    yield put(newLeadSuccess(data));
  } catch (error) {
    yield put(newLeadError(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* changeViewWatcher() {
  yield takeEvery(CHANGE_LEAD_LIST_VIEW, changeLeadList);
}
export function* getAllLeadWatcher() {
  yield takeEvery(GET_ALL_LEAD, getAllLeadFromDB);
}
export function* getSingleLeadWatcher() {
  yield takeEvery(GET_SINGLE_LEAD, getLeadFromDB);
}
export function* getLeadSummaryWatcher() {
  yield takeEvery(GET_LEAD_SUMMARY, getLeadSummaryFromDB);
}
export function* postLeadWatcher() {
  yield takeEvery(SUBMIT_NEW_LEAD, postLeadToDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(changeViewWatcher),
    fork(getAllLeadWatcher),
    fork(getSingleLeadWatcher),
    fork(getLeadSummaryWatcher),
    fork(postLeadWatcher)
  ]);
}

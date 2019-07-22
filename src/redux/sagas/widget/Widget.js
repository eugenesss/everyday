import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_CRM_SUMMARY } from "Types/system/WidgetTypes";
import { getCrmSummarySuccess, getCrmSummaryFailure } from "Actions";

import api from "Api";

//=========================
// REQUESTS
//=========================
const getCrmSummaryRequest = async () => {
  const result = await api.get("/widgets/crmsummary");
  return result.data.data;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getCrmSummary() {
  try {
    const data = yield call(getCrmSummaryRequest);
    yield put(getCrmSummarySuccess(data));
  } catch (error) {
    yield put(getCrmSummaryFailure(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getCrmSummaryWatcher() {
  yield takeEvery(GET_CRM_SUMMARY, getCrmSummary);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([fork(getCrmSummaryWatcher)]);
}

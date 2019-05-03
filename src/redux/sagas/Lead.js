/**
 * Lead Sagas
 */
import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import { SHOW_ALL_LEADS, SHOW_MY_LEADS, SHOW_OPEN_LEADS } from "Actions/types";
import { leadAPIFailure, addLeadSuccess } from "Actions";

import api from "Api";

//=========================
// REQUESTS
//=========================

const addLeadRequest = async (newLead, newContact) => {
  var lead = await api.post("/crm/lead", {
    newLead: newLead,
    newContact: newContact
  });
  return lead.data;
};
//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* addLeadToDB() {
  try {
    const getNewLead = state => state.lead.leadToEdit;
    const getNewContact = state => state.lead.leadContactEdit;
    const newLead = yield select(getNewLead);
    const newContact = yield select(getNewContact);
    const lead = yield call(addLeadRequest, newLead, newContact);
    yield put(addLeadSuccess(lead));
  } catch (error) {
    yield put(leadAPIFailure(error.response.data));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* addLeadWatcher() {
  yield takeEvery(ADD_LEAD, addLeadToDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([fork(addLeadWatcher)]);
}

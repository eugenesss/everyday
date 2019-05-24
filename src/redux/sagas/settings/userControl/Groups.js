import { all, call, fork, put, takeEvery, select, delay } from "redux-saga/effects";
import { 
  GET_ALL_GROUPS,
} from "Types";
import { 
  getAllGroupsSuccess,
  getGroupFailure,
 } from "Actions";
import api from "Api";
import { groups } from "Components/GroupsDummyData";

//=========================
// REQUESTS
//=========================
const getAllGroupsRequest = async () => {
  try {
    //const result = await api.get("/group");
    const result = groups;
    return result;
  } catch (err) {
    return err;
  }
}

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getAllGroupsFromDB() {
  try {
    const data =  yield call(getAllGroupsRequest)
    yield put(getAllGroupsSuccess(data))
  } catch (err) {
    yield put(getGroupFailure(err))
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getAllGroupsWatcher() {
  yield takeEvery(GET_ALL_GROUPS, getAllGroupsFromDB)
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([,
    fork(getAllGroupsWatcher)
  ]);
}

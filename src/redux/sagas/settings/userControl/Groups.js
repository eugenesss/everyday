import { all, call, fork, put, takeEvery, select, delay } from "redux-saga/effects";
import { 
  GET_ALL_GROUPS,
} from "Types";
import { 
  getAllGroupsSuccess,
  getGroupFailure,
 } from "Actions";
import api from "Api";
import { groups, hierarchies } from "Components/GroupsDummyData";

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
const getAllHierarchiesRequest = async () => {
  try {
    //const result = await api.get("/hierarchy")
    const result = hierarchies;
    return result;
  } catch (err) {
    return err
  }
}

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getAllGroupsFromDB() {
  try {
    const groups =  yield call(getAllGroupsRequest)
    const hierarchies = yield call(getAllHierarchiesRequest)
    yield put(getAllGroupsSuccess(groups, hierarchies))
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

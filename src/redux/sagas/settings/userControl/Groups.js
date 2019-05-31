import { all, call, fork, put, takeEvery, select, delay } from "redux-saga/effects";
import { 
  GET_ALL_GROUPS,
  ADD_GROUP,
  UPDATE_GROUP,
  DELETE_GROUP,
} from "Types";
import { 
  getAllGroupsSuccess,

  addGroupSuccess,
  addGroupFailure,

  updateGroupSuccess,
  updateGroupFailure,

  deleteGroupSuccess,
  deleteGroupFailure,

  getGroupFailure,
 } from "Actions";
import api from "Api";
import { groups, addGroup } from "Components/GroupsDummyData";

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
const addGroupRequest = async () => {
  try {
    const result = addGroup()
    return result
  } catch (err) {
    return err;
  }
}
const updateGroupRequest = async (group) => {
  try {
    const result = group
    return result
  } catch (err) {
    return err
  }
}
const deleteGroupRequest = async (group) => {
  try {
    const result = group
    return result
  } catch (err) {
    return err
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
function* addGroupToDB() {
  try {
    const data =  yield call(addGroupRequest)
    yield put(addGroupSuccess(data))
  } catch (err) {
    yield put(addGroupFailure(err))
  }
}
function* updateGroupToDB() {
  const getGroup = state => state.groupsState.selectedGroup;
  const group = yield select(getGroup)
  try {
    const data = yield call(updateGroupRequest, group);
    yield put(updateGroupSuccess(data));
  } catch (err)  {
    yield put(updateGroupFailure(err));
  }
}
function* deleteGroupFromDB() {
  const getGroup = state => state.groupsState.selectedGroup;
  const group = yield select(getGroup)
  try {
    const data = yield call(deleteGroupRequest, group)
    yield put(deleteGroupSuccess(data))
  } catch (err) {
    yield put(deleteGroupFailure(err))
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getAllGroupsWatcher() {
  yield takeEvery(GET_ALL_GROUPS, getAllGroupsFromDB)
};
export function* addGroupWatcher() {
  yield takeEvery(ADD_GROUP, addGroupToDB)
};
export function* updateGroupWatcher() {
  yield takeEvery(UPDATE_GROUP, updateGroupToDB)
};
export function* deleteGroupWatcher() {
  yield takeEvery(DELETE_GROUP, deleteGroupFromDB)
};

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([,
    fork(getAllGroupsWatcher),
    fork(addGroupWatcher),
    fork(updateGroupWatcher),
    fork(deleteGroupWatcher),
  ]);
};

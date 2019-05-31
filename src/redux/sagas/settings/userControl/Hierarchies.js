import { all, call, fork, put, takeEvery, select, delay } from "redux-saga/effects";
import { 
  GET_ALL_HIERARCHIES,
  ADD_HIERARCHY,
  DELETE_HIERARCHY,
} from "Types";
import { 
  getAllHierarchiesSuccess,
  getHierarchyFailure,
  addHierarchySuccess,
  addHierarchyFailure,
  deleteHierarchySuccess,
  deleteHierarchyFailure,
 } from "Actions";
import api from "Api";
import { hierarchies, deleteHierarchy, addHierarchy } from "Components/HierarchyDummyData";

//=========================
// REQUESTS
//=========================
const getAllHierarchiesRequest = async () => {
  try {
    //const result = await api.get("/hierarchies");
    const result = hierarchies;
    return result;
  } catch (err) {
    return err;
  }
}
const addHierarchyRequest = async (hierarchy) => {
  try {
    const result = addHierarchy(hierarchy)
    return result
  } catch (err) {
    return err
  }
}
const deleteHierarchyRequest = async (roleID, groupID) => {
  try {
    const result = deleteHierarchy(roleID, groupID)
    return result
  } catch (err) {
    return err
  }
}

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getAllHierarchiesFromDB() {
  try {
    const data = yield call(getAllHierarchiesRequest)
    yield put(getAllHierarchiesSuccess(data))
  } catch (err) {
    yield put(getHierarchyFailure(err))
  }
};
function* addHierarchyToDB(payload) {
  try {
    const getGroupID = state => state.groupsState.selectedGroup.id;
    const groupID = yield select(getGroupID);
    
    const getGroups = state => state.groupsState.groups;
    const groups = yield select(getGroups);
    
    const getRoles = state => state.rolesState.roles;
    const roles = yield select(getRoles);

    var role = roles.find(role => {return role.id == payload.payload})
    var group = groups.find(group => {return group.id == groupID})
    console.log(payload)
    var hierarchy = {
      group: group,
      role: role,
      tier: 1
    }

    const data = yield call(addHierarchyRequest, hierarchy)
    yield put(addHierarchySuccess(data))
  } catch (err) {
    yield put(addHierarchyFailure(err))
  }
};
function* deleteHierarchyFromDB(payload) {
  try {
    const getGroupID = state => state.groupsState.selectedGroup.id;
    const groupID = yield select(getGroupID);
    const data = yield call(deleteHierarchyRequest, payload.payload, groupID)
    yield put(deleteHierarchySuccess(data))
  } catch (err) {
    yield put(deleteHierarchyFailure(err))
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getAllHierarchiesWatcher() {
  yield takeEvery(GET_ALL_HIERARCHIES, getAllHierarchiesFromDB)
};
export function* addHierarchyWatcher() {
  yield takeEvery(ADD_HIERARCHY, addHierarchyToDB)
};
export function* deleteHierarchyWatcher() {
  yield takeEvery(DELETE_HIERARCHY, deleteHierarchyFromDB)
};

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([,
    fork(getAllHierarchiesWatcher),
    fork(addHierarchyWatcher),
    fork(deleteHierarchyWatcher),
  ]);
}

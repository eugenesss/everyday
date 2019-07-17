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

//=========================
// REQUESTS
//=========================
const getAllGroupsRequest = async () => {
  const result = await api.post(`/accessgroups/viewall`)
  return result.data.data
}
/*
const getAllGroupRolesRequest = async () => {
  const result = await api.get(`/accessgrouproles`)
  return result.data
}
*/
const addGroupRequest = async () => {
  const result = await api.post(`/accessgroups`, {
    "name": "New Group"
  });
  return result.data;
}
const updateGroupNameRequest = async (groupName, groupId) => {
  const result = await api.patch(`/accessgroups/${groupId}`, {
    "name": groupName
  })
  return result.data
}

const updateGroupRolesRequest = async (groupId, roles) => {
  const result = await api.post("/accessgroups/saveRoles", {
    "id": groupId,
    "roles": roles
  });
  return result.data.data
}

const deleteGroupRequest = async (group) => {
  const result = group
  return result
}

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getAllGroupsFromDB() {
  try {
    const groups = yield call(getAllGroupsRequest)
    //const groupRoles = yield call(getAllGroupRolesRequest)
    yield put(getAllGroupsSuccess(groups))
  } catch (err) {
    yield put(getGroupFailure(err))
  }
}
function* addGroupToDB() {
  try {
    const data = yield call(addGroupRequest)
    yield put(addGroupSuccess(data))
  } catch (err) {
    yield put(addGroupFailure(err))
  }
}
function* updateGroupToDB() {
  const getGroup = state => state.groupsState.selectedGroup;
  const groupData = yield select(getGroup);
  const getRolesArray = state => state.rolesState.selectedRoleGroups;
  const rolesArray = yield select(getRolesArray);
  var allroles = [];
  if(rolesArray !== undefined){
    for(const selected of rolesArray){
      let dataObj = {id: selected.id, tier: 1};
      let currentRole = groupData.roles.find( role => { return role.roleId == selected.id});
      if(currentRole !== undefined){
        dataObj.tier = currentRole.tier;
      }
      allroles.push(dataObj);
    }
  }
  try {
    yield call(updateGroupNameRequest, groupData.name, groupData.id);
    yield call(updateGroupRolesRequest, groupData.id, allroles);
    yield delay(500);
    yield put(updateGroupSuccess(data));
  } catch (err) {
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
  yield all([
    fork(getAllGroupsWatcher),
    fork(addGroupWatcher),
    fork(updateGroupWatcher),
    fork(deleteGroupWatcher),
  ]);
};

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
  GET_ALL_ROLES,
  CHANGE_SELECTED_ROLE,
  ADD_ROLE,
  UPDATE_ROLE,
  DELETE_ROLE
} from "Types";
import {
  getAllRolesSuccess,
  getRoleFailure,
  addRoleSuccess,
  addRoleFailure,
  updateRoleSuccess,
  updateRoleFailure,
  deleteRoleSuccess,
  deleteRoleFailure
} from "Actions";
// import api from "Api";
import { roles, addRole } from "Components/RolesDummyData";
import { operations } from "Components/OperationsDummyData";
import api from "Api";

//=========================
// REQUESTS
//=========================
const getAllAccessRightsRequest = async () => {
  const result = await api.get(`/accessrights`);
  return result.data;
};
const getAllAccessRolesRequest = async () => {
  const result = await api.get(`/accessroles`);
  return result.data;
};
const getAllAccessRolesAccessRightsRequest = async () => {
  const result = await api.get(`accessroles/getAllRoleRights`);
  return result.data.data;
};
const getAllRolesRequest = async () => {
  const result = roles;
  return result;
};
const getAllOperationsRequest = async () => {
  try {
    const result = operations;
    return result;
  } catch (err) {
    return err;
  }
};

const addRoleRequest = async () => {
  try {
    const result = addRole();
    return result;
  } catch (err) {
    return err;
  }
};
const updateRoleRequest = async role => {
  try {
    const result = role;
    return result;
  } catch (err) {
    return err;
  }
};
const deleteRoleRequest = async role => {
  try {
    const result = role;
    return result;
  } catch (err) {
    return err;
  }
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getAllRolesFromDB() {
  try {
    const roles = yield call(getAllRolesRequest);
    const operations = yield call(getAllOperationsRequest);
    const accessRights = yield call(getAllAccessRightsRequest);
    const accessRoles = yield call(getAllAccessRolesRequest);
    const roleRights = yield call(getAllAccessRolesAccessRightsRequest);
    yield put(getAllRolesSuccess(roles, operations, accessRights, accessRoles, roleRights));
  } catch (err) {
    yield put(getRoleFailure(err));
  }
}
function* addRoleToDB() {
  try {
    const data = yield call(addRoleRequest);
    yield put(addRoleSuccess(data));
  } catch (err) {
    yield put(addRoleFailure(err));
  }
}
function* updateRoleToDB() {
  try {
    const getRole = state => state.rolesState.selectedRole;
    const role = yield select(getRole);
    const data = yield call(updateRoleRequest, role);
    yield put(updateRoleSuccess(data));
  } catch (err) {
    yield put(updateRoleFailure(err));
  }
}
function* deleteRoleFromDB() {
  try {
    const getRole = state => state.rolesState.selectedRole;
    const role = yield select(getRole);
    const data = yield call(deleteRoleRequest, role);
    yield put(deleteRoleSuccess(data));
  } catch (err) {
    yield put(deleteRoleFailure(err));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getAllRolesWatcher() {
  yield takeEvery(GET_ALL_ROLES, getAllRolesFromDB);
}
export function* addRoleWatcher() {
  yield takeEvery(ADD_ROLE, addRoleToDB);
}
export function* updateRoleWatcher() {
  yield takeEvery(UPDATE_ROLE, updateRoleToDB);
}
export function* deleteRoleWatcher() {
  yield takeEvery(DELETE_ROLE, deleteRoleFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    ,
    fork(getAllRolesWatcher),
    fork(addRoleWatcher),
    fork(updateRoleWatcher),
    fork(deleteRoleWatcher)
  ]);
}

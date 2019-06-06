import { all, call, fork, put, takeEvery, select, delay } from "redux-saga/effects";
import { 
  GET_ALL_ROLES,
  ADD_ROLE,
  UPDATE_ROLE,
  DELETE_ROLE,
} from "Types";
import { 
  getAllRolesSuccess,
  getRoleFailure,
  addRoleSuccess,
  addRoleFailure,
  updateRoleSuccess,
  updateRoleFailure,
  deleteRoleSuccess,
  deleteRoleFailure,
 } from "Actions";
import api from "Api";
import { roles, crud, addRole } from "Components/RolesDummyData";

//=========================
// REQUESTS
//=========================
const getAllRolesRequest = async () => {
  try {
    //const result = await api.get("/role");
    const result = roles;
    return result;
  } catch (err) {
    return err;
  }
}
const getAllCRUDRequest = async () => {
  try {
    //const result = await api.get("/crud");
    const result = crud;
    return result;
  } catch (err) {
    return err;
  }
}
const addRoleRequest = async () => {
  try {
    const result = addRole()
    return result
  } catch (err) {
    return err
  }
}
const updateRoleRequest = async (role) => {
  try {
    const result = role
    return result
  } catch (err) {
    return err
  }
}
const deleteRoleRequest = async (role) => {
  try {
    const result = role
    return result
  } catch (err) {
    return err
  }
}

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getAllRolesFromDB() {
  try {
    const roles =  yield call(getAllRolesRequest)
    const crud = yield call(getAllCRUDRequest)
    yield put(getAllRolesSuccess(roles, crud))
  } catch (err) {
    yield put(getRoleFailure(err))
  }
}
function* addRoleToDB() {
  try {
    const data = yield call(addRoleRequest)
    yield put(addRoleSuccess(data))
  } catch (err) {
    yield put(addRoleFailure(err))
  }
}
function* updateRoleToDB() {
  try {
    const getRole = state => state.rolesState.selectedRole
    const role = yield select(getRole)
    const data = yield call(updateRoleRequest, role)
    yield put(updateRoleSuccess(data))
  } catch (err) {
    yield put(updateRoleFailure(err))
  }
}
function* deleteRoleFromDB() {
  try {
    const getRole = state => state.rolesState.selectedRole
    const role = yield select(getRole)
    const data = yield call(deleteRoleRequest, role)
    yield put(deleteRoleSuccess(data))
  } catch (err) {
    yield put(deleteRoleFailure(err))
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getAllRolesWatcher() {
  yield takeEvery(GET_ALL_ROLES, getAllRolesFromDB)
};
export function* addRoleWatcher() {
  yield takeEvery(ADD_ROLE, addRoleToDB)
};
export function* updateRoleWatcher() {
  yield takeEvery(UPDATE_ROLE, updateRoleToDB)
};
export function* deleteRoleWatcher() {
  yield takeEvery(DELETE_ROLE, deleteRoleFromDB)
};

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([,
    fork(getAllRolesWatcher),
    fork(addRoleWatcher),
    fork(updateRoleWatcher),
    fork(deleteRoleWatcher),
  ]);
}

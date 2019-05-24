import { all, call, fork, put, takeEvery, select, delay } from "redux-saga/effects";
import { 
  GET_ALL_ROLES,
} from "Types";
import { 
  getAllRolesSuccess,
  getRoleFailure,
 } from "Actions";
import api from "Api";
import { roles, crud } from "Components/RolesDummyData";

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

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getAllRolesWatcher() {
  yield takeEvery(GET_ALL_ROLES, getAllRolesFromDB)
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([,
    fork(getAllRolesWatcher)
  ]);
}

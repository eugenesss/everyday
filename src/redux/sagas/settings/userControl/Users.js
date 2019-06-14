import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import { GET_ALL_USERS, ADD_USER, UPDATE_USER, GET_USER_PROFILE } from "Types";
import {
  getAllUsersSuccess,
  addUserSuccess,
  addUserFailure,
  updateUserSuccess,
  updateUserFailure,
  getUserProfileSuccess,
  getUserFailure
} from "Actions";
import api from "Api";

//=========================
// REQUESTS
//=========================
const getAllUsersRequest = async () => {
  const result = await api.get("/users");
  return result.data;
};
const addUserRequest = async newUser => {
  const result = newUser;
  return result;
};
const updateUserRequest = async user => {
  const result = user;
  return result;
};
const getUserProfileRequest = async userID => {
  const result = await api.get(`/user/${userID}`, userID);
  return result.data;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getAllUsersFromDB() {
  try {
    const data = yield call(getAllUsersRequest);
    yield put(getAllUsersSuccess(data));
  } catch (err) {
    yield put(getUserFailure(err));
  }
}
function* addUserToDB() {
  const getNewUser = state => state.usersState.userAdd;
  const newUser = yield select(getNewUser);
  try {
    const data = yield call(addUserRequest, newUser);
    yield put(addUserSuccess(data));
  } catch (err) {
    yield put(addUserFailure(err));
  }
}
function* updateUserToDB() {
  const getUser = state => state.usersState.userUpdate;
  const user = yield select(getUser);
  try {
    const data = yield call(updateUserRequest, user);
    yield put(updateUserSuccess(data));
  } catch (err) {
    yield put(updateUserFailure(err));
  }
}
function* getUserProfileFromDB({ payload }) {
  try {
    const data = yield call(getUserProfileRequest, payload);
    yield put(getUserProfileSuccess(data));
  } catch (err) {
    yield put(getUserFailure(err));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getAllUsersWatcher() {
  yield takeEvery(GET_ALL_USERS, getAllUsersFromDB);
}
export function* addUserWatcher() {
  yield takeEvery(ADD_USER, addUserToDB);
}
export function* updateUserWatcher() {
  yield takeEvery(UPDATE_USER, updateUserToDB);
}
export function* getUserProfileWatcher() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    ,
    fork(getAllUsersWatcher),
    fork(addUserWatcher),
    fork(updateUserWatcher),
    fork(getUserProfileWatcher)
  ]);
}

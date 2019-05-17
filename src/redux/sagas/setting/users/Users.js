import { all, call, fork, put, takeEvery, select, delay } from "redux-saga/effects";
import { 
  GET_ALL_USERS,
  GET_USER_PROFILE,
} from "Types";
import { 
  getAllUsersSuccess,
  getUserProfileSuccess,
  getUserFailure,
 } from "Actions";
import api from "Api";
import { users } from "Components/UserDummyData";

//=========================
// REQUESTS
//=========================
const getAllUsersRequest = async () => {
  try {
    //const result = await api.get("/user");
    const result = users;
    return result;
  } catch (err) {
    return err;
  }
}
const getUserProfileRequest = async (userID) => {
  try {
    //const result = await api.get(`/user/${userID}`, userID);
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == userID)
        var result = users[i]
    }
    return result;
  } catch (err) {
    return err;
  }
}

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
function* getUserProfileFromDB({ payload }) {
  try {
    const data = yield call(getUserProfileRequest, payload);
    yield put(getUserProfileSuccess(data));
  } catch (err) {
    yield put(getUserFailure(err))
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getAllUsersWatcher() {
  yield takeEvery(GET_ALL_USERS, getAllUsersFromDB);
}
export function* getUserProfileWatcher() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([,
    fork(getAllUsersWatcher),
    fork(getUserProfileWatcher),
  ]);
}

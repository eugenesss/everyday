import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { LOGIN_USER } from "Types";

import { signinUserSuccess, signinUserFailure } from "Actions";

import api from "Api";

const signInUserWithEmailPasswordRequest = async (email, password) => {
  const result = await api.post("/users/login", {
    email: email,
    password: password
  });
  return result.data;
};

const getUserAccessRightsRequest = async (userId) => {
  const result = await api.get(`/accesssettings/${userId}/user/accessRights`)
  return result.data
}


function* signInUserWithEmailPassword({ payload }) {
  const { emailAddress, password } = payload.user;
  const { history } = payload;
  try {
    const signInUser = yield call(
      signInUserWithEmailPasswordRequest,
      emailAddress,
      password
    );
    if (signInUser.id) {
      localStorage.setItem("user_id", signInUser.userId);
      localStorage.setItem("accessKey", signInUser.id)
      const userRights = yield call(getUserAccessRightsRequest, signInUser.userId)
      yield put(signinUserSuccess(signInUser, userRights));
      history.push("/");
    } else {
      yield put(signinUserFailure("Invalid email address or password."));
    }
  } catch (error) {
    //console.log(error);
    yield put(signinUserFailure("Invalid email address or password."));
  }
}

export function* signinUser() {
  yield takeEvery(LOGIN_USER, signInUserWithEmailPassword);
}

export default function* rootSaga() {
  yield all([fork(signinUser)]);
}

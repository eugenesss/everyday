import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import {
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_USER_RESENT_EMAIL,
  LOGIN_USER_RESET_PASSWORD,
  USER_RIGHTS
} from "Types";

import {
  signinUserSuccess,
  signinUserFailure,
  logoutUserSuccess,
  logoutUserFailure,
  userResentEmailSuccess,
  userResentEmailFailure,
  userResetPasswordFailure,
  userResetPasswordSuccess,
  userRightsSuccess,
  userRightsFailure
} from "Actions";

import api from "Api";

import Auth from "../../../Auth/Auth";

// Login API
const signInUserWithEmailPasswordRequest = async (email, password) => {
  const result = await api.post("/users/login", {
    email: email,
    password: password
  });
  return result.data;
};

// Access Rights API
const getUserAccessRightsRequest = async () => {
  const result = await api.get(`/accesssettings/user/accessRights`);
  return result.data.data;
};

// User Profile API
const getUserProfileRequest = async userID => {
  const result = await api.get(`/users/${userID}`, userID);
  return result.data;
};

// Logout API
const logoutUserWithAccessToken = async () => {
  const result = await api.post(`/users/logout`);
  return result.data;
};

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
      localStorage.setItem("accessKey", signInUser.id);
      const userRights = yield call(getUserAccessRightsRequest);
      const userInfo = yield call(getUserProfileRequest, signInUser.userId);
      new Auth().setSession(signInUser);
      yield put(signinUserSuccess(signInUser, userRights, userInfo));
      history.push("/");
      //Get User Access Rights
    } else {
      yield put(signinUserFailure(error.response.data.error.message));
    }
  } catch (error) {
    yield put(signinUserFailure(error.response.data.error));
  }
}

function* getUserRights() {
  try {
    const userRights = yield call(getUserAccessRightsRequest);
    let userid = localStorage.getItem("user_id");
    const userInfo = yield call(getUserProfileRequest, userid);
    yield put(userRightsSuccess(userRights, userInfo));
  } catch (error) {
    yield put(userRightsFailure(error.response.data.error));
  }
}

function* logoutUser({}) {
  try {
    yield call(logoutUserWithAccessToken);
    yield put(logoutUserSuccess());
    new Auth().logout();
  } catch (error) {
    yield put(logoutUserFailure());
  }
}

const userResentVerificationEmail = async userId => {
  const result = await api.post(`/users/verify`, { id: userId });
  return result.data;
};

function* UserResentEmail({ payload }) {
  try {
    yield call(userResentVerificationEmail, payload.user);
    yield put(userResentEmailSuccess());
  } catch (error) {
    yield put(userResentEmailFailure());
  }
}

const userResentPasswordEmail = async email => {
  const result = await api.post(`/users/reset`, { email: email });

  if (result.data) {
    return result.data;
  } else {
    return result;
  }
};

function* UserResentPassword({ payload }) {
  try {
    yield call(userResentPasswordEmail, payload.email);
    yield put(userResetPasswordSuccess());
  } catch (error) {
    let errorMessage;
    if (error.response) {
      errorMessage = error.response.data.error.message;
    } else {
      errorMessage = error.message;
    }

    yield put(userResetPasswordFailure(errorMessage));
  }
}

export function* signinUserWatcher() {
  yield takeEvery(LOGIN_USER, signInUserWithEmailPassword);
}

export function* signoutUser() {
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export function* usersentEmail() {
  yield takeEvery(LOGIN_USER_RESENT_EMAIL, UserResentEmail);
}

export function* usersentPassword() {
  yield takeEvery(LOGIN_USER_RESET_PASSWORD, UserResentPassword);
}

export function* getAccessRights() {
  yield takeEvery(USER_RIGHTS, getUserRights);
}

export default function* rootSaga() {
  yield all([
    fork(signinUserWatcher),
    fork(signoutUser),
    fork(usersentEmail),
    fork(usersentPassword),
    fork(getAccessRights)
  ]);
}

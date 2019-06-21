import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { LOGIN_USER, LOGOUT_USER, LOGIN_USER_RESENT_EMAIL, LOGIN_USER_RESET_PASSWORD } from "Types";

import { signinUserSuccess, signinUserFailure,
         logoutUserSuccess, logoutUserFailure, 
         userResentEmailSuccess, userResentEmailFailure,
         userResetPasswordFailure, userResetPasswordSuccess
} from "Actions";

import api from "Api";

import Auth from '../../../Auth/Auth'

const signInUserWithEmailPasswordRequest = async (email, password) => {
  const result = await api.post("/users/login", {
    email: email,
    password: password
  });
  return result.data;
};

const getUserAccessRightsRequest = async userId => {
  const result = await api.get(`/accesssettings/${userId}/user/accessRights`);
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
      const userRights = yield call(
        getUserAccessRightsRequest,
        signInUser.userId
      );

      new Auth().setSession(signInUser)
      yield put(signinUserSuccess(signInUser, userRights));
      history.push("/");
      //Get User Access Rights
    } else {

      yield put(signinUserFailure(error.response.data.error.message));
    }
    
  } catch (error) {
    yield put(signinUserFailure(error.response.data.error));
  }
}


const logoutUserWithAccessToken = async () => {
  const result = await api.post(`/users/logout`);
  return result.data;
};

function* logoutUser ({}) {
  try {
    yield call(logoutUserWithAccessToken);
    yield put(logoutUserSuccess());
    new Auth().logout()
  } catch (error) {
    yield put(logoutUserFailure());
  }
}


const userResentVerificationEmail= async (userId) => {
  const result = await api.post(`/users/verify`, {id: userId});
  return result.data;
};

function* UserResentEmail ({payload}) {
  try {
    yield call(userResentVerificationEmail, payload.user);
    yield put(userResentEmailSuccess());
  } catch (error) {
    yield put(userResentEmailFailure());
  }
}



const userResentPasswordEmail= async (email) => {
  const result = await api.post(`/users/reset`, {email: email});

  if (result.data){
    return result.data
  } else {
    return result
  }
};

function* UserResentPassword ({payload}) {
  try {
    yield call(userResentPasswordEmail, payload.email);
    yield put(userResetPasswordSuccess());
  } catch (error) {

    let errorMessage
    if (error.response) {
      errorMessage = error.response.data.error.message
    } else {
      errorMessage = error.message
    }

    yield put(userResetPasswordFailure(errorMessage));
  }
}





export function* signinUser() {
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

export default function* rootSaga() {
  yield all([fork(signinUser), fork(signoutUser), fork(usersentEmail), fork(usersentPassword)]);
}

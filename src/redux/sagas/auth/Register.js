import {
  all,
  call,
  fork,
  put,
  takeEvery,
  select,
  delay
} from "redux-saga/effects";

import { SIGNUP_USER } from "Types";

import { registerUserSuccess, registerUserFailure} from "Actions";

import api from "Api";

const registerUserRequest = async form => {
  const result = await api.post("/basecompanies/signup", form);
  return result.data;
};


function* registerUserToDB() {
  // console.log('registerUserToDB')
  // console.log(payload)

  const getRegisterForm = state => state.authUser.register.form;


  try {
    const form = yield select(getRegisterForm);
    const data = yield call(registerUserRequest, form);

    // yield delay(800);
    yield put(registerUserSuccess(data.msg));
  } catch (error) {
    yield put(registerUserFailure(error.response.data.error.message));
  }
}


export function* registerUserWatcher() {
  yield takeEvery(SIGNUP_USER, registerUserToDB);
}


export default function* rootSaga() {
  yield all([fork(registerUserWatcher)]);
}


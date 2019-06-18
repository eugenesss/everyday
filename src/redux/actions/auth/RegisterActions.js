import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  HANDLE_REGISTER_FORM,

  HANDLE_REGISTER_ERROR
} from "Types";

export const registerUser = () => ({
  type: SIGNUP_USER
});
export const registerUserSuccess = (success, msg) => ({
  type: SIGNUP_USER_SUCCESS,
  payload: { success, msg }
});
export const registerUserRequestregisterUserFailure = error => ({
  type: SIGNUP_USER_FAILURE,
  payload: error
});

export const handleRegForm = (field, value, type) => ({
  type: HANDLE_REGISTER_FORM,
  payload: { field, value, type }
});

export const handleRegErrorForm = (value) => ({
  type: HANDLE_REGISTER_ERROR,
  payload: value
});

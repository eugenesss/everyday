import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  HANDLE_REGISTER_FORM
} from "Types";

export const registerUser = () => ({
  type: SIGNUP_USER
});
export const registerUserSuccess = (success, msg) => ({
  type: SIGNUP_USER_SUCCESS,
  payload: { success, msg }
});
export const registerUserFailure = error => ({
  type: SIGNUP_USER_FAILURE,
  payload: error
});

export const handleRegForm = (field, value, type) => ({
  type: HANDLE_REGISTER_FORM,
  payload: { field, value, type }
});

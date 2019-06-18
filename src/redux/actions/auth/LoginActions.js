import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE
} from "Types";

export const signInUserWithEmailPassword = (user, history) => ({
  type: LOGIN_USER,
  payload: { user, history }
});

export const signinUserSuccess = (user, accessRights) => ({
  type: LOGIN_USER_SUCCESS,
  payload: {user, accessRights}
});

export const signinUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: error
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
});

export const logoutUserFailure = () => ({
  type: LOGOUT_USER_FAILURE
});

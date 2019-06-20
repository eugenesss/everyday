import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,

  LOGIN_USER_RESENT_EMAIL,
  LOGIN_USER_RESENT_EMAIL_SUCCESS,
  LOGIN_USER_RESENT_EMAIL_FAILURE,

  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,

  LOGIN_USER_RESET_PASSWORD,
  LOGIN_USER_RESET_PASSWORD_SUCCESS,
  LOGIN_USER_RESET_PASSWORD_FAILURE,
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

export const userResentEmail = (user) => ({
  type: LOGIN_USER_RESENT_EMAIL,
  payload: {user}
});

export const userResentEmailSuccess = () => ({
  type: LOGIN_USER_RESENT_EMAIL_SUCCESS,
});

export const userResentEmailFailure = () => ({
  type: LOGIN_USER_RESENT_EMAIL_FAILURE,
});

export const userResetPassword = (email) => ({
  type: LOGIN_USER_RESET_PASSWORD,
  payload: {email}
});

export const userResetPasswordSuccess = () => ({
  type: LOGIN_USER_RESET_PASSWORD_SUCCESS,
});

export const userResetPasswordFailure = (error) => ({
  type: LOGIN_USER_RESET_PASSWORD_FAILURE,
  payload: error
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
});

export const logoutUserFailure = () => ({
  type: LOGOUT_USER_FAILURE,
});

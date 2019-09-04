import * as types from "Types/auth/LoginTypes";

export const signInAccount = (user, history) => ({
  type: LOGIN_USER,
  payload: { user, history }
});
export const signinUserSuccess = (user, accessRights, userInfo) => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: { user, accessRights, userInfo }
});
export const signinUserFailure = error => ({
  type: types.LOGIN_USER_FAILURE,
  payload: error
});

/**
 * User resent verification email
 */
export const userResentEmail = user => ({
  type: types.LOGIN_USER_RESENT_EMAIL,
  payload: { user }
});
export const userResentEmailSuccess = () => ({
  type: types.LOGIN_USER_RESENT_EMAIL_SUCCESS
});
export const userResentEmailFailure = () => ({
  type: types.LOGIN_USER_RESENT_EMAIL_FAILURE
});

/**
 * Reset Password
 */
export const userResetPassword = email => ({
  type: types.LOGIN_USER_RESET_PASSWORD,
  payload: { email }
});
export const userResetPasswordSuccess = () => ({
  type: types.LOGIN_USER_RESET_PASSWORD_SUCCESS
});
export const userResetPasswordFailure = error => ({
  type: types.LOGIN_USER_RESET_PASSWORD_FAILURE,
  payload: error
});

/**
 * Logout user
 */
export const logoutUser = () => ({
  type: types.LOGOUT_USER
});
export const logoutUserSuccess = () => ({
  type: types.LOGOUT_USER_SUCCESS
});
export const logoutUserFailure = () => ({
  type: types.LOGOUT_USER_FAILURE
});

/**
 * Get User rights
 *
 * User Profile / Company Profile / User Rights
 */
export const getUserRights = () => ({
  type: types.USER_RIGHTS
});
export const userRightsSuccess = (accessRights, userInfo) => ({
  type: types.USER_RIGHTS_SUCCESS,
  payload: { accessRights, userInfo }
});
export const userRightsFailure = error => ({
  type: types.USER_RIGHTS_FAILURE,
  payload: error
});

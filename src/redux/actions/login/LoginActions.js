import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,    
} from "Types";

export const signInUserWithEmailPassword = (user, history) => ({
    type: LOGIN_USER,
    payload: { user, history }
});

export const signinUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: user
});

export const signinUserFailure = (error) => ({
    type: LOGIN_USER_FAILURE,
    payload: error
});

export const logoutUserSuccess = () => ({
    type: LOGOUT_USER_SUCCESS
});

export const logoutUserFailure = () => ({
    type: LOGOUT_USER_FAILURE
});
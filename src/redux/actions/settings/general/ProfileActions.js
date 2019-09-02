import {
    UPDATE_PASSWORD,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAILURE
} from "Types";

export const updatePassword = (oldPassword, newPassword) => ({
    type: UPDATE_PASSWORD,
    payload: { oldPassword, newPassword }
});
export const updatePasswordSuccess = (msg) => ({
    type: UPDATE_PASSWORD_SUCCESS,
    payload: msg
});
export const updatePasswordFailure = (err) => ({
    type: UPDATE_PASSWORD_FAILURE,
    payload: err
});
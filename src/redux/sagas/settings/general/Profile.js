import { all, call, fork, put, takeEvery, select, delay } from "redux-saga/effects";
import {
    UPDATE_PASSWORD
} from "Types";
import {
    updatePassword,
    updatePasswordSuccess,
    updatePasswordFailure
} from "Actions";
import api from "Api";

//=========================
// REQUESTS
//=========================
const updateUserPassword = async (oldPassword, newPassword) => {
    await api.post(`/users/change-password`, { oldPassword: oldPassword, newPassword: newPassword });
    return true;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* updatePasswordToDB({ payload }) {
    try {
        console.log("updating");
        const data = yield call(updateUserPassword, payload.oldPassword, payload.newPassword);
        yield put(updatePasswordSuccess(data));
    } catch (err) {
        yield put(updatePasswordFailure(err));
    }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* updatePasswordWatcher() {
    yield takeEvery(UPDATE_PASSWORD, updatePasswordToDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
    yield all([
        fork(updatePasswordWatcher)
    ]);
}
import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { LOGIN_USER } from "Types";

import { signinUserSuccess, signinUserFailure } from "Actions";

import api from "Api";

const signInUserWithEmailPasswordRequest = async (email, password) => {
  const result = await api.post("/users/login", {
    email: email,
    password: password
  });
  return result.data;
};

const getAccessSettingsRequest = async (userId) => {
  const result = await api.get(`/accesssettings/getUserAccessSetting?userId=${userId}`,)
  return result.data.data
}

const getGroupRolesRequest = async (groupRoleId) => {
  const result = await api.get(`/accessgrouproles/${groupRoleId}`)
  return result.data
}

const getRolesRequest = async (roleId) => {
  const result = await api.get(`/accessroles/${roleId}`)
  return result.data
}

const getAccessRightsRequest = async (roleId) => {
  const result = await api.get(`/accessroles/${roleId}/accessRights`)
  return result.data
}

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

      //Get User Access Rights
      const userAccessSettings = yield call(getAccessSettingsRequest, signInUser.userId)
      var userGroupRoles = []
      var userRoles = []
      var userRights = []
      if(userAccessSettings) {
        for (let i = 0; i < userAccessSettings.length; i++) {
          var groupRole = yield call(getGroupRolesRequest, userAccessSettings[i].grouproleId)
          userGroupRoles.push(groupRole)
        }
        if(userGroupRoles.length) {
          for (let i = 0; i < userGroupRoles.length; i++) {
            var role = yield call(getRolesRequest, userGroupRoles[i].accessRoleId)
            userRoles.push(role)            
          }
          if(userRoles.length) {
            for (let i = 0; i < userRoles.length; i++) {
              var rights = yield call(getAccessRightsRequest, userRoles[i].id)
              userRights = userRights.filter((el) => {
                return rights.indexOf(el) < 0
              })
              userRights.concat(rights)
            }
          }
        }
      }
      yield put(signinUserSuccess(signInUser, userRights));
      history.push("/");
    } else {
      yield put(signinUserFailure("Invalid email address or password."));
    }
  } catch (error) {
    //console.log(error);
    yield put(signinUserFailure("Invalid email address or password."));
  }
}

export function* signinUser() {
  yield takeEvery(LOGIN_USER, signInUserWithEmailPassword);
}

export default function* rootSaga() {
  yield all([fork(signinUser)]);
}

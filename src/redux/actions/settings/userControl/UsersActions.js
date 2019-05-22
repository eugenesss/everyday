/**
 * Users Actions
 */
import { 
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,

  ON_CHANGE_ADD_USER,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,

  UPDATE_USER_START,
  ON_CHANGE_UPDATE_USER,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,

  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_END,

  GET_USER_FAILURE,


  SHOW_ADD_USER,
  HIDE_ADD_USER,
  SHOW_USER_CONTROLS,
  HIDE_USER_CONTROLS,
} from "Types";
import { updateLocale } from "moment";

/**
 * GET All Users
 */
export const getAllUsers = () => ({
  type: GET_ALL_USERS
});
export const getAllUsersSuccess = (users) => ({
  type: GET_ALL_USERS_SUCCESS,
  payload: users
});


/**
 * ADD User
 */
export const onChangeAddUser = (field, value) => ({
  type: ON_CHANGE_ADD_USER,
  payload: {field, value}
});
export const addUser = () => ({
  type: ADD_USER
});
export const addUserSuccess = (user) => ({
  type: ADD_USER_SUCCESS,
  payload: user
});
export const addUserFailure = (err) => ({
  type: ADD_USER_FAILURE,
  payload: err
});


/**
 * UPDATE User
 */
export const updateUserStart = (user) => ({
  type: UPDATE_USER_START,
  payload: user
})
export const onChangeUpdateUser = (field, value) => ({
  type: ON_CHANGE_UPDATE_USER,
  payload: { field, value }
});
export const updateUser = () => ({
  type: UPDATE_USER
});
export const updateUserSuccess = (user) => ({
  type: UPDATE_USER_SUCCESS,
  payload: user
});
export const updateUserFailure = (err) => ({
  type: UPDATE_USER_FAILURE,
  payload: err
})

/**
 * GET User Profile Start
 */
export const getUserProfile = (userID) => ({
  type: GET_USER_PROFILE,
  payload: userID
})
export const getUserProfileSuccess = (user) => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload: user
})
export const getUserProfileEnd = () => ({
  type: GET_USER_PROFILE_END
})


/**
 * GET User Failure
 */
export const getUserFailure = (err) => ({
  type: GET_USER_FAILURE,
  payload: err
})

/**
 * State Changes
 */
export const showAddUser = () => ({
  type: SHOW_ADD_USER
});

export const hideAddUser = () => ({
  type: HIDE_ADD_USER
});

export const showUserControls = () => ({
  type: SHOW_USER_CONTROLS
})

export const hideUserControls = () => ({
  type: HIDE_USER_CONTROLS
})

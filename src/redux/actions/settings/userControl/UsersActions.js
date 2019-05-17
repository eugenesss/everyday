/**
 * Users Actions
 */
import { 
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,

  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_END,

  GET_USER_FAILURE,


  SHOW_ADD_USER,
  HIDE_ADD_USER,
  SHOW_USER_CONTROLS,
  HIDE_USER_CONTROLS,
} from "Types";

/**
 * GET All Users
 */
export const getAllUsers = () => ({
  type: GET_ALL_USERS
});
export const getAllUsersSuccess = (users) => ({
  type: GET_ALL_USERS_SUCCESS,
  payload: users
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
 * Get User Failure
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

export const hideUserControls =() => ({
  type: HIDE_USER_CONTROLS
})

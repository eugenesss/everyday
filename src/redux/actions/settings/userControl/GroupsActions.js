/**
 * Groups Actions
 */
import {
  GET_ALL_GROUPS,
  GET_ALL_GROUPS_SUCCESS,

  ADD_GROUP,
  ADD_GROUP_SUCCESS,
  ADD_GROUP_FAILURE,

  ON_CHANGE_UPDATE_GROUP,
  UPDATE_GROUP,
  UPDATE_GROUP_SUCCESS,
  UPDATE_GROUP_FAILURE,

  DELETE_GROUP,
  DELETE_GROUP_SUCCESS,
  DELETE_GROUP_FAILURE,
  
  GET_GROUP_FAILURE,

  CHANGE_SELECTED_GROUP,
} from "Types";

/**
 * Get All Groups
 */
export const getAllGroups = () => ({
  type: GET_ALL_GROUPS
});
export const getAllGroupsSuccess = (groups, groupRoles) => ({
  type: GET_ALL_GROUPS_SUCCESS,
  payload: {groups, groupRoles}
});

/**
 * Add Group
 */
export const addGroup = () => ({
  type: ADD_GROUP
});
export const addGroupSuccess = (group) => ({
  type: ADD_GROUP_SUCCESS,
  payload: group
});
export const addGroupFailure = (err) => ({
  type: ADD_GROUP_FAILURE,
  payload: err
});

/**
 * Update Group
 */
export const onChangeUpdateGroup = (field, value) => ({
  type: ON_CHANGE_UPDATE_GROUP,
  payload: {field, value}
});
export const updateGroup = () => ({
  type: UPDATE_GROUP
});
export const updateGroupSuccess = (group) => ({
  type: UPDATE_GROUP_SUCCESS,
  payload: group
});
export const updateGroupFailure = (err) => ({
  type: UPDATE_GROUP_FAILURE,
  payload: err
});

/**
 * Delete Group
 */
export const deleteGroup = () => ({
  type: DELETE_GROUP
});
export const deleteGroupSuccess = (data) => ({
  type: DELETE_GROUP_SUCCESS,
  payload: data
});
export const deleteGroupFailure = (err) => ({
  type: DELETE_GROUP_FAILURE,
  payload: err
})

/**
 * Get Group Failure
 */
export const getGroupFailure = (err) => ({
  type: GET_GROUP_FAILURE,
  payload: err
});


/**
 * State Changes
 */
export const onChangeSelectedGroup = (newValue) => ({
  type: CHANGE_SELECTED_GROUP,
  payload: newValue
});
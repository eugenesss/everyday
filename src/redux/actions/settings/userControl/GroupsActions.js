/**
 * Groups Actions
 */
import {
  GET_ALL_GROUPS,
  GET_ALL_GROUPS_SUCCESS,
  
  GET_GROUP_FAILURE,

  CHANGE_SELECTED_GROUP,
} from "Types";

/**
 * Get All Groups
 */
export const getAllGroups = () => ({
  type: GET_ALL_GROUPS
});
export const getAllGroupsSuccess = (groups) => ({
  type: GET_ALL_GROUPS_SUCCESS,
  payload: groups
});

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
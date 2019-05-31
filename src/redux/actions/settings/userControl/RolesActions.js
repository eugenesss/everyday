/**
 * Roles Actions
 */
import {
  GET_ALL_ROLES,
  GET_ALL_ROLES_SUCCESS,
  
  GET_ROLE_FAILURE,

  CHANGE_SELECTED_ROLE,
  CHANGE_SELECTED_GROUP_ROLES,
} from "Types";

/**
 * Get All Roles
 */
export const getAllRoles = () => ({
  type: GET_ALL_ROLES
});
export const getAllRolesSuccess = (roles, crud) => ({
  type: GET_ALL_ROLES_SUCCESS,
  payload: {roles, crud}
});

/**
 * Get Role Failure
 */
export const getRoleFailure = (err) => ({
  type: GET_ROLE_FAILURE,
  payload: err
});


/**
 * State Changes
 */
export const onChangeSelectedRole = (newValue) => ({
  type: CHANGE_SELECTED_ROLE,
  payload: newValue
});
export const onChangeSelectedGroupRoles = (selectedHierarchies) => ({
  type: CHANGE_SELECTED_GROUP_ROLES,
  payload: selectedHierarchies
})
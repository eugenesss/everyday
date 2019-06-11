/**
 * Roles Actions
 */
import {
  GET_ALL_ROLES,
  GET_ALL_ROLES_SUCCESS,
  
  ADD_ROLE,
  ADD_ROLE_SUCCESS,
  ADD_ROLE_FAILURE,
  
  ON_CHANGE_UPDATE_ROLE,
  UPDATE_ROLE,
  UPDATE_ROLE_SUCCESS,
  UPDATE_ROLE_FAILURE,
  
  DELETE_ROLE,
  DELETE_ROLE_SUCCESS,
  DELETE_ROLE_FAILURE,

  GET_ROLE_FAILURE,

  CHANGE_SELECTED_ROLE,
  CHANGE_SELECTED_ACCESS_RIGHTS_CATEGORY,
} from "Types";

/**
 * Get All Roles
 */
export const getAllRoles = () => ({
  type: GET_ALL_ROLES
});
export const getAllRolesSuccess = (roles, operations, accessRights, accessRoles) => ({
  type: GET_ALL_ROLES_SUCCESS,
  payload: {roles, operations, accessRights, accessRoles}
});

/**
 * Add Role
 */
export const addRole = () => ({
  type: ADD_ROLE
});
export const addRoleSuccess = (role) => ({
  type: ADD_ROLE_SUCCESS,
  payload: role
});
export const addRoleFailure = (err) => ({
  type: ADD_ROLE_FAILURE,
  payload: err
});

/**
 * Update Role
 */
export const onChangeUpdateRole = (field, value) => ({
  type: ON_CHANGE_UPDATE_ROLE,
  payload: {field, value}
});
export const updateRole = () => ({
  type: UPDATE_ROLE,
});
export const updateRoleSuccess = (role) => ({
  type: UPDATE_ROLE_SUCCESS,
  payload: role
});
export const updateRoleFailure = (err) => ({
  type: UPDATE_ROLE_FAILURE,
  payload: err
});

/**
 * Delete Role
 */
export const deleteRole = () => ({
  type: DELETE_ROLE
});
export const deleteRoleSuccess = (role) => ({
  type: DELETE_ROLE_SUCCESS,
  payload: role
});
export const deleteRoleFailure = (err) => ({
  type: DELETE_ROLE_FAILURE,
  payload: err
})

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
export const onChangeSelectedAccessRightsCategory = (newValue) => ({
  type: CHANGE_SELECTED_ACCESS_RIGHTS_CATEGORY,
  payload: newValue
})
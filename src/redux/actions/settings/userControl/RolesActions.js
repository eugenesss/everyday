/**
 * Redux App Settings Actions
 */
import {
  GET_ALL_ROLES,
  CHANGE_SELECTED_ROLE,
} from "Types";

/**
 * Get All Users
 */
export const getAllRoles = () => ({
  type: GET_ALL_ROLES
});
/**
 * Change Selected Role
 */
export const changeSelectedRole = (newValue) => ({
  type: CHANGE_SELECTED_ROLE,
  payload: newValue
})
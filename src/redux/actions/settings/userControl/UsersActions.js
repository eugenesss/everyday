/**
 * Users Actions
 */
import { GET_ALL_USERS, SHOW_ADD_USER, HIDE_ADD_USER } from "Types";

/**
 * Get All Users
 */
export const getAllUsers = () => ({
  type: GET_ALL_USERS
});
/**
 * Show Add User
 */
export const showAddUser = () => ({
  type: SHOW_ADD_USER
});
/**
 * Hide Add User
 */
export const hideAddUser = () => ({
  type: HIDE_ADD_USER
});

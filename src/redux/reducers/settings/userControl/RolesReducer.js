/**
 * Roles Reducers
 */
import { NotificationManager } from "react-notifications";
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
 } from "Types";

const INIT_STATE = {
  selectedRole: null,
  rolesLoading: false,
  crudPermissions: [],
  operations: [],
  roles: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    /**
     * Get All Roles
     */
    case GET_ALL_ROLES:
      return { 
        ...state,
        rolesLoading: true
      };
    case GET_ALL_ROLES_SUCCESS:
      return {
        ...state,
        rolesLoading: false,
        roles: action.payload.roles,
        crudPermissions: action.payload.crud,
        operations: action.payload.operations
      }

    /**
     * Add Role
     */
    case ADD_ROLE:
      return {
        ...state,
        rolesLoading: true
      }
    case ADD_ROLE_SUCCESS:
      //var allRoles = Object.assign([], state.roles)
      //var roles = [...allRoles, action.payload]
      NotificationManager.success("New Role Created")
      return {
        ...state,
        //roles: roles,
        rolesLoading: false
      }
    case ADD_ROLE_FAILURE:
      NotificationManager.warning("Failed to Create Role")
      return {
        ...state,
        rolesLoading: false
      }
    
    /**
     * Update Role
     */
    case ON_CHANGE_UPDATE_ROLE:
      return{
        ...state,
        selectedRole: {
          ...state.selectedRole,
          [action.payload.field]: action.payload.value
        }
      }
    case UPDATE_ROLE:
      return {
        ...state,
        rolesLoading: true
      }
    case UPDATE_ROLE_SUCCESS:
      NotificationManager.success("Role Updated")
      return {
        ...state,
        rolesLoading: false
      }
    case UPDATE_ROLE_FAILURE:
      NotificationManager.warning("Failed to Update Role")
      return {
        ...state,
        rolesLoding: false
      }

    /**
     * Delete Role
     */
    case DELETE_ROLE:
      return {
        ...state,
        rolesLoading: true
      }
    case DELETE_ROLE_SUCCESS:
      NotificationManager.success("Role Deleted")
      return {
        ...state,
        rolesLoading: false
      }
    case DELETE_ROLE_FAILURE:
      NotificationManager.warning("Failed to Delete Role")
      return {
        ...state,
        rolesLoading: false
      }
    
    /**
     * Get Role Failure
     */
    case GET_ROLE_FAILURE: 
      NotificationManager.warning("Error in fetching Role Data");
      console.log(action.payload);
      return INIT_STATE;

    /**
     * State Changes
     */
    case CHANGE_SELECTED_ROLE:
      var selectedRole = action.payload
      if(action.payload == "Super Admin")
        selectedRole = null
      return { 
        ...state,
        selectedRole: selectedRole,
      };
      
    default:
      return { ...state };
  }
};

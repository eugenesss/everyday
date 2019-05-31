/**
 * Roles Reducers
 */
import { NotificationManager } from "react-notifications";
import { 
  GET_ALL_ROLES,
  GET_ALL_ROLES_SUCCESS,
  
  GET_ROLE_FAILURE,

  CHANGE_SELECTED_ROLE,
 } from "Types";

const INIT_STATE = {
  selectedRole: null,
  rolesLoading: false,
  crudPermissions: [],
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

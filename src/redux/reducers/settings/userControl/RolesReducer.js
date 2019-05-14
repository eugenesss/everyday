/**
 * Users Reducers
 */
import { NotificationManager } from "react-notifications";
import { 
  GET_ALL_ROLES,
  CHANGE_SELECTED_ROLE,
 } from "Types";

const INIT_STATE = {
  selectedRole: null,
  crudPermissions: [
    { action: "User" },
    { action: "Lead" },
    { action: "Customer" },
    { action: "Account"},
    { action: "Deal "},
  ],
  roles: [
    {
      id: 0,
      name: "Director",
      permissions: [],
    },
    {
      id: 1,
      name: "Developer",
      permissions: [],
    },
    {
      id: 2,
      name: "Member",
      permissions: [],
    }
  ],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_ROLES:
      return { ...state };

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

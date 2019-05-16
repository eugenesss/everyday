/**
 * Users Reducers
 */
import { NotificationManager } from "react-notifications";
import { 
  GET_ALL_USERS,
  SHOW_ADD_USER,
  HIDE_ADD_USER,
  SHOW_USER_CONTROLS,
  HIDE_USER_CONTROLS,
 } from "Types";

const INIT_STATE = {
  users: [
    {
      fullName: "Lim Jeng",
      email: "limjeng@ocdigitalnetwork.com",
      contact: "98765432",
      role: [],
      linkedIn: "asd.linkedin.com"
    }
  ],
  usersLoading: false,
  isAddUser: false,
  isUserControl: false,
  userToAdd: {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    role: "",
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state };

    case SHOW_ADD_USER:
      return {
        ...state,
        isAddUser: true,
      }
    
    case HIDE_ADD_USER:
      return {
        ...state,
        isAddUser: false,
      }
    
    case SHOW_USER_CONTROLS:
      return {
        ...state,
        isUserControl: true,
      }
    
    case HIDE_USER_CONTROLS:
      return {
        ...state,
        isUserControl: false,
      }

    default:
      return { ...state };
  }
};

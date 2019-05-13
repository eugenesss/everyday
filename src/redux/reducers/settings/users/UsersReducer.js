/**
 * Auth User Reducers
 */
import { NotificationManager } from "react-notifications";
import { GET_ALL_USERS, SHOW_ADD_USER, HIDE_ADD_USER } from "Types";

/**
 * initial auth user
 */
const INIT_STATE = {
  userToAdd: {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    role: ""
  },
  users: [],
  usersLoading: false,
  isAddUser: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state };

    case SHOW_ADD_USER:
      console.log("add");
      return {
        ...state,
        isAddUser: true
      };

    case HIDE_ADD_USER:
      return {
        ...state,
        isAddUser: false
      };

    default:
      return { ...state };
  }
};

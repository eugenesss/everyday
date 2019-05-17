/**
 * Users Reducers
 */
import { NotificationManager } from "react-notifications";
import { 
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,

  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_END,

  GET_USER_FAILURE,


  SHOW_ADD_USER,
  HIDE_ADD_USER,
  SHOW_USER_CONTROLS,
  HIDE_USER_CONTROLS,
 } from "Types";

const INIT_STATE = {
  me: {}, //AuthUser
  users: [],
  usersLoading: false,
  isAddUser: false,
  isUserControl: false,
  userProfile: {},
  profileLoading: false,
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

    /**
     * GET All Users
     */
    case GET_ALL_USERS:
      return { 
        ...state,
        usersLoading: true,
       };
      
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        usersLoading: false,
        users: action.payload,
        me: action.payload[1] //AuthUser
      }

    /**
     * Get User Profile
     */
    case GET_USER_PROFILE:
      return {
        ...state,
        profileLoading: true
      }
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        profileLoading: false,
        userProfile: action.payload
      }
    case GET_USER_PROFILE_END:
      return {
        ...state,
        useProfile: {}
      }

    /**
     * GET_USER_FAILURE
     */
    case GET_USER_FAILURE:
      NotificationManager.warning("Error in fetching User Data");
      console.log(action.payload);
      return INIT_STATE;


    /**
     * State Changes
     */
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

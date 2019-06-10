/**
 * Users Reducers
 */
import { NotificationManager } from "react-notifications";
import { 
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,

  ON_CHANGE_ADD_USER,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,

  UPDATE_USER_START,
  ON_CHANGE_UPDATE_USER,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,

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
  userControl: {},

  userProfile: {},
  profileLoading: false,
  
  userUpdate: null,
  userAdd: {
    role: []
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
     * ADD User
     */
    case ON_CHANGE_ADD_USER:
      return {
        ...state,
        userAdd: {
          ...state.userAdd,
          [action.payload.field]: action.payload.value
        }
      }
    case ADD_USER:
      return {
        ...state,
        isAddUser: false,
        usersLoading: true,
      }
    case ADD_USER_SUCCESS:
      // var allUsers = Object.assign([], state.users);
      // var users = [...allUsers, action.payload];
      NotificationManager.success("User Added")
      return {
        ...state,
        userAdd: INIT_STATE.userAdd,
        usersLoading: false,
        // user: users
      }
    case ADD_USER_FAILURE:
      NotificationManager.error("Failed to Add User")
      return {
        ...state,
        usersLoading: false
      }

    /**
     * UPDATE User
     */
    case UPDATE_USER_START:
      return {
        ...state,
        userUpdate: action.payload
      }
    case ON_CHANGE_UPDATE_USER:
      return {
        ...state,
        userUpdate: {
          ...state.userUpdate,
          [action.payload.field] : action.payload.value
        }
      }
    case UPDATE_USER:
      return {
        ...state,
        profileLoading: true
      }
    case UPDATE_USER_SUCCESS:
      NotificationManager.success("User Updated")
      return {
        ...state,
        profileLoading: false,
        userUpdate: action.payload
      }
    case UPDATE_USER_FAILURE:
      NotificationManager.error("Failed to Update User")
      return {
        ...state,
        profileLoading: false,
      }
    

    /**
     * GET User Profile
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
        userProfile: INIT_STATE.userProfile
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
        userControl: action.payload
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

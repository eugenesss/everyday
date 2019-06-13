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
  ON_CHANGE_UPDATE_ROLE_RIGHTS,
  UPDATE_ROLE,
  UPDATE_ROLE_SUCCESS,
  UPDATE_ROLE_FAILURE,
  
  DELETE_ROLE,
  DELETE_ROLE_SUCCESS,
  DELETE_ROLE_FAILURE,
  
  GET_ROLE_FAILURE,

  CHANGE_SELECTED_ROLE,
  CHANGE_SELECTED_ACCESS_RIGHTS_CATEGORY
 } from "Types";
 
const INIT_STATE = {
  selectedRole: {
    name: "Super Admin",
    id: ""
  },
  rolesLoading: false,
  selectedAccessRightsCategory: null,
  accessRights: [],
  accessRoles: [],
  roleRights: [],
  selectedRoleRights: [],
};



export default (state = INIT_STATE, action) => {
  function updateAccessRoleState(role) {
    var roles = Object.assign([], state.accessRoles).map(rol =>
      rol.id == role.id ? (rol = role) : rol
    );
    return roles;
  }
  function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
          map.set(key, [item]);
      } else {
          collection.push(item);
      }
    });
    return map;
  }

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
      let accessRights = action.payload.accessRights
      let accessRightsCategory = [...groupBy(accessRights, (right) => right.categoryName).values()]
      let accessRightsModel = []
      for (let i = 0; i < accessRightsCategory.length; i++) {
        accessRightsModel.push([...groupBy(accessRightsCategory[i], (right) => right.model).values()])
      }
      return {
        ...state,
        rolesLoading: false,
        accessRights: accessRightsModel,
        accessRoles: action.payload.accessRoles,
        roleRights: action.payload.roleRights,
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
      var allRoles = Object.assign([], state.accessRoles)
      var accessRoles = [...allRoles, action.payload]
      NotificationManager.success("New Role Created")
      return {
        ...state,
        accessRoles: accessRoles,
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
      return {
        ...state,
        selectedRole: {
          ...state.selectedRole,
          [action.payload.field]: action.payload.value
        }
      }
    case ON_CHANGE_UPDATE_ROLE_RIGHTS:
      return {
        ...state,
        selectedRoleRights: action.payload
      }
    case UPDATE_ROLE:
      return {
        ...state,
        rolesLoading: true
      }
    case UPDATE_ROLE_SUCCESS:
      var accessRoles = updateAccessRoleState(action.payload)
      NotificationManager.success("Role Updated")
      return {
        ...state,
        rolesLoading: false,
        accessRoles: accessRoles
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
      var selectedRole = {}
      if(action.payload == "Super Admin")
        selectedRole.name = action.payload
      else {
        selectedRole = action.payload
        var selectedRights = state.roleRights.find(right => {
          return right.roleId == action.payload.id
        }).rights
        selectedRole.id = action.payload.id
      }
      return { 
        ...state,
        selectedRole: selectedRole,
        selectedRoleRights: selectedRights
      };
    case CHANGE_SELECTED_ACCESS_RIGHTS_CATEGORY:
      let selectedAccessRightsCategory = action.payload
      if(action.payload == state.selectedAccessRightsCategory)
        selectedAccessRightsCategory = null
      return {
        ...state,
        selectedAccessRightsCategory: selectedAccessRightsCategory
      }
      
    default:
      return { ...state };
  }
};

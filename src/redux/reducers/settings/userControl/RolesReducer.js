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
  CHANGE_SELECTED_ACCESS_RIGHTS_CATEGORY,
  CHANGE_SELECTED_GROUP_ROLE,
 } from "Types";
 
const INIT_STATE = {
  selectedRole: {},
  rolesLoading: false,
  selectedAccessRightsCategory: null,  // State to control expansion panel in Roles & Permissions Settings
  accessRights: [], // All Rights
  accessRoles: [],  // All Roles
  roleRights: [],  // Rights belonging to corresponding roles
  selectedRoleRights: [], // Access rights belonging to selected role
  selectedRoleGroups: [],  // Roles belonging to selected group (GroupsManager.js)
  unselectedRoleGroups: [],  // Roles not belonging to selected group (GroupsManager.js)
};


export default (state = INIT_STATE, action) => {
  function updateAccessRoleState(role) {
    var roles = Object.assign([], state.accessRoles).map(rol =>
      rol.id == role.id ? (rol = role) : rol
    );
    return roles;
  }
  function groupBy(list, keyGetter) {  // to group array into nested objects base on selected attributes
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
    case ON_CHANGE_UPDATE_ROLE: // On change selected role attributes; name etc.
      return {
        ...state,
        selectedRole: {
          ...state.selectedRole,
          [action.payload.field]: action.payload.value
        }
      }
    case ON_CHANGE_UPDATE_ROLE_RIGHTS:  // On change checkboxes in Roles & Permissions Settings
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
      return INIT_STATE;

    /**
     * State Changes
     */
    case CHANGE_SELECTED_ROLE:  // Change selected role in Role List (RolesList.js)
      let selectedRole = action.payload
      let selectedRights = state.roleRights.find(right => {
        return right.roleId == action.payload.id
      }).rights
      selectedRole.id = action.payload.id

      return { 
        ...state,
        selectedRole: selectedRole,
        selectedRoleRights: selectedRights
      };
    case CHANGE_SELECTED_ACCESS_RIGHTS_CATEGORY:  // Change selected category to control expansion panel in Role Manager (RolesManager.js)
      let selectedAccessRightsCategory = action.payload
      if(action.payload == state.selectedAccessRightsCategory)
        selectedAccessRightsCategory = null
      return {
        ...state,
        selectedAccessRightsCategory: selectedAccessRightsCategory
      }
    case CHANGE_SELECTED_GROUP_ROLE:  // Change list of roles assigned and not assign to group in Groups List (GroupsList.js)
      let selectedGroupRoles = action.payload
      var allRoles = Object.assign([], state.accessRoles)
      var selectedRoles = allRoles.filter(role => selectedGroupRoles.find(groupRole => {groupRole.accessRoleId == role.id}))
      var unselectedRoles = allRoles.filter(role => !selectedGroupRoles.find(groupRole => {groupRole.accessRoleId == role.id}))
      return {
        ...state,
        selectedRoleGroups: selectedRoles,
        unselectedRoleGroups: unselectedRoles
      }
      
    default:
      return { ...state };
  }
};

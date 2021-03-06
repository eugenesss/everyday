/**
 * Users Reducers
 */
import { NotificationManager } from "react-notifications";
import {
  GET_ALL_GROUPS,
  GET_ALL_GROUPS_SUCCESS,

  ADD_GROUP,
  ADD_GROUP_SUCCESS,
  ADD_GROUP_FAILURE,

  ON_CHANGE_UPDATE_GROUP,
  UPDATE_GROUP,
  UPDATE_GROUP_SUCCESS,
  UPDATE_GROUP_FAILURE,

  DELETE_GROUP,
  DELETE_GROUP_SUCCESS,
  DELETE_GROUP_FAILURE,

  GET_GROUP_FAILURE,

  CHANGE_SELECTED_GROUP,
  CHANGE_TIER_NUM
} from "Types";

const INIT_STATE = {
  selectedGroup: null,
  groupsLoading: false,
  accessGroups: [], // All Groups
  accessGroupRoles: [], // All Group Roles
  selectedGroupRoles: []  // Selected Group Roles corresponding to selected group
};

export default (state = INIT_STATE, action) => {
  function updateAccessGroupState(group) {
    var groups = Object.assign([], state.accessGroups).map(g =>
      g.id == group.id ? (g = group) : g
    );
    return groups;
  }
  switch (action.type) {
    /**
     * Get All Groups
     */
    case GET_ALL_GROUPS:
      return {
        ...state,
        groupsLoading: true
      };
    case GET_ALL_GROUPS_SUCCESS:
      const allgroups = action.payload.groups;
      //var allgroups = [];
      /*
      allusergroupsettings.forEach(userSetting => {
        var addgroups = userSetting.groups.filter(group => {
          return -1 === allgroups.findIndex(grp => { return grp.id === group.id });
        });
        allgroups = allgroups.concat(addgroups);
      });
      */
      return {
        ...state,
        groupsLoading: false,
        accessGroups: allgroups
      }

    /**
     * Add Group
     */
    case ADD_GROUP:
      return {
        ...state,
        groupsLoading: true
      }
    case ADD_GROUP_SUCCESS:
      var allGroups = Object.assign([], state.accessGroups)
      var accessGroups = [...allGroups, action.payload]
      NotificationManager.success("Group Added")
      return {
        ...state,
        groupsLoading: false,
        accessGroups: accessGroups
      }
    case ADD_GROUP_FAILURE:
      NotificationManager.warning("Error in creating New Group")
      return {
        ...state,
        groupsLoading: false
      }

    /**
     * Update Group
     */
    case ON_CHANGE_UPDATE_GROUP:
      return {
        ...state,
        selectedGroup: {
          ...state.selectedGroup,
          [action.payload.field]: action.payload.value
        }
      }
    case UPDATE_GROUP:
      return {
        ...state,
        groupsLoading: true
      }
    case UPDATE_GROUP_SUCCESS:
      var accessGroups = action.payload;
      var selectedGroup = state.selectedGroup;
      var newSelected = accessGroups.find(group => { return group.id == selectedGroup.id });

      NotificationManager.success("Group Updated")

      var selectedGroupRoles = newSelected.roles;
      var allRoles = Object.assign([], state.accessRoles);
      var selectedRoles = allRoles.filter(role => { return selectedGroupRoles.findIndex(groupRole => { return groupRole.roleId == role.id }) >= 0 });
      var unselectedRoles = allRoles.filter(role => { return selectedGroupRoles.findIndex(groupRole => { return groupRole.roleId == role.id }) < 0 });
      var removedRoleName = ""
      var addedRoleName = "";
      return {
        ...state,
        groupsLoading: false,
        accessGroups: accessGroups,
        removedRoleName: removedRoleName,
        addedRoleName: addedRoleName,
        selectedGroup: selectedGroup,
        selectedGroupRoles: selectedGroupRoles,
        selectedRoleGroups: selectedRoles,
        unselectedRoleGroups: unselectedRoles
      }
    case UPDATE_GROUP_FAILURE:
      NotificationManager.warning("Error in updating Group Name")
      return {
        ...state,
        groupsLoading: false
      }

    /**
     * Delete Group
     */
    case DELETE_GROUP:
      return {
        ...state,
        groupsLoading: true
      }
    case DELETE_GROUP_SUCCESS:
      NotificationManager.success("Group Deleted")
      return {
        ...state,
        groupsLoading: false
      }
    case DELETE_GROUP_FAILURE:
      NotificationManager.warning("Error Deleting Group")
      return {
        ...state,
        groupsLoading: false
      }

    /**
     * Get Group Failure
     */
    case GET_GROUP_FAILURE:
      NotificationManager.warning("Error in fetching Group Data");
      return INIT_STATE;

    /**
     * State Changes
     */
    case CHANGE_SELECTED_GROUP:
      /*
      var selectedGroupRoles = Object.assign([], state.accessGroupRoles).filter(groupRole =>
        groupRole.accessGroupId == action.payload.id
      );
      */
      var selectedGroupRoles = action.payload.roles;
      return {
        ...state,
        selectedGroup: action.payload,
        selectedGroupRoles: selectedGroupRoles
      };
    case CHANGE_TIER_NUM:
      var selectedVals = action.payload.split("-");
      var selectedGroupRoles = [...state.selectedGroupRoles];
      for (const i in selectedGroupRoles) {
        if (selectedGroupRoles[i].id == selectedVals[0]) {
          selectedGroupRoles[i].tier = parseInt(selectedVals[1]);
          break;
        }
      }
      return {
        ...state,
        selectedGroupRoles: selectedGroupRoles
      }

    default:
      return { ...state };
  }
};

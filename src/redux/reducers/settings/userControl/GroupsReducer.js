/**
 * Users Reducers
 */
import { NotificationManager } from "react-notifications";
import { 
  GET_ALL_GROUPS,
  GET_ALL_GROUPS_SUCCESS,
  
  GET_GROUP_FAILURE,

  CHANGE_SELECTED_GROUP,
 } from "Types";

const INIT_STATE = {
  selectedGroup: null,
  selectedHierarchies: [],
  groupsLoading: false,
  groups: [],
  hierarchies: [],
};

export default (state = INIT_STATE, action) => {
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
      return {
        ...state,
        groupsLoading: false,
        groups: action.payload.groups,
        hierarchies: action.payload.hierarchies,
      }

    /**
     * Get Group Failure
     */
    case GET_GROUP_FAILURE: 
      NotificationManager.warning("Error in fetching Group Data");
      console.log(action.payload);
      return INIT_STATE;

    /**
     * State Changes
     */
    case CHANGE_SELECTED_GROUP:
      const selectedHierarchies = state.hierarchies.filter(hierarchy => hierarchy.group == action.payload.id);
      return { 
        ...state,
        selectedGroup: action.payload,
        selectedHierarchies: selectedHierarchies,
      };
      
    default:
      return { ...state };
  }
};

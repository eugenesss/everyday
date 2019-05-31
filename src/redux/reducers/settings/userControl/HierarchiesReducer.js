/**
 * Hierarchy Reducers
 */
import { NotificationManager } from "react-notifications";
import { 
  GET_ALL_HIERARCHIES,
  GET_ALL_HIERARCHIES_SUCCESS,

  ADD_HIERARCHY,
  ADD_HIERARCHY_SUCCESS,
  ADD_HIERARCHY_FAILURE,

  ON_CHANGE_UPDATE_HIERARCHY,
  UPDATE_HIERARCHY,
  UPDATE_HIERARCHY_SUCCESS,
  UPDATE_HIERARCHY_FAILURE,

  DELETE_HIERARCHY,
  DELETE_HIERARCHY_SUCCESS,
  DELETE_HIERARCHY_FAILURE,
  
  GET_HIERARCHY_FAILURE,

  CHANGE_SELECTED_GROUP_HIERARCHIES,
 } from "Types";

const INIT_STATE = {
  hierarchies: [],
  hierarchiesLoading: false,
  selectedHierarchies: [],
  selectedGroupID: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    /**
     * Get All Hierarchies
     */
    case GET_ALL_HIERARCHIES:
      return { 
        ...state,
        hierarchiesLoading: true
      };
    case GET_ALL_HIERARCHIES_SUCCESS:
      return {
        ...state,
        hierarchiesLoading: false,
        hierarchies: action.payload,
      }

    /**
     * Add Hierarchy
     */
    case ADD_HIERARCHY:
      return {
        ...state,
        hierarchiesLoading: true
      }
    case ADD_HIERARCHY_SUCCESS:
      //To Update Hierarchies State
      var selectedHierarchies = state.hierarchies.filter(hierarchy => hierarchy.group.id == state.selectedGroupID); 
      NotificationManager.success("Role added to Group")
      return {
        ...state,
        hierarchiesLoading: false,
        selectedHierarchies: selectedHierarchies
      }
    case ADD_HIERARCHY_FAILURE:
      NotificationManager.warning("Failed to add Role to Group")
      return {
        ...state,
        hierarchiesLoading: false
      }

    /**
     * Delete Hierarchy
     */
    case DELETE_HIERARCHY:
      return {
        ...state,
        hierarchiesLoading: true
      }
    case DELETE_HIERARCHY_SUCCESS:
      //To Update Hierarchies State
      var selectedHierarchies = state.hierarchies.filter(hierarchy => hierarchy.group.id == state.selectedGroupID); 
      NotificationManager.success("Role removed from Group")
      return {
        ...state,
        hierarchiesLoading: false,
        selectedHierarchies: selectedHierarchies
      }
    case DELETE_HIERARCHY_FAILURE:
      NotificationManager.warning("Failed to remove Role from Group")
      return {
        ...state,
        hierarchiesLoading: false
      }

    /**
     * Get Hierarchy Failure
     */
    case GET_HIERARCHY_FAILURE: 
      NotificationManager.warning("Error in fetching Hierarchy Data");
      console.log(action.payload);
      return INIT_STATE;
      
    /**
     * State Changes
     */
    case CHANGE_SELECTED_GROUP_HIERARCHIES:
        var selectedHierarchies = state.hierarchies.filter(hierarchy => hierarchy.group.id == action.payload.id);
      return { 
        ...state,
        selectedHierarchies: selectedHierarchies,
        selectedGroupID: action.payload.id
      };
      
    default:
      return { ...state };
  }
};

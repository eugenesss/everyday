/**
 * Hierarchy Actions
 */
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

  CHANGE_SELECTED_GROUP_HIERARCHIES
} from "Types";

/**
 * Get All Hierarchies
 */
export const getAllHierarchies = () => ({
  type: GET_ALL_HIERARCHIES
});
export const getAllHierarchiesSuccess = (hierarchies) => ({
  type: GET_ALL_HIERARCHIES_SUCCESS,
  payload: hierarchies
});

/**
 * Add Hierarchy
 */
export const addHierarchy = (role) => ({
  type: ADD_HIERARCHY,
  payload: role
});
export const addHierarchySuccess = (hierarchy) => ({
  type: ADD_HIERARCHY_SUCCESS,
  payload: hierarchy
});
export const addHierarchyFailure = (err) => ({
  type: ADD_HIERARCHY_FAILURE,
  payload: err
});

/**
 * Update Hierarchy
 */
export const onChangeUpdateHierarchy = (roleID, value) => ({
  type: ON_CHANGE_UPDATE_HIERARCHY,
  payload: {roleID, value}
});
export const updateHierarchy = () => ({
  type: UPDATE_HIERARCHY
});
export const updateHierarchySuccess = (hierarchies) => ({
  type: UPDATE_HIERARCHY_SUCCESS,
  payload: hierarchies
})
export const updateHierarchyFailure = (err) => ({
  type: UPDATE_HIERARCHY_FAILURE,
  payload: err
})

/**
 * Delete Hierarchy
 */
export const deleteHierarchy = (role) => ({
  type: DELETE_HIERARCHY,
  payload: role
})
export const deleteHierarchySuccess = (hierarchy) => ({
  type: DELETE_HIERARCHY_SUCCESS,
  payload: hierarchy
})
export const deleteHierarchyFailure = (err) => ({
  type: DELETE_HIERARCHY_FAILURE,
  payload: err
})

/**
 * Get Hierarchy Failure
 */
export const getHierarchyFailure = (err) => ({
  type: GET_HIERARCHY_FAILURE,
  payload: err
});

/**
 * State Changes
 */
export const onChangeSelectedGroupHierarchies = (selectedGroup) => ({
  type: CHANGE_SELECTED_GROUP_HIERARCHIES,
  payload: selectedGroup
})
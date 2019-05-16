import {
  LEAD_LIST_DROPDOWN,
  CHANGE_LEAD_LIST_VIEW,
  TOGGLE_LEAD_SUMMARY,
  GET_LEAD_FAILURE,
  GET_LEAD_SUCCESS,
  GET_ALL_LEAD,
  GET_MY_LEAD,
  GET_OPEN_LEAD,
  GET_HOT_LEAD,
  GET_COLD_LEAD,
  GET_SINGLE_LEAD,
  GET_SINGLE_LEAD_SUCCESS,
  CLEAR_SINGLE_LEAD
} from "Types";

/**
 * Change List View
 */
export const changeLeadView = newValue => ({
  type: CHANGE_LEAD_LIST_VIEW,
  payload: newValue
});
/**
 * Toggle DropDown
 */
export const toggleLeadDropDown = () => ({
  type: LEAD_LIST_DROPDOWN
});
/**
 * Toggle Summary List
 */
export const toggleLeadSummary = () => ({
  type: TOGGLE_LEAD_SUMMARY
});

/**
 * Get Lead Failure
 */
export const getLeadFailure = error => ({
  type: GET_LEAD_FAILURE,
  payload: error
});

/**
 * Get Lead Success
 */
export const getLeadSuccess = data => ({
  type: GET_LEAD_SUCCESS,
  payload: data
});

/**
 * Get All Leads
 */
export const getAllLead = () => ({
  type: GET_ALL_LEAD
});

/**
 * Get My Leads
 */
export const getMyLead = () => ({
  type: GET_MY_LEAD
});

/**
 * Get Open Leads
 */
export const getOpenLead = () => ({
  type: GET_OPEN_LEAD
});

/**
 * Get Hot Leads
 */
export const getHotLead = () => ({
  type: GET_HOT_LEAD
});

/**
 * Get Cold Leads
 */
export const getColdLead = () => ({
  type: GET_COLD_LEAD
});

/**
 * Get Single Lead
 */
export const getSingleLead = leadID => ({
  type: GET_SINGLE_LEAD,
  payload: leadID
});
export const getSingleLeadSuccess = leadData => ({
  type: GET_SINGLE_LEAD_SUCCESS,
  payload: leadData
});
export const clearSingleLead = () => ({
  type: CLEAR_SINGLE_LEAD
});

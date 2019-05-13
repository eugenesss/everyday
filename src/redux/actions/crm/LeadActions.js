import {
  LEAD_LIST_DROPDOWN,
  CHANGE_LEAD_LIST_VIEW,
  TOGGLE_LEAD_SUMMARY,
  GET_LEAD_FAILURE,
  GET_ALL_LEAD,
  GET_MY_LEAD,
  GET_OPEN_LEAD,
  GET_CLOSED_LEAD,
  GET_ALL_LEAD_SUCCESS,
  GET_MY_LEAD_SUCCESS,
  GET_OPEN_LEAD_SUCCESS,
  GET_CLOSED_LEAD_SUCCESS
} from "../types";

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
 * Get All Quotes
 */
export const getAllLead = () => ({
  type: GET_ALL_LEAD
});
export const getAllLeadSuccess = data => ({
  type: GET_ALL_LEAD_SUCCESS,
  payload: data
});

/**
 * Get My Quotes
 */
export const getMyLead = () => ({
  type: GET_MY_LEAD
});
export const getMyLeadSuccess = data => ({
  type: GET_MY_LEAD_SUCCESS,
  payload: data
});

/**
 * Get My Quotes
 */
export const getOpenLead = () => ({
  type: GET_OPEN_LEAD
});
export const getOpenLeadSuccess = data => ({
  type: GET_OPEN_LEAD_SUCCESS,
  payload: data
});

/**
 * Get My Quotes
 */
export const getClosedLead = () => ({
  type: GET_CLOSED_LEAD
});
export const getClosedLeadSuccess = data => ({
  type: GET_CLOSED_LEAD_SUCCESS,
  payload: data
});

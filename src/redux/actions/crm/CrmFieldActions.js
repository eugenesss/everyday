import {
  GET_CRM_FIELDS_FAILURE,
  GET_LEAD_SOURCE,
  GET_LEAD_SOURCE_SUCCESS,
  GET_LEAD_STATUS,
  GET_LEAD_STATUS_SUCCESS,
  GET_INDUSTRY,
  GET_INDUSTRY_SUCCESS
} from "Types";

export const getCrmFieldFailure = error => ({
  type: GET_CRM_FIELDS_FAILURE,
  payload: error
});

/**
 * Get Lead Source
 */
export const getLeadSource = () => ({
  type: GET_LEAD_SOURCE
});
export const getLeadSourceSuccess = data => ({
  type: GET_LEAD_SOURCE_SUCCESS,
  payload: data
});

/**
 * Get Lead Status
 */
export const getLeadStatus = () => ({
  type: GET_LEAD_STATUS
});
export const getLeadStatusSuccess = data => ({
  type: GET_LEAD_STATUS_SUCCESS,
  payload: data
});

/**
 * Get Industry
 */
export const getIndustry = () => ({
  type: GET_INDUSTRY
});
export const getIndustrySuccess = data => ({
  type: GET_INDUSTRY_SUCCESS,
  payload: data
});

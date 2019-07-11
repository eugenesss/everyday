import * as types from "Types/system/ReportTypes";

//=====================
// Reports Failure
//=====================
export const getReportFailure = error => ({
  type: types.GET_REPORT_FAILURE,
  payload: error
});

//=====================
// Deal Reports
//=====================

// Deal by Owner
export const getDealsByOwner = (start, end) => ({
  type: types.GET_DEALS_BY_OWNER,
  payload: { start, end }
});
export const getDealsByOwnerSuccess = data => ({
  type: types.GET_DEALS_BY_OWNER_SUCCESS,
  payload: data
});

// Deal by Type
export const getDealsByType = (start, end) => ({
  type: types.GET_DEALS_BY_TYPE,
  payload: { start, end }
});
export const getDealsByTypeSuccess = data => ({
  type: types.GET_DEALS_BY_TYPE_SUCCESS,
  payload: data
});

// Deals Pipeline
export const getDealsPipeline = (start, end) => ({
  type: types.GET_DEALS_PIPELINE,
  payload: { start, end }
});
export const getDealsPipelineSuccess = data => ({
  type: types.GET_DEALS_PIPELINE_SUCCESS,
  payload: data
});

//=====================
// Lead Reports
//=====================

// Lead by status
export const getLeadsByStatus = (start, end) => ({
  type: types.GET_LEADS_BY_STATUS,
  payload: { start, end }
});
export const getLeadsByStatusSuccess = data => ({
  type: types.GET_LEADS_BY_STATUS_SUCCESS,
  payload: data
});

// Lead by owner
export const getLeadsByOwner = (start, end) => ({
  type: types.GET_LEADS_BY_OWNER,
  payload: { start, end }
});
export const getLeadsByOwnerSuccess = data => ({
  type: types.GET_LEADS_BY_OWNER_SUCCESS,
  payload: data
});

// Lead by source
export const getLeadsBySource = (start, end) => ({
  type: types.GET_LEADS_BY_SOURCE,
  payload: { start, end }
});
export const getLeadsBySourceSuccess = data => ({
  type: types.GET_LEADS_BY_SOURCE_SUCCESS,
  payload: data
});

//=====================
// Individual Reports
//=====================
export const getIndividualReport = staffID => ({
  type: types.GET_INDIVIDUAL_REPORT,
  payload: staffID
});
export const getIndividualReportSuccess = data => ({
  type: types.GET_INDIVIDUAL_REPORT_SUCCESS,
  payload: data
});
export const onChangeStaffSelect = value => ({
  type: types.ON_CHANGE_STAFF_SELECT,
  payload: value
});

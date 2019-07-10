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
export const getLeadReport = () => ({
  type: types.GET_LEAD_REPORT
});
export const getLeadReportSuccess = data => ({
  type: types.GET_LEAD_REPORT_SUCCESS,
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

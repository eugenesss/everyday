import {
  REPORT_ON_DATES_CHANGE,
  REPORT_ON_FOCUS_CHANGE,
  REPORT_RESET_DATES,
  GET_REPORT_FAILURE,
  GET_DEAL_REPORT,
  GET_DEAL_REPORT_SUCCESS,
  GET_LEAD_REPORT,
  GET_LEAD_REPORT_SUCCESS,
  GET_INDIVIDUAL_REPORT,
  GET_INDIVIDUAL_REPORT_SUCCESS,
  ON_CHANGE_STAFF_SELECT
} from "Types";

/**
 * Report Date Range Picker
 */
export const reportOnChangeDate = ({ startDate, endDate }) => ({
  type: REPORT_ON_DATES_CHANGE,
  payload: { startDate, endDate }
});
export const reportOnFocusChange = ({ focusedInput }) => ({
  type: REPORT_ON_FOCUS_CHANGE,
  payload: { focusedInput }
});
export const reportResetDate = () => ({
  type: REPORT_RESET_DATES
});

/**
 * Get Reports Failure
 */
export const getReportFailure = error => ({
  type: GET_REPORT_FAILURE,
  payload: error
});

/**
 * Get Deal Reports
 */
export const getDealReport = () => ({
  type: GET_DEAL_REPORT
});
export const getDealReportSuccess = data => ({
  type: GET_DEAL_REPORT_SUCCESS,
  payload: data
});

/**
 * Get Lead Reports
 */
export const getLeadReport = () => ({
  type: GET_LEAD_REPORT
});
export const getLeadReportSuccess = data => ({
  type: GET_LEAD_REPORT_SUCCESS,
  payload: data
});

/**
 * Get Individual Report
 */
export const getIndividualReport = staffID => ({
  type: GET_INDIVIDUAL_REPORT,
  payload: staffID
});
export const getIndividualReportSuccess = data => ({
  type: GET_INDIVIDUAL_REPORT_SUCCESS,
  payload: data
});
export const onChangeStaffSelect = value => ({
  type: ON_CHANGE_STAFF_SELECT,
  payload: value
});

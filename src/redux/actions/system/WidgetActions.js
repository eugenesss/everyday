import * as types from "Types/system/WidgetTypes";

export const getCrmSummary = () => ({
  type: types.GET_CRM_SUMMARY
});
export const getCrmSummarySuccess = data => ({
  type: types.GET_CRM_SUMMARY_SUCCESS,
  payload: data
});
export const getCrmSummaryFailure = error => ({
  type: types.GET_CRM_SUMMARY_FAILURE,
  payload: error
});

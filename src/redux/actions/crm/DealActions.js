import {
  DEAL_LIST_DROPDOWN,
  CHANGE_DEAL_LIST_VIEW,
  TOGGLE_DEAL_SUMMARY,
  GET_DEAL_FAILURE,
  GET_DEAL_SUCCESS,
  GET_ALL_DEAL,
  GET_MY_DEAL,
  GET_OPEN_DEAL,
  GET_CLOSED_DEAL,
  GET_WON_DEAL,
  GET_SINGLE_DEAL,
  GET_SINGLE_DEAL_SUCCESS,
  CLEAR_SINGLE_DEAL,
  GET_DEAL_SUMMARY,
  GET_DEAL_SUMMARY_SUCCESS,
  GET_DEAL_SUMMARY_FAILURE,
  HANDLE_CHANGE_DEAL,
  SUBMIT_DEAL,
  CLEAR_DEAL_FORM,
  SUBMIT_DEAL_SUCCESS,
  SUBMIT_DEAL_ERROR,
  ON_CLICK_STEP,
  SET_CURRENT_STEP,
  ON_CHANGE_STEP_STATE,
  ON_SUBMIT_NEW_STAGE,
  ON_SUBMIT_NEW_STAGE_SUCCESS,
  ON_SUBMIT_NEW_STAGE_FAILURE
} from "Types";

/**
 * Change List View
 */
export const changeDealView = newValue => ({
  type: CHANGE_DEAL_LIST_VIEW,
  payload: newValue
});
/**
 * Toggle DropDown
 */
export const toggleDealDropDown = () => ({
  type: DEAL_LIST_DROPDOWN
});
/**
 * Toggle Summary List
 */
export const toggleDealSummary = () => ({
  type: TOGGLE_DEAL_SUMMARY
});

/**
 * Get DEAL Failure
 */
export const getDealFailure = error => ({
  type: GET_DEAL_FAILURE,
  payload: error
});

/**
 * Get DEAL Success
 */
export const getDealSuccess = data => ({
  type: GET_DEAL_SUCCESS,
  payload: data
});

/**
 * Get All DEALs
 */
export const getAllDeal = () => ({
  type: GET_ALL_DEAL
});

/**
 * Get My DEALs
 */
export const getMyDeal = () => ({
  type: GET_MY_DEAL
});

/**
 * Get Open DEALs
 */
export const getOpenDeal = () => ({
  type: GET_OPEN_DEAL
});

/**
 * Get Closed DEALs
 */
export const getClosedDeal = () => ({
  type: GET_CLOSED_DEAL
});

/**
 * Get Won DEALs
 */
export const getWonDeal = () => ({
  type: GET_WON_DEAL
});

/**
 * Get Single Deal
 */
export const getSingleDeal = dealId => ({
  type: GET_SINGLE_DEAL,
  payload: dealId
});
export const getSingleDealSuccess = dealData => ({
  type: GET_SINGLE_DEAL_SUCCESS,
  payload: dealData
});
export const clearSingleDeal = () => ({
  type: CLEAR_SINGLE_DEAL
});

/**
 * Get Deal Summary
 */
export const getDealSummary = () => ({
  type: GET_DEAL_SUMMARY
});
export const getDealSummarySuccess = data => ({
  type: GET_DEAL_SUMMARY_SUCCESS,
  payload: data
});
export const getDealSummaryFailure = error => ({
  type: GET_DEAL_SUMMARY_FAILURE,
  payload: error
});

/**
 * New Deal
 */
export const handleChangeDeal = (field, value) => ({
  type: HANDLE_CHANGE_DEAL,
  payload: { value, field }
});
export const submitDeal = () => ({
  type: SUBMIT_DEAL
});
export const clearDealForm = () => ({
  type: CLEAR_DEAL_FORM
});
export const submitDealSuccess = data => ({
  type: SUBMIT_DEAL_SUCCESS,
  payload: data
});
export const submitDealError = error => ({
  type: SUBMIT_DEAL_ERROR,
  payload: error
});

/**
 * Handle Deal Stage
 */
export const onClickStep = step => ({
  type: ON_CLICK_STEP,
  payload: step
});
export const setCurrentStep = currentStep => ({
  type: SET_CURRENT_STEP,
  payload: currentStep
});
export const onChangeStepState = () => ({
  type: ON_CHANGE_STEP_STATE
});
export const submitNewStage = (dealID, stageID) => ({
  type: ON_SUBMIT_NEW_STAGE,
  payload: { dealID, stageID }
});
export const newStageSuccess = deal => ({
  type: ON_SUBMIT_NEW_STAGE_SUCCESS,
  payload: deal
});
export const newStageFailure = error => ({
  type: ON_SUBMIT_NEW_STAGE_FAILURE,
  payload: error
});

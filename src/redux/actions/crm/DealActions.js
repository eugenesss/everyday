import * as dealType from "Types/crm/DealTypes";
/**
 * Change List View
 */
export const changeDealView = newValue => ({
  type: dealType.CHANGE_DEAL_LIST_VIEW,
  payload: newValue
});

/**
 * Get DEAL Failure
 */
export const getDealFailure = error => ({
  type: dealType.GET_DEAL_FAILURE,
  payload: error
});

/**
 * Get DEAL Success
 */
export const getDealSuccess = data => ({
  type: dealType.GET_DEAL_SUCCESS,
  payload: data
});

/**
 * Get All DEALs
 */
export const getAllDeal = () => ({
  type: dealType.GET_ALL_DEAL
});

/**
 * Get My DEALs
 */
export const getMyDeal = () => ({
  type: dealType.GET_MY_DEAL
});

/**
 * Get Open DEALs
 */
export const getOpenDeal = () => ({
  type: dealType.GET_OPEN_DEAL
});

/**
 * Get Closed DEALs
 */
export const getClosedDeal = () => ({
  type: dealType.GET_CLOSED_DEAL
});

/**
 * Get Won DEALs
 */
export const getWonDeal = () => ({
  type: dealType.GET_WON_DEAL
});

/**
 * Get Single Deal
 */
export const getSingleDeal = dealId => ({
  type: dealType.GET_SINGLE_DEAL,
  payload: dealId
});
export const getSingleDealSuccess = dealData => ({
  type: dealType.GET_SINGLE_DEAL_SUCCESS,
  payload: dealData
});
export const clearSingleDeal = () => ({
  type: dealType.CLEAR_SINGLE_DEAL
});

/**
 * Get Deal Summary
 */
export const getDealSummary = () => ({
  type: dealType.GET_DEAL_SUMMARY
});
export const getDealSummarySuccess = data => ({
  type: dealType.GET_DEAL_SUMMARY_SUCCESS,
  payload: data
});
export const getDealSummaryFailure = error => ({
  type: dealType.GET_DEAL_SUMMARY_FAILURE,
  payload: error
});

/**
 * New Deal
 */

export const newDeal = form => ({
  type: dealType.NEW_DEAL,
  payload: form
});

export const newDealSuccess = data => ({
  type: dealType.NEW_DEAL_SUCCESS,
  payload: data
});
export const newDealFailure = error => ({
  type: dealType.NEW_DEAL_FAILURE,
  payload: error
});

/**
 * Edit
 */
export const editDeal = form => ({
  type: dealType.EDIT_DEAL,
  payload: form
});
export const editDealSuccess = data => ({
  type: dealType.EDIT_DEAL_SUCCESS,
  payload: data
});
export const editDealFailure = error => ({
  type: dealType.EDIT_DEAL_FAILURE,
  payload: error
});

/**
 * Handle Deal Stage
 */
export const onClickStep = step => ({
  type: dealType.ON_CLICK_STEP,
  payload: step
});
export const setCurrentStep = currentStep => ({
  type: dealType.SET_CURRENT_STEP,
  payload: currentStep
});
export const onChangeStepState = () => ({
  type: dealType.ON_CHANGE_STEP_STATE
});
export const submitNewStage = (dealID, stageID) => ({
  type: dealType.ON_SUBMIT_NEW_STAGE,
  payload: { dealID, stageID }
});
export const newStageSuccess = deal => ({
  type: dealType.ON_SUBMIT_NEW_STAGE_SUCCESS,
  payload: deal
});
export const newStageFailure = error => ({
  type: dealType.ON_SUBMIT_NEW_STAGE_FAILURE,
  payload: error
});

/**
 * Delete
 */
export const deleteDeal = id => ({
  type: dealType.DELETE_DEAL,
  payload: id
});
export const deleteDealSuccess = id => ({
  type: dealType.DELETE_DEAL_SUCCESS,
  payload: id
});
export const deleteDealFailure = error => ({
  type: dealType.DELETE_DEAL_FAILURE,
  payload: error
});

/**
 * Notes
 */
export const addNoteDeal = (id, note) => ({
  type: dealType.ADD_NOTE_DEAL,
  payload: { id, note }
});
export const addNoteDealSuccess = data => ({
  type: dealType.ADD_NOTE_DEAL_SUCCESS,
  payload: data
});
export const addNoteDealFailure = error => ({
  type: dealType.ADD_NOTE_DEAL_FAILURE,
  payload: error
});

/**
 * Transfer
 */
export const transferDeal = (id, newOwner) => ({
  type: dealType.TRANSFER_DEAL,
  payload: { id, newOwner }
});
export const transferDealSuccess = data => ({
  type: dealType.TRANSFER_DEAL_SUCCESS,
  payload: data
});
export const transferDealFailure = error => ({
  type: dealType.TRANSFER_DEAL_FAILURE,
  payload: error
});

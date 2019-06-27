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
export const handleChangeDeal = (field, value) => ({
  type: dealType.HANDLE_CHANGE_DEAL,
  payload: { value, field }
});
export const submitDeal = () => ({
  type: dealType.SUBMIT_DEAL
});
export const clearDealForm = () => ({
  type: dealType.CLEAR_DEAL_FORM
});
export const submitDealSuccess = data => ({
  type: dealType.SUBMIT_DEAL_SUCCESS,
  payload: data
});
export const submitDealError = error => ({
  type: dealType.SUBMIT_DEAL_ERROR,
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
 * Edit
 */
export const startDealEdit = Deal => ({
  type: dealType.START_DEAL_EDIT,
  payload: Deal
});
export const submitEditDeal = () => ({
  type: dealType.SUBMIT_EDIT_DEAL
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

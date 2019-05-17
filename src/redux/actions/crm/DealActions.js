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
  CLEAR_SINGLE_DEAL
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

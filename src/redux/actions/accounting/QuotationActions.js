import {
  QUOTATION_LIST_DROPDOWN,
  CHANGE_QUOTATION_LIST_VIEW,
  TOGGLE_QUOTATION_SUMMARY,
  GET_QUOTATION_FAILURE,
  GET_ALL_QUOTATION,
  GET_MY_QUOTATION,
  GET_OPEN_QUOTATION,
  GET_CLOSED_QUOTATION,
  GET_ALL_QUOTATION_SUCCESS,
  GET_MY_QUOTATION_SUCCESS,
  GET_OPEN_QUOTATION_SUCCESS,
  GET_CLOSED_QUOTATION_SUCCESS
} from "../types";

/**
 * Change List View
 */
export const changeQuotationView = newValue => ({
  type: CHANGE_QUOTATION_LIST_VIEW,
  payload: newValue
});
/**
 * Toggle DropDown
 */
export const toggleQuotationDropDown = () => ({
  type: QUOTATION_LIST_DROPDOWN
});
/**
 * Toggle Summary List
 */
export const toggleQuotationSummary = () => ({
  type: TOGGLE_QUOTATION_SUMMARY
});

/**
 * Get Quotation Failure
 */
export const getQuotationFailure = error => ({
  type: GET_QUOTATION_FAILURE,
  payload: error
});

/**
 * Get All Quotes
 */
export const getAllQuotation = () => ({
  type: GET_ALL_QUOTATION
});
export const getAllQuotationSuccess = data => ({
  type: GET_ALL_QUOTATION_SUCCESS,
  payload: data
});

/**
 * Get My Quotes
 */
export const getMyQuotation = () => ({
  type: GET_MY_QUOTATION
});
export const getMyQuotationSuccess = data => ({
  type: GET_MY_QUOTATION_SUCCESS,
  payload: data
});

/**
 * Get My Quotes
 */
export const getOpenQuotation = () => ({
  type: GET_OPEN_QUOTATION
});
export const getOpenQuotationSuccess = data => ({
  type: GET_OPEN_QUOTATION_SUCCESS,
  payload: data
});

/**
 * Get My Quotes
 */
export const getClosedQuotation = () => ({
  type: GET_CLOSED_QUOTATION
});
export const getClosedQuotationSuccess = data => ({
  type: GET_CLOSED_QUOTATION_SUCCESS,
  payload: data
});

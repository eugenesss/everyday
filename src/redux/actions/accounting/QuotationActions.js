import {
  QUOTATION_LIST_DROPDOWN,
  CHANGE_QUOTATION_LIST_VIEW,
  TOGGLE_QUOTATION_SUMMARY,
  GET_QUOTATION_FAILURE,
  GET_ALL_QUOTATION,
  GET_MY_QUOTATION,
  GET_OPEN_QUOTATION,
  GET_CLOSED_QUOTATION,
  GET_QUOTATION_SUCCESS,
  GET_SINGLE_QUOTATION,
  GET_SINGLE_QUOTATION_SUCCESS,
  CLEAR_SINGLE_QUOTATION
} from "Types";

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
 * Get Quotes Success
 */
export const getQuotationSuccess = data => ({
  type: GET_QUOTATION_SUCCESS,
  payload: data
});

/**
 * Get All Quotes
 */
export const getAllQuotation = () => ({
  type: GET_ALL_QUOTATION
});

/**
 * Get My Quotes
 */
export const getMyQuotation = () => ({
  type: GET_MY_QUOTATION
});

/**
 * Get Open Quotes
 */
export const getOpenQuotation = () => ({
  type: GET_OPEN_QUOTATION
});

/**
 * Get Closed Quotes
 */
export const getClosedQuotation = () => ({
  type: GET_CLOSED_QUOTATION
});

/**
 * Get Single Quote
 */
export const getSingleQuotation = quoteID => ({
  type: GET_SINGLE_QUOTATION,
  payload: quoteID
});
export const getSingleQuotationSuccess = quoteData => ({
  type: GET_SINGLE_QUOTATION_SUCCESS,
  payload: quoteData
});
export const clearSingleQuotation = () => ({
  type: CLEAR_SINGLE_QUOTATION
});

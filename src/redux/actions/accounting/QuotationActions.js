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
  CLEAR_SINGLE_QUOTATION,
  GET_QUOTE_SUMMARY,
  GET_QUOTE_SUMMARY_SUCCESS,
  GET_QUOTE_SUMMARY_FAILURE,
  HANDLE_CHANGE_QUOTATION,
  SUBMIT_QUOTATION,
  SUBMIT_QUOTATION_SUCCESS,
  SUBMIT_QUOTATION_FAILURE,
  DELETE_QUOTATION,
  DELETE_QUOTATION_SUCCESS,
  DELETE_QUOTATION_FAILURE,
  CLEAR_QUOTATION_FORM,
  ADD_NEW_PRODUCT_QUOTATION,
  REMOVE_PRODUCT_QUOTATION,
  HANDLE_PRODUCT_QUOTATION,
  HANDLE_RELATED_TO_QUOTATION,
  HANDLE_ATTN_TO_QUOTATION,
  HANDLE_DISCOUNT_TAX_QUOTATION
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

/**
 * Get Quote Summary
 */
export const getQuotationSummary = () => ({
  type: GET_QUOTE_SUMMARY
});
export const getQuotationSummarySuccess = data => ({
  type: GET_QUOTE_SUMMARY_SUCCESS,
  payload: data
});
export const getQuotationSummaryFailure = error => ({
  type: GET_QUOTE_SUMMARY_FAILURE,
  payload: error
});

/**
 * New Quote
 */
export const submitNewQuote = (item, products) => ({
  type: SUBMIT_QUOTATION,
  payload: {item: item, products: products}
  // payload: item

});

export const submitNewQuoteSuccess = (item) => ({
  type: SUBMIT_QUOTATION_SUCCESS,
  payload: item
});

export const submitNewQuoteFailure = (item) => ({
  type: SUBMIT_QUOTATION_FAILURE,
  payload: item
});

export const clearQuoteForm = () => ({
  type: CLEAR_QUOTATION_FORM
});

/**
 * Delete Quotation in DB
 */
export const deleteSingleQuote = (item) => ({
  type: DELETE_QUOTATION,
  payload: item
});

export const deleteSingleQuoteSuccess = (item) => ({
  type: DELETE_QUOTATION_SUCCESS,
  payload: item
});

export const deleteSingleQuoteFailure = (item) => ({
  type: DELETE_QUOTATION_FAILURE,
  payload: item
});


/**
 * Quote Product List
 */
export const addNewProdQuote = () => ({
  type: ADD_NEW_PRODUCT_QUOTATION
});
export const removeProdQuote = key => ({
  type: REMOVE_PRODUCT_QUOTATION,
  payload: key
});

/**
 * Handle Change
 */
export const handleProdQuote = (key, field, value) => ({
  type: HANDLE_PRODUCT_QUOTATION,
  payload: { key, field, value }
});
export const handleChangeQuote = (field, value) => ({
  type: HANDLE_CHANGE_QUOTATION,
  payload: { field, value }
});
export const handleRelatedQuotation = value => ({
  type: HANDLE_RELATED_TO_QUOTATION,
  payload: value
});
export const handleAttnToQuote = value => ({
  type: HANDLE_ATTN_TO_QUOTATION,
  payload: value
});
export const handleDisTaxQuote = (field, value) => ({
  type: HANDLE_DISCOUNT_TAX_QUOTATION,
  payload: { field, value }
});

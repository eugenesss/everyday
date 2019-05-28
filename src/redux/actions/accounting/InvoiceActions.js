import {
  INVOICE_LIST_DROPDOWN,
  CHANGE_INVOICE_LIST_VIEW,
  TOGGLE_INVOICE_SUMMARY,
  GET_INVOICE_FAILURE,
  GET_ALL_INVOICE,
  GET_MY_INVOICE,
  GET_OPEN_INVOICE,
  GET_CLOSED_INVOICE,
  GET_INVOICE_SUCCESS,
  GET_SINGLE_INVOICE,
  GET_SINGLE_INVOICE_SUCCESS,
  CLEAR_SINGLE_INVOICE,
  GET_INVOICE_SUMMARY,
  GET_INVOICE_SUMMARY_SUCCESS,
  GET_INVOICE_SUMMARY_FAILURE
} from "Types";

/**
 * Change List View
 */
export const changeInvoiceView = newValue => ({
  type: CHANGE_INVOICE_LIST_VIEW,
  payload: newValue
});
/**
 * Toggle DropDown
 */
export const toggleInvoiceDropDown = () => ({
  type: INVOICE_LIST_DROPDOWN
});
/**
 * Toggle Summary List
 */
export const toggleInvoiceSummary = () => ({
  type: TOGGLE_INVOICE_SUMMARY
});

/**
 * Get Invoice Failure
 */
export const getInvoiceFailure = error => ({
  type: GET_INVOICE_FAILURE,
  payload: error
});

/**
 * Get Invoice Success
 */
export const getInvoiceSuccess = data => ({
  type: GET_INVOICE_SUCCESS,
  payload: data
});

/**
 * Get All Invoice
 */
export const getAllInvoice = () => ({
  type: GET_ALL_INVOICE
});

/**
 * Get My Invoice
 */
export const getMyInvoice = () => ({
  type: GET_MY_INVOICE
});

/**
 * Get Open Invoice
 */
export const getOpenInvoice = () => ({
  type: GET_OPEN_INVOICE
});

/**
 * Get Closed Invoice
 */
export const getClosedInvoice = () => ({
  type: GET_CLOSED_INVOICE
});

/**
 * Get Single Invoice
 */
export const getSingleInvoice = invID => ({
  type: GET_SINGLE_INVOICE,
  payload: invID
});
export const getSingleInvoiceSuccess = data => ({
  type: GET_SINGLE_INVOICE_SUCCESS,
  payload: data
});
export const clearSingleInvoice = () => ({
  type: CLEAR_SINGLE_INVOICE
});

/**
 * Get Invoice Summary
 */
export const getInvoiceSummary = () => ({
  type: GET_INVOICE_SUMMARY
});
export const getInvoiceSummarySuccess = data => ({
  type: GET_INVOICE_SUMMARY_SUCCESS,
  payload: data
});
export const getInvoiceSummaryFailure = error => ({
  type: GET_INVOICE_SUMMARY_FAILURE,
  payload: error
});

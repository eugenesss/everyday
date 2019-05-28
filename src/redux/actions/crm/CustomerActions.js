import {
  CUSTOMER_LIST_DROPDOWN,
  CHANGE_CUSTOMER_LIST_VIEW,
  TOGGLE_CUSTOMER_SUMMARY,
  GET_CUSTOMER_FAILURE,
  GET_CUSTOMER_SUCCESS,
  GET_ALL_CUSTOMER,
  GET_MY_CUSTOMER,
  GET_OPEN_CUSTOMER,
  GET_SINGLE_CUSTOMER,
  GET_SINGLE_CUSTOMER_SUCCESS,
  CLEAR_SINGLE_CUSTOMER,
  GET_CUSTOMER_SUMMARY,
  GET_CUSTOMER_SUMMARY_SUCCESS,
  GET_CUSTOMER_SUMMARY_FAILURE,
  HANDLE_CHANGE_CUSTOMER,
  SUBMIT_CUSTOMER,
  CLEAR_CUSTOMER_FORM,
  SUBMIT_CUSTOMER_SUCCESS,
  SUBMIT_CUSTOMER_ERROR
} from "Types";

/**
 * Change List View
 */
export const changeCustomerView = newValue => ({
  type: CHANGE_CUSTOMER_LIST_VIEW,
  payload: newValue
});
/**
 * Toggle DropDown
 */
export const toggleCustomerDropDown = () => ({
  type: CUSTOMER_LIST_DROPDOWN
});
/**
 * Toggle Summary List
 */
export const toggleCustomerSummary = () => ({
  type: TOGGLE_CUSTOMER_SUMMARY
});

/**
 * Get CUSTOMER Failure
 */
export const getCustomerFailure = error => ({
  type: GET_CUSTOMER_FAILURE,
  payload: error
});

/**
 * Get CUSTOMER Success
 */
export const getCustomerSuccess = data => ({
  type: GET_CUSTOMER_SUCCESS,
  payload: data
});

/**
 * Get All CUSTOMERs
 */
export const getAllCustomer = () => ({
  type: GET_ALL_CUSTOMER
});

/**
 * Get My CUSTOMERs
 */
export const getMyCustomer = () => ({
  type: GET_MY_CUSTOMER
});

/**
 * Get Open CUSTOMERs
 */
export const getOpenCustomer = () => ({
  type: GET_OPEN_CUSTOMER
});

/**
 * Get Single Customer
 */
export const getSingleCustomer = custID => ({
  type: GET_SINGLE_CUSTOMER,
  payload: custID
});
export const getSingleCustomerSuccess = custData => ({
  type: GET_SINGLE_CUSTOMER_SUCCESS,
  payload: custData
});
export const clearSingleCustomer = () => ({
  type: CLEAR_SINGLE_CUSTOMER
});

/**
 * Get Customer Summary
 */
export const getCustomerSummary = () => ({
  type: GET_CUSTOMER_SUMMARY
});
export const getCustomerSummarySuccess = data => ({
  type: GET_CUSTOMER_SUMMARY_SUCCESS,
  payload: data
});
export const getCustomerSummaryFailure = error => ({
  type: GET_CUSTOMER_SUMMARY_FAILURE,
  payload: error
});

/**
 * New Customer
 */
export const handleChangeCustomer = (field, value) => ({
  type: HANDLE_CHANGE_CUSTOMER,
  payload: { value, field }
});
export const submitCustomer = () => ({
  type: SUBMIT_CUSTOMER
});
export const clearCustomerForm = () => ({
  type: CLEAR_CUSTOMER_FORM
});
export const submitCustomerSuccess = data => ({
  type: SUBMIT_CUSTOMER_SUCCESS,
  payload: data
});
export const submitCustomerError = error => ({
  type: SUBMIT_CUSTOMER_ERROR,
  payload: error
});

import {
  CUSTOMER_LIST_DROPDOWN,
  CHANGE_CUSTOMER_LIST_VIEW,
  TOGGLE_CUSTOMER_SUMMARY,
  GET_CUSTOMER_FAILURE,
  GET_CUSTOMER_SUCCESS,
  GET_ALL_CUSTOMER,
  GET_MY_CUSTOMER,
  GET_OPEN_CUSTOMER
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

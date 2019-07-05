import * as custType from "Types/crm/CustomerTypes";

/**
 * Change List View
 */
export const changeCustomerView = newValue => ({
  type: custType.CHANGE_CUSTOMER_LIST_VIEW,
  payload: newValue
});

/**
 * Get CUSTOMER Failure
 */
export const getCustomerFailure = error => ({
  type: custType.GET_CUSTOMER_FAILURE,
  payload: error
});

/**
 * Get CUSTOMER Success
 */
export const getCustomerSuccess = data => ({
  type: custType.GET_CUSTOMER_SUCCESS,
  payload: data
});

/**
 * Get All CUSTOMERs
 */
export const getAllCustomer = () => ({
  type: custType.GET_ALL_CUSTOMER
});

/**
 * Get My CUSTOMERs
 */
export const getMyCustomer = () => ({
  type: custType.GET_MY_CUSTOMER
});

/**
 * Get Open CUSTOMERs
 */
export const getOpenCustomer = () => ({
  type: custType.GET_OPEN_CUSTOMER
});

/**
 * Get Single Customer
 */
export const getSingleCustomer = custID => ({
  type: custType.GET_SINGLE_CUSTOMER,
  payload: custID
});
export const getSingleCustomerSuccess = custData => ({
  type: custType.GET_SINGLE_CUSTOMER_SUCCESS,
  payload: custData
});
export const clearSingleCustomer = () => ({
  type: custType.CLEAR_SINGLE_CUSTOMER
});

/**
 * New Customer
 */

export const newCustomer = form => ({
  type: custType.NEW_CUSTOMER,
  payload: form
});

export const newCustomerSuccess = data => ({
  type: custType.NEW_CUSTOMER_SUCCESS,
  payload: data
});
export const newCustomerFailure = error => ({
  type: custType.NEW_CUSTOMER_FAILURE,
  payload: error
});

/**
 * Edit
 */

export const editCustomer = form => ({
  type: custType.EDIT_CUSTOMER,
  payload: form
});
export const editCustomerSuccess = data => ({
  type: custType.EDIT_CUSTOMER_SUCCESS,
  payload: data
});
export const editCustomerFailure = error => ({
  type: custType.EDIT_CUSTOMER_FAILURE,
  payload: error
});

/**
 * Delete
 */
export const deleteCustomer = id => ({
  type: custType.DELETE_CUSTOMER,
  payload: id
});
export const deleteCustomerSuccess = id => ({
  type: custType.DELETE_CUSTOMER_SUCCESS,
  payload: id
});
export const deleteCustomerFailure = error => ({
  type: custType.DELETE_CUSTOMER_FAILURE,
  payload: error
});

/**
 * Notes
 */
export const addNoteCustomer = (id, note) => ({
  type: custType.ADD_NOTE_CUSTOMER,
  payload: { id, note }
});
export const addNoteCustomerSuccess = data => ({
  type: custType.ADD_NOTE_CUSTOMER_SUCCESS,
  payload: data
});
export const addNoteCustomerFailure = error => ({
  type: custType.ADD_NOTE_CUSTOMER_FAILURE,
  payload: error
});

/**
 * Set Active
 */
export const setCustomerActive = (id, status) => ({
  type: custType.SET_CUSTOMER_ACTIVE,
  payload: { id, status }
});
export const setCustomerActiveSuccess = data => ({
  type: custType.SET_CUSTOMER_ACTIVE_SUCCESS,
  payload: data
});
export const setCustomerActiveFailure = error => ({
  type: custType.SET_CUSTOMER_ACTIVE_FAILURE,
  payload: error
});

/**
 * Transfer
 */
export const transferCustomer = (id, newOwner) => ({
  type: custType.TRANSFER_CUSTOMER,
  payload: { id, newOwner }
});
export const transferCustomerSuccess = data => ({
  type: custType.TRANSFER_CUSTOMER_SUCCESS,
  payload: data
});
export const transferCustomerFailure = error => ({
  type: custType.TRANSFER_CUSTOMER_FAILURE,
  payload: error
});

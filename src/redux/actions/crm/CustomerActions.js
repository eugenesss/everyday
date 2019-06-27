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
export const handleChangeCustomer = (field, value, type) => ({
  type: custType.HANDLE_CHANGE_CUSTOMER,
  payload: { value, field, type }
});
export const submitCustomer = () => ({
  type: custType.SUBMIT_CUSTOMER
});
export const clearCustomerForm = () => ({
  type: custType.CLEAR_CUSTOMER_FORM
});
export const submitCustomerSuccess = data => ({
  type: custType.SUBMIT_CUSTOMER_SUCCESS,
  payload: data
});
export const submitCustomerError = error => ({
  type: custType.SUBMIT_CUSTOMER_ERROR,
  payload: error
});

/**
 * Edit
 */
export const startCustomerEdit = cust => ({
  type: custType.START_CUSTOMER_EDIT,
  payload: cust
});
export const submitEditCustomer = () => ({
  type: custType.SUBMIT_EDIT_CUSTOMER
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

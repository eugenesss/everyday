import {
  CHANGE_CUSTOMER_LIST_VIEW,
  GET_CUSTOMER_FAILURE,
  GET_CUSTOMER_SUCCESS,
  GET_ALL_CUSTOMER,
  GET_MY_CUSTOMER,
  GET_OPEN_CUSTOMER,
  GET_SINGLE_CUSTOMER,
  GET_SINGLE_CUSTOMER_SUCCESS,
  CLEAR_SINGLE_CUSTOMER,
  HANDLE_CHANGE_CUSTOMER,
  SUBMIT_CUSTOMER,
  CLEAR_CUSTOMER_FORM,
  SUBMIT_CUSTOMER_SUCCESS,
  SUBMIT_CUSTOMER_ERROR,
  START_CUSTOMER_EDIT,
  SUBMIT_EDIT_CUSTOMER,
  ADD_NOTE_CUSTOMER,
  ADD_NOTE_CUSTOMER_SUCCESS,
  ADD_NOTE_CUSTOMER_FAILURE,
  SET_CUSTOMER_ACTIVE,
  SET_CUSTOMER_ACTIVE_SUCCESS,
  SET_CUSTOMER_ACTIVE_FAILURE
} from "Types";

/**
 * Change List View
 */
export const changeCustomerView = newValue => ({
  type: CHANGE_CUSTOMER_LIST_VIEW,
  payload: newValue
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
 * New Customer
 */
export const handleChangeCustomer = (field, value, type) => ({
  type: HANDLE_CHANGE_CUSTOMER,
  payload: { value, field, type }
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

/**
 * Edit
 */
export const startCustomerEdit = cust => ({
  type: START_CUSTOMER_EDIT,
  payload: cust
});
export const submitEditCustomer = () => ({
  type: SUBMIT_EDIT_CUSTOMER
});

/**
 * Notes
 */
export const addNoteCustomer = (id, note) => ({
  type: ADD_NOTE_CUSTOMER,
  payload: { id, note }
});
export const addNoteCustomerSuccess = data => ({
  type: ADD_NOTE_CUSTOMER_SUCCESS,
  payload: data
});
export const addNoteCustomerFailure = error => ({
  type: ADD_NOTE_CUSTOMER_FAILURE,
  payload: error
});

/**
 * Set Active
 */
export const setCustomerActive = (id, status) => ({
  type: SET_CUSTOMER_ACTIVE,
  payload: { id, status }
});
export const setCustomerActiveSuccess = data => ({
  type: SET_CUSTOMER_ACTIVE_SUCCESS,
  payload: data
});
export const setCustomerActiveFailure = error => ({
  type: SET_CUSTOMER_ACTIVE_FAILURE,
  payload: error
});

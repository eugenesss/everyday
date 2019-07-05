import * as acctType from "Types/crm/AccountTypes";

/**
 * Change List View
 */
export const changeAccountView = newValue => ({
  type: acctType.CHANGE_ACCOUNT_LIST_VIEW,
  payload: newValue
});

/**
 * Get ACCOUNT Failure
 */
export const getAccountFailure = error => ({
  type: acctType.GET_ACCOUNT_FAILURE,
  payload: error
});

/**
 * Get ACCOUNT Success
 */
export const getAccountSuccess = data => ({
  type: acctType.GET_ACCOUNT_SUCCESS,
  payload: data
});

/**
 * Get All ACCOUNTs
 */
export const getAllAccount = () => ({
  type: acctType.GET_ALL_ACCOUNT
});

/**
 * Get My ACCOUNTs
 */
export const getMyAccount = () => ({
  type: acctType.GET_MY_ACCOUNT
});

/**
 * Get Open ACCOUNTs
 */
export const getOpenAccount = () => ({
  type: acctType.GET_OPEN_ACCOUNT
});

/**
 * Get Single Account
 */
export const getSingleAccount = acctID => ({
  type: acctType.GET_SINGLE_ACCOUNT,
  payload: acctID
});
export const getSingleAccountSuccess = acctData => ({
  type: acctType.GET_SINGLE_ACCOUNT_SUCCESS,
  payload: acctData
});
export const clearSingleAccount = () => ({
  type: acctType.CLEAR_SINGLE_ACCOUNT
});

/**
 * New Account
 */
export const newAccount = form => ({
  type: acctType.NEW_ACCOUNT,
  payload: form
});
export const newAccountSuccess = data => ({
  type: acctType.NEW_ACCOUNT_SUCCESS,
  payload: data
});
export const newAccountFailure = error => ({
  type: acctType.NEW_ACCOUNT_FAILURE,
  payload: error
});

/**
 * Edit
 */
export const editAccount = form => ({
  type: acctType.EDIT_ACCOUNT,
  payload: form
});
export const editAccountSuccess = data => ({
  type: acctType.EDIT_ACCOUNT_SUCCESS,
  payload: data
});
export const editAccountFailure = error => ({
  type: acctType.EDIT_ACCOUNT_FAILURE,
  payload: error
});

/**
 * Delete
 */
export const deleteAccount = id => ({
  type: acctType.DELETE_ACCOUNT,
  payload: id
});
export const deleteAccountSuccess = id => ({
  type: acctType.DELETE_ACCOUNT_SUCCESS,
  payload: id
});
export const deleteAccountFailure = error => ({
  type: acctType.DELETE_ACCOUNT_FAILURE,
  payload: error
});

/**
 * Notes
 */
export const addNoteAccount = (id, note) => ({
  type: acctType.ADD_NOTE_ACCOUNT,
  payload: { id, note }
});
export const addNoteAccountSuccess = data => ({
  type: acctType.ADD_NOTE_ACCOUNT_SUCCESS,
  payload: data
});
export const addNoteAccountFailure = error => ({
  type: acctType.ADD_NOTE_ACCOUNT_FAILURE,
  payload: error
});

/**
 * Set Active
 */
export const setAccountActive = (id, status) => ({
  type: acctType.SET_ACCOUNT_ACTIVE,
  payload: { id, status }
});
export const setAccountActiveSuccess = data => ({
  type: acctType.SET_ACCOUNT_ACTIVE_SUCCESS,
  payload: data
});
export const setAccountActiveFailure = error => ({
  type: acctType.SET_ACCOUNT_ACTIVE_FAILURE,
  payload: error
});

/**
 * Transfer
 */
export const transferAccount = (id, newOwner) => ({
  type: acctType.TRANSFER_ACCOUNT,
  payload: { id, newOwner }
});
export const transferAccountSuccess = data => ({
  type: acctType.TRANSFER_ACCOUNT_SUCCESS,
  payload: data
});
export const transferAccountFailure = error => ({
  type: acctType.TRANSFER_ACCOUNT_FAILURE,
  payload: error
});

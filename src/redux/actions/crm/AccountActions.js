import {
  CHANGE_ACCOUNT_LIST_VIEW,
  GET_ACCOUNT_FAILURE,
  GET_ACCOUNT_SUCCESS,
  GET_ALL_ACCOUNT,
  GET_MY_ACCOUNT,
  GET_OPEN_ACCOUNT,
  GET_SINGLE_ACCOUNT,
  GET_SINGLE_ACCOUNT_SUCCESS,
  CLEAR_SINGLE_ACCOUNT,
  HANDLE_CHANGE_ACCOUNT,
  SUBMIT_ACCOUNT,
  CLEAR_ACCOUNT_FORM,
  SUBMIT_ACCOUNT_SUCCESS,
  SUBMIT_ACCOUNT_ERROR,
  START_ACCOUNT_EDIT,
  SUBMIT_EDIT_ACCOUNT
} from "Types";

/**
 * Change List View
 */
export const changeAccountView = newValue => ({
  type: CHANGE_ACCOUNT_LIST_VIEW,
  payload: newValue
});

/**
 * Get ACCOUNT Failure
 */
export const getAccountFailure = error => ({
  type: GET_ACCOUNT_FAILURE,
  payload: error
});

/**
 * Get ACCOUNT Success
 */
export const getAccountSuccess = data => ({
  type: GET_ACCOUNT_SUCCESS,
  payload: data
});

/**
 * Get All ACCOUNTs
 */
export const getAllAccount = () => ({
  type: GET_ALL_ACCOUNT
});

/**
 * Get My ACCOUNTs
 */
export const getMyAccount = () => ({
  type: GET_MY_ACCOUNT
});

/**
 * Get Open ACCOUNTs
 */
export const getOpenAccount = () => ({
  type: GET_OPEN_ACCOUNT
});

/**
 * Get Single Account
 */
export const getSingleAccount = acctID => ({
  type: GET_SINGLE_ACCOUNT,
  payload: acctID
});
export const getSingleAccountSuccess = acctData => ({
  type: GET_SINGLE_ACCOUNT_SUCCESS,
  payload: acctData
});
export const clearSingleAccount = () => ({
  type: CLEAR_SINGLE_ACCOUNT
});

/**
 * New Account
 */
export const handleChangeAccount = (field, value, type) => ({
  type: HANDLE_CHANGE_ACCOUNT,
  payload: { value, field, type }
});
export const submitAccount = () => ({
  type: SUBMIT_ACCOUNT
});
export const clearAccountForm = () => ({
  type: CLEAR_ACCOUNT_FORM
});
export const submitAccountSuccess = data => ({
  type: SUBMIT_ACCOUNT_SUCCESS,
  payload: data
});
export const submitAccountError = error => ({
  type: SUBMIT_ACCOUNT_ERROR,
  payload: error
});

/**
 * Edit
 */
export const startAccountEdit = Account => ({
  type: START_ACCOUNT_EDIT,
  payload: Account
});
export const submitEditAccount = () => ({
  type: SUBMIT_EDIT_ACCOUNT
});

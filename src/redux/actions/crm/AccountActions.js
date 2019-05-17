import {
  ACCOUNT_LIST_DROPDOWN,
  CHANGE_ACCOUNT_LIST_VIEW,
  TOGGLE_ACCOUNT_SUMMARY,
  GET_ACCOUNT_FAILURE,
  GET_ACCOUNT_SUCCESS,
  GET_ALL_ACCOUNT,
  GET_MY_ACCOUNT,
  GET_OPEN_ACCOUNT,
  GET_SINGLE_ACCOUNT,
  GET_SINGLE_ACCOUNT_SUCCESS,
  CLEAR_SINGLE_ACCOUNT
} from "Types";

/**
 * Change List View
 */
export const changeAccountView = newValue => ({
  type: CHANGE_ACCOUNT_LIST_VIEW,
  payload: newValue
});
/**
 * Toggle DropDown
 */
export const toggleAccountDropDown = () => ({
  type: ACCOUNT_LIST_DROPDOWN
});
/**
 * Toggle Summary List
 */
export const toggleAccountSummary = () => ({
  type: TOGGLE_ACCOUNT_SUMMARY
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

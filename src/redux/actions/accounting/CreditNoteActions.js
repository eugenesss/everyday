import {
  CREDIT_NOTE_LIST_DROPDOWN,
  CHANGE_CREDIT_NOTE_LIST_VIEW,
  TOGGLE_CREDIT_NOTE_SUMMARY,
  GET_CREDIT_NOTE_FAILURE,
  GET_ALL_CREDIT_NOTE,
  GET_MY_CREDIT_NOTE,
  GET_OPEN_CREDIT_NOTE,
  GET_CLOSED_CREDIT_NOTE,
  GET_CREDIT_NOTE_SUCCESS,
  GET_SINGLE_CREDIT_NOTE,
  GET_SINGLE_CREDIT_NOTE_SUCCESS,
  CLEAR_SINGLE_CREDIT_NOTE
} from "Types";

/**
 * Change List View
 */
export const changeCreditNoteView = newValue => ({
  type: CHANGE_CREDIT_NOTE_LIST_VIEW,
  payload: newValue
});
/**
 * Toggle DropDown
 */
export const toggleCreditNoteDropDown = () => ({
  type: CREDIT_NOTE_LIST_DROPDOWN
});
/**
 * Toggle Summary List
 */
export const toggleCreditNoteSummary = () => ({
  type: TOGGLE_CREDIT_NOTE_SUMMARY
});

/**
 * Get CreditNote Failure
 */
export const getCreditNoteFailure = error => ({
  type: GET_CREDIT_NOTE_FAILURE,
  payload: error
});

/**
 * Get CreditNote Success
 */
export const getCreditNoteSuccess = data => ({
  type: GET_CREDIT_NOTE_SUCCESS,
  payload: data
});

/**
 * Get All CreditNote
 */
export const getAllCreditNote = () => ({
  type: GET_ALL_CREDIT_NOTE
});

/**
 * Get My CreditNote
 */
export const getMyCreditNote = () => ({
  type: GET_MY_CREDIT_NOTE
});

/**
 * Get Open CreditNote
 */
export const getOpenCreditNote = () => ({
  type: GET_OPEN_CREDIT_NOTE
});

/**
 * Get Closed CreditNote
 */
export const getClosedCreditNote = () => ({
  type: GET_CLOSED_CREDIT_NOTE
});

/**
 * Get Single Invoice
 */
export const getSingleCreditNote = credID => ({
  type: GET_SINGLE_CREDIT_NOTE,
  payload: credID
});
export const getSingleCreditNoteSuccess = data => ({
  type: GET_SINGLE_CREDIT_NOTE_SUCCESS,
  payload: data
});
export const clearSingleCreditNote = () => ({
  type: CLEAR_SINGLE_CREDIT_NOTE
});

import {
  CHANGE_LEAD_LIST_VIEW,
  GET_LEAD_FAILURE,
  GET_LEAD_SUCCESS,
  GET_ALL_LEAD,
  GET_MY_LEAD,
  GET_OPEN_LEAD,
  GET_HOT_LEAD,
  GET_COLD_LEAD,
  GET_SINGLE_LEAD,
  GET_SINGLE_LEAD_SUCCESS,
  CLEAR_SINGLE_LEAD,
  GET_LEAD_SUMMARY,
  GET_LEAD_SUMMARY_SUCCESS,
  GET_LEAD_SUMMARY_FAILURE,
  HANDLE_CHANGE_NEW_LEAD,
  SUBMIT_NEW_LEAD,
  CLEAR_NEW_LEAD,
  NEW_LEAD_SUCCESS,
  NEW_LEAD_ERROR,
  HANDLE_CONVERT_MODAL,
  HANDLE_SUCCESS_CONVERT_MODAL,
  HANDLE_CHANGE_CONVERT_LEAD,
  CONVERT_LEAD,
  CONVERT_LEAD_SUCCESS,
  CONVERT_LEAD_FAILURE,
  UNMOUNT_CONVERT_LEAD,
  START_LEAD_EDIT,
  SUBMIT_EDIT_LEAD,
  DELETE_LEAD,
  DELETE_LEAD_SUCCESS,
  DELETE_LEAD_FAILURE,
  ADD_NOTE_LEAD,
  ADD_NOTE_LEAD_SUCCESS,
  ADD_NOTE_LEAD_FAILURE
} from "Types";

/**
 * Change List View
 */
export const changeLeadView = newValue => ({
  type: CHANGE_LEAD_LIST_VIEW,
  payload: newValue
});

/**
 * Get Lead Failure
 */
export const getLeadFailure = error => ({
  type: GET_LEAD_FAILURE,
  payload: error
});

/**
 * Get Lead Success
 */
export const getLeadSuccess = data => ({
  type: GET_LEAD_SUCCESS,
  payload: data
});

/**
 * Get All Leads
 */
export const getAllLead = () => ({
  type: GET_ALL_LEAD
});

/**
 * Get My Leads
 */
export const getMyLead = () => ({
  type: GET_MY_LEAD
});

/**
 * Get Open Leads
 */
export const getOpenLead = () => ({
  type: GET_OPEN_LEAD
});

/**
 * Get Hot Leads
 */
export const getHotLead = () => ({
  type: GET_HOT_LEAD
});

/**
 * Get Cold Leads
 */
export const getColdLead = () => ({
  type: GET_COLD_LEAD
});

/**
 * Get Single Lead
 */
export const getSingleLead = leadID => ({
  type: GET_SINGLE_LEAD,
  payload: leadID
});
export const getSingleLeadSuccess = leadData => ({
  type: GET_SINGLE_LEAD_SUCCESS,
  payload: leadData
});
export const clearSingleLead = () => ({
  type: CLEAR_SINGLE_LEAD
});

/**
 * Get Lead Summary
 */
export const getLeadSummary = () => ({
  type: GET_LEAD_SUMMARY
});
export const getLeadSummarySuccess = data => ({
  type: GET_LEAD_SUMMARY_SUCCESS,
  payload: data
});
export const getLeadSummaryFailure = error => ({
  type: GET_LEAD_SUMMARY_FAILURE,
  payload: error
});

/**
 * New Lead
 */
export const handleChangeLead = (field, value, type) => ({
  type: HANDLE_CHANGE_NEW_LEAD,
  payload: { type, value, field }
});
export const submitNewLead = () => ({
  type: SUBMIT_NEW_LEAD
});
export const clearNewLead = () => ({
  type: CLEAR_NEW_LEAD
});
export const newLeadSuccess = lead => ({
  type: NEW_LEAD_SUCCESS,
  payload: lead
});
export const newLeadError = error => ({
  type: NEW_LEAD_ERROR,
  payload: error
});

/**
 * Convert Lead
 */
export const handleChangeConvertLead = (field, value) => ({
  type: HANDLE_CHANGE_CONVERT_LEAD,
  payload: { field, value }
});
export const convertLead = leadID => ({
  type: CONVERT_LEAD,
  payload: leadID
});
export const convertLeadSuccess = data => ({
  type: CONVERT_LEAD_SUCCESS,
  payload: data
});
export const convertLeadFailure = error => ({
  type: CONVERT_LEAD_FAILURE,
  payload: error
});
export const unmountConvertLead = () => ({
  type: UNMOUNT_CONVERT_LEAD
});
export const handleConvertModal = () => ({
  type: HANDLE_CONVERT_MODAL
});
export const handleSuccessConvertModal = () => ({
  type: HANDLE_SUCCESS_CONVERT_MODAL
});

/**
 * Edit
 */
export const startLeadEdit = lead => ({
  type: START_LEAD_EDIT,
  payload: lead
});
export const submitEditLead = () => ({
  type: SUBMIT_EDIT_LEAD
});

/**
 * Delete
 */
export const deleteLead = id => ({
  type: DELETE_LEAD,
  payload: id
});
export const deleteLeadSuccess = id => ({
  type: DELETE_LEAD_SUCCESS,
  payload: id
});
export const deleteLeadFailure = error => ({
  type: DELETE_LEAD_FAILURE,
  payload: error
});

/**
 * Notes
 */
export const addNoteLead = (id, note) => ({
  type: ADD_NOTE_LEAD,
  payload: { id, note }
});
export const addNoteLeadSuccess = data => ({
  type: ADD_NOTE_LEAD_SUCCESS,
  payload: data
});
export const addNoteLeadFailure = error => ({
  type: ADD_NOTE_LEAD_FAILURE,
  payload: error
});

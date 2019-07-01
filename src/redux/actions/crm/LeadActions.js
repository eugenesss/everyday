import * as leadType from "Types/crm/LeadTypes";

/**
 * Change List View
 */
export const changeLeadView = newValue => ({
  type: leadType.CHANGE_LEAD_LIST_VIEW,
  payload: newValue
});

/**
 * Get Lead Failure
 */
export const getLeadFailure = error => ({
  type: leadType.GET_LEAD_FAILURE,
  payload: error
});

/**
 * Get Lead Success
 */
export const getLeadSuccess = data => ({
  type: leadType.GET_LEAD_SUCCESS,
  payload: data
});

/**
 * Get All Leads
 */
export const getAllLead = () => ({
  type: leadType.GET_ALL_LEAD
});

/**
 * Get My Leads
 */
export const getMyLead = () => ({
  type: leadType.GET_MY_LEAD
});

/**
 * Get Open Leads
 */
export const getOpenLead = () => ({
  type: leadType.GET_OPEN_LEAD
});

/**
 * Get Hot Leads
 */
export const getHotLead = () => ({
  type: leadType.GET_HOT_LEAD
});

/**
 * Get Cold Leads
 */
export const getColdLead = () => ({
  type: leadType.GET_COLD_LEAD
});

/**
 * Get Single Lead
 */
export const getSingleLead = leadID => ({
  type: leadType.GET_SINGLE_LEAD,
  payload: leadID
});
export const getSingleLeadSuccess = leadData => ({
  type: leadType.GET_SINGLE_LEAD_SUCCESS,
  payload: leadData
});
export const clearSingleLead = () => ({
  type: leadType.CLEAR_SINGLE_LEAD
});

/**
 * Get Lead Summary
 */
export const getLeadSummary = () => ({
  type: leadType.GET_LEAD_SUMMARY
});
export const getLeadSummarySuccess = data => ({
  type: leadType.GET_LEAD_SUMMARY_SUCCESS,
  payload: data
});
export const getLeadSummaryFailure = error => ({
  type: leadType.GET_LEAD_SUMMARY_FAILURE,
  payload: error
});

/**
 * New Lead
 */
export const handleChangeLead = (field, value, type) => ({
  type: leadType.HANDLE_CHANGE_NEW_LEAD,
  payload: { type, value, field }
});
export const submitNewLead = () => ({
  type: leadType.SUBMIT_NEW_LEAD
});
export const clearNewLead = () => ({
  type: leadType.CLEAR_NEW_LEAD
});
export const newLeadSuccess = lead => ({
  type: leadType.NEW_LEAD_SUCCESS,
  payload: lead
});
export const newLeadError = error => ({
  type: leadType.NEW_LEAD_ERROR,
  payload: error
});

/**
 * Convert Lead
 */
export const checkAccountExist = companyName => ({
  type: leadType.CHECK_ACCOUNT_EXIST,
  payload: companyName
});
export const checkAccountExistSuccess = (count, existingAccounts) => ({
  type: leadType.CHECK_ACCOUNT_EXIST_SUCCESS,
  payload: { count, existingAccounts }
});
export const checkAccountExistFailure = error => ({
  type: leadType.CHECK_ACCOUNT_EXIST_FAILURE,
  payload: error
});
export const convertLead = (id, dealDetails, accountId) => ({
  type: leadType.CONVERT_LEAD,
  payload: { id, dealDetails, accountId }
});
export const convertLeadSuccess = data => ({
  type: leadType.CONVERT_LEAD_SUCCESS,
  payload: data
});
export const convertLeadFailure = error => ({
  type: leadType.CONVERT_LEAD_FAILURE,
  payload: error
});
export const handleConvertModal = () => ({
  type: leadType.HANDLE_CONVERT_MODAL
});
export const handleSuccessConvertModal = () => ({
  type: leadType.HANDLE_SUCCESS_CONVERT_MODAL
});

/**
 * Edit
 */
export const startLeadEdit = lead => ({
  type: leadType.START_LEAD_EDIT,
  payload: lead
});
export const submitEditLead = () => ({
  type: leadType.SUBMIT_EDIT_LEAD
});

/**
 * Delete
 */
export const deleteLead = id => ({
  type: leadType.DELETE_LEAD,
  payload: id
});
export const deleteLeadSuccess = id => ({
  type: leadType.DELETE_LEAD_SUCCESS,
  payload: id
});
export const deleteLeadFailure = error => ({
  type: leadType.DELETE_LEAD_FAILURE,
  payload: error
});

/**
 * Notes
 */
export const addNoteLead = (id, note) => ({
  type: leadType.ADD_NOTE_LEAD,
  payload: { id, note }
});
export const addNoteLeadSuccess = data => ({
  type: leadType.ADD_NOTE_LEAD_SUCCESS,
  payload: data
});
export const addNoteLeadFailure = error => ({
  type: leadType.ADD_NOTE_LEAD_FAILURE,
  payload: error
});

/**
 * Transfer
 */
export const transferLead = (id, newOwner) => ({
  type: leadType.TRANSFER_LEAD,
  payload: { id, newOwner }
});
export const transferLeadSuccess = data => ({
  type: leadType.TRANSFER_LEAD_SUCCESS,
  payload: data
});
export const transferLeadFailure = error => ({
  type: leadType.TRANSFER_LEAD_FAILURE,
  payload: error
});

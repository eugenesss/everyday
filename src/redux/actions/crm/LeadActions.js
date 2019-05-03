/**
 * Redux App Settings Actions
 */
import {
  CHANGE_LEAD_VIEW,
  SHOW_ALL_LEADS,
  SHOW_MY_LEADS,
  SHOW_OPEN_LEADS
} from "../types";

/**
 * Change Lead List View
 */
export const onChangeLeadView = newValue => ({
  type: CHANGE_LEAD_VIEW,
  payload: newValue
});
/**
 * Show All Leads - Lead List
 */
export const showAllLeads = newValue => ({
  type: SHOW_ALL_LEADS,
  payload: newValue
});
/**
 * Show My Leads - Lead List
 */
export const showMyLeads = newValue => ({
  type: SHOW_MY_LEADS,
  payload: newValue
});
/**
 * Show Open Leads - Lead List
 */
export const showOpenLeads = newValue => ({
  type: SHOW_OPEN_LEADS,
  payload: newValue
});

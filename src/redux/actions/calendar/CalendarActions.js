/**
 * Redux App Settings Actions
 */
import {
  GET_ALL_EVENTS,
  GET_MY_EVENTS,
  CHANGE_DAY_VIEW,
  CHANGE_EVENT_VIEW,
  CHANGE_CALENDAR_VIEW,
  SHOW_SELECTED_SLOT,
  HIDE_SELECTED_SLOT,
  SHOW_SELECTED_EVENT,
  SHOW_CREATE_EVENT,
  HIDE_CREATE_EVENT,
  SHOW_UPDATE_EVENT,
} from "../types";

/**
 * Change Selected Date - Day View
 */
export const onChangeDayView = newValue => ({
  type: CHANGE_DAY_VIEW,
  payload: newValue
});
/**
 * Change Event View - My Events / Company Events
 */
export const onChangeEventView = newValue => ({
  type: CHANGE_EVENT_VIEW,
  payload: newValue
});
/**
 * Change Calendar View - Daily / Weekly / Monthly
 */
export const onChangeCalendarView = (event, newValue) => ({
  type: CHANGE_CALENDAR_VIEW,
  payload: (event, newValue)
});
/**
 * Show / Hide Selected Slot
 */
export const showSelectedSlot = newValue => ({
  type: SHOW_SELECTED_SLOT,
  payload: newValue
});
export const hideSelectedSlot = () => ({
  type: HIDE_SELECTED_SLOT,
})
/**
 * Show / Hide Create Event
 */
export const showCreateEvent = newValue => ({
  type: SHOW_CREATE_EVENT,
  payload: newValue
})
export const hideCreateEvent =() => ({
  type: HIDE_CREATE_EVENT,
})

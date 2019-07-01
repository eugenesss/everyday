/**
 * Redux App Settings Actions
 */
import {
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILURE,

  
  ON_CHANGE_ADD_EVENT,
  ADD_EVENT,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAILURE,
  
  ON_CHANGE_UPDATE_EVENT,
  UPDATE_EVENT,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAILURE,
  
  DELETE_EVENT,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE,

  GET_EVENT_FAILURE,

  CHANGE_DAY_VIEW,
  CHANGE_EVENT_VIEW,
  CHANGE_CALENDAR_VIEW,
  SHOW_SELECTED_SLOT,
  HIDE_SELECTED_SLOT,
  SHOW_SELECTED_EVENT,
  SHOW_CREATE_EVENT,
  HIDE_CREATE_EVENT,
  SHOW_UPDATE_EVENT,
} from "Types";

/**
 * Get All Events
 */
export const getAllEvents = () => ({
  type: GET_ALL_EVENTS
})
export const getAllEventsSuccess = (events, myEvents) => ({
  type: GET_ALL_EVENTS_SUCCESS,
  payload: { events, myEvents }
})
export const getAllEventsFailure = (events, myEvents) => ({
  type: GET_ALL_EVENTS_FAILURE,
  payload: { events, myEvents }
})

/**
 * Add Events
 */
export const onChangeAddEvent = (field, value) => ({
  type: ON_CHANGE_ADD_EVENT,
  payload: {field, value}
})
export const addEvent = (item) => ({
  type: ADD_EVENT,
  payload: item
})
export const addEventSuccess = (event) => ({
  type: ADD_EVENT_SUCCESS,
  payload: event
})
export const addEventFailure = (err) => ({
  type: ADD_EVENT_FAILURE,
  payload: err
})

export const deleteEvent = (id) => ({
  type: DELETE_EVENT,
  payload: id
})

export const deleteEventSuccess = (item) => ({
  type: DELETE_EVENT_SUCCESS,
  payload: item
})

export const deleteEventFailure = (item) => ({
  type: DELETE_EVENT_FAILURE,
  payload: item
})


export const updateEvent = (id) => ({
  type: UPDATE_EVENT,
  payload: id
})

export const updateEventSuccess = (item) => ({
  type: UPDATE_EVENT_SUCCESS,
  payload: item
})

export const updateEventFailure = (item) => ({
  type: UPDATE_EVENT_FAILURE,
  payload: item
})





/**
 * Get Event Failure
 */
export const getEventFailure = (err) => ({
  type: GET_EVENT_FAILURE,
  payload: err
})

/**
 * State Changes
 */
export const onChangeDayView = newValue => ({
  type: CHANGE_DAY_VIEW,
  payload: newValue
});
export const onChangeEventView = newValue => ({
  type: CHANGE_EVENT_VIEW,
  payload: newValue
});
export const onChangeCalendarView = (event, newValue) => ({
  type: CHANGE_CALENDAR_VIEW,
  payload: (event, newValue)
});
export const showSelectedSlot = newValue => ({
  type: SHOW_SELECTED_SLOT,
  payload: newValue
});
export const hideSelectedSlot = () => ({
  type: HIDE_SELECTED_SLOT
});
export const showCreateEvent = newValue => ({
  type: SHOW_CREATE_EVENT,
  payload: newValue
});
export const hideCreateEvent = () => ({
  type: HIDE_CREATE_EVENT
});

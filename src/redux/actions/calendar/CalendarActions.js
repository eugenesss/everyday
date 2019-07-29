/**
 * Redux App Settings Actions
 */
import * as types from "Types";

/**
 * Get All Events
 */
export const getAllEvents = (filter, start, end, id) => ({
  type: types.GET_ALL_EVENTS,
  payload: {
    filter,
    start,
    end,
    id
  }
})
export const getAllEventsSuccess = (events, myEvents) => ({
  type: types.GET_ALL_EVENTS_SUCCESS,
  payload: { events, myEvents }
})
export const getAllEventsFailure = (events, myEvents) => ({
  type: types.GET_ALL_EVENTS_FAILURE,
  payload: { events, myEvents }
})

/**
 * Add Events
 */
export const onChangeAddEvent = (field, value) => ({
  type: types.ON_CHANGE_ADD_EVENT,
  payload: {field, value}
})
export const addEvent = (item) => ({
  type: types.ADD_EVENT,
  payload: item
})
export const addEventSuccess = (event) => ({
  type: types.ADD_EVENT_SUCCESS,
  payload: event
})
export const addEventFailure = (err) => ({
  type: types.ADD_EVENT_FAILURE,
  payload: err
})

export const deleteEvent = (id) => ({
  type: types.DELETE_EVENT,
  payload: id
})

export const deleteEventSuccess = (item) => ({
  type: types.DELETE_EVENT_SUCCESS,
  payload: item
})

export const deleteEventFailure = (item) => ({
  type: types.DELETE_EVENT_FAILURE,
  payload: item
})


export const updateEvent = (id) => ({
  type: types.UPDATE_EVENT,
  payload: id
})

export const updateEventSuccess = (item) => ({
  type: types.UPDATE_EVENT_SUCCESS,
  payload: item
})

export const updateEventFailure = (item) => ({
  type: types.UPDATE_EVENT_FAILURE,
  payload: item
})





/**
 * Get Event Failure
 */
export const getEventFailure = (err) => ({
  type: types.GET_EVENT_FAILURE,
  payload: err
})

/**
 * State Changes
 */
export const onChangeDayView = newValue => ({
  type: types.CHANGE_DAY_VIEW,
  payload: newValue
});
export const onChangeEventView = newValue => ({
  type: types.CHANGE_EVENT_VIEW,
  payload: newValue
});
export const onChangeCalendarView = (event, newValue) => ({
  type: types.CHANGE_CALENDAR_VIEW,
  payload: (event, newValue)
});
export const showSelectedSlot = newValue => ({
  type: types.SHOW_SELECTED_SLOT,
  payload: newValue
});
export const hideSelectedSlot = () => ({
  type: types.HIDE_SELECTED_SLOT
});
export const showCreateEvent = newValue => ({
  type: types.SHOW_CREATE_EVENT,
  payload: newValue
});
export const hideCreateEvent = () => ({
  type: types.HIDE_CREATE_EVENT
});





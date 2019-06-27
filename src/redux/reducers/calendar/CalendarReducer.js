/**
 * Calendar Reducers
 */
import { NotificationManager } from "react-notifications";
import { convertMonth } from "Helpers/helpers";
import {
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_SUCCESS,

  ON_CHANGE_ADD_EVENT,
  ADD_EVENT,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAILURE,

  GET_EVENT_FAILURE,

  CHANGE_DAY_VIEW,
  CHANGE_EVENT_VIEW,
  CHANGE_CALENDAR_VIEW,
  SHOW_SELECTED_SLOT,
  HIDE_SELECTED_SLOT,
  SHOW_SELECTED_EVENT,
  SHOW_CREATE_EVENT,
  HIDE_CREATE_EVENT,
  SHOW_UPDATE_EVENT
} from "Types";

const INIT_STATE = {
  eventAdd: {},
  isAddEvent: false,
  slotSelected: null,
  isSlotSelected: false,
  dayView: new Date(),
  viewIndex: 0,
  eventView: "My Calendar",
  eventViewOptions: ["My Calendar", "Company Calendar"],
  myEvents: [],
  allEvents: [],
  showEvents: [],
  eventsLoading: false,
};

export default (state = INIT_STATE, action) => {

  switch (action.type) {
    /**
     * Get All Events
     */
    case GET_ALL_EVENTS:
      return {
        ...state,
        eventsLoading: true
      }
    case GET_ALL_EVENTS_SUCCESS:
      // console.log(action.payload)
      
      return {
        ...state,
        allEvents: action.payload.events,
        myEvents: action.payload.myEvents,
        showEvents: action.payload.myEvents,
        eventsLoading: false
      }
    case GET_EVENT_FAILURE:
      NotificationManager.warning("Failed to get events from database.")
      return {
        ...state,
        eventsLoading: false
      }

    /**
     * Add Event
     */
    case ON_CHANGE_ADD_EVENT:
      return {
        ...state,
        eventAdd: {
          ...state.eventAdd,
          [action.payload.field]: action.payload.value
        }
      }
    case ADD_EVENT:
      return {
        ...state,
        eventsLoading: true,
      }
    case ADD_EVENT_SUCCESS:
      NotificationManager.success("Event Added")
      // const event = action.payload
      let showEvents = [...state.showEvents]
      showEvents.push(action.payload)
      return {
        ...state,
        eventsLoading: false,
        isAddEvent: false,
        showEvents: showEvents
      }
    case ADD_EVENT_FAILURE:
      NotificationManager.warning("Failed to Add Event")
      return {
        ...state,
        eventsLoading: false,
        isAddEvent: false
      }

    /**
     * State Changes
     */
    case CHANGE_DAY_VIEW:
      return {
        ...state,
        dayView: action.payload,
        viewIndex: 2
      };

    case CHANGE_EVENT_VIEW:
      switch (action.payload) {
        case "My Calendar":
          var showEvents = state.myEvents;
          break;
        case "Company Calendar":
          var showEvents = state.allEvents;
          break;
      }
      return {
        ...state,
        showEvents: showEvents,
        eventView: action.payload
      };

    case CHANGE_CALENDAR_VIEW:
      return {
        ...state,
        viewIndex: action.payload
      };

    case SHOW_SELECTED_SLOT:
      return {
        ...state,
        slotSelected: action.payload,
        isSlotSelected: true
      };

    case HIDE_SELECTED_SLOT:
      return {
        ...state,
        slotSelected: null,
        isSlotSelected: false
      };

    case SHOW_CREATE_EVENT:
      var item = state.eventAdd
      
      return {
        ...state,
        isAddEvent: true,
        isSlotSelected: false,
        eventAdd: {
          startTime: item.startTime,
          endTime: item.endTime,
          title : item.title,
          description : item.description,
          all_day: item.all_day,
        }
      };

    case HIDE_CREATE_EVENT:
      return {
        ...state,
        isAddEvent: false
      };

    default:
      return { ...state };
  }
};


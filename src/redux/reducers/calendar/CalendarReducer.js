/**
 * Calendar Reducers
 */
import { NotificationManager } from "react-notifications";
import { convertMonth } from "Helpers/helpers";

import * as Types from 'Types'


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

  let showEvents = [...state.showEvents]

  switch (action.type) {
    /**
     * Get All Events
     */
    case Types.GET_ALL_EVENTS:
      return {
        ...state,
        eventsLoading: true
      }
    case Types.GET_ALL_EVENTS_SUCCESS:
      // console.log(action.payload)
      return {
        ...state,
        allEvents: action.payload.events,
        myEvents: action.payload.myEvents,
        showEvents: action.payload.myEvents,
        eventsLoading: false
      }
    case Types.GET_EVENT_FAILURE:
      NotificationManager.warning("Failed to get events from database.")
      return {
        ...state,
        eventsLoading: false
      }

    /**
     * Add Event
     */
    case Types.ON_CHANGE_ADD_EVENT:
      return {
        ...state,
        eventAdd: {
          ...state.eventAdd,
          [action.payload.field]: action.payload.value
        }
      }
    case Types.ADD_EVENT:
      return {
        ...state,
        eventsLoading: true,
      }

    case Types.DELETE_EVENT:
      return {
        ...state,
        eventsLoading: true,
      }
    case Types.DELETE_EVENT_SUCCESS:
   
      NotificationManager.success("Event has been sucessfully deleted")
      showEvents = showEvents.filter(e => e.id != action.payload)

      return {
        ...state,
        showEvents: showEvents,
        eventsLoading: true,
      }
    case Types.DELETE_EVENT_FAILURE:
      NotificationManager.warning(action.payload  + '. ' + 'As you might have deleted before')
      return {
        ...state,
        eventsLoading: true,
      }


    case Types.ADD_EVENT_SUCCESS:
      NotificationManager.success("Event Added")
      // const event = action.payload
      let event = action.payload
      event.start = new Date(event.start)
      event.end = new Date(event.end)
      showEvents.push(event)

      return {
        ...state,
        eventsLoading: false,
        isAddEvent: false,
        showEvents: showEvents
      }
    case Types.ADD_EVENT_FAILURE:
      NotificationManager.warning("Failed to Add Event")
      return {
        ...state,
        eventsLoading: false,
        isAddEvent: false
      }

    case Types.UPDATE_EVENT_SUCCESS:
        NotificationManager.success("Event Updated")


        let data = showEvents.map(item => {
          if(item.id == action.payload.id) {
            item = action.payload
            item.start = new Date(action.payload.start)
            item.end = new Date(action.payload.end)
            return item
          } else {
            return item
          }
        })

        return {
          ...state,
          eventsLoading: false,
          isAddEvent: false,
          showEvents: data
        }
    case Types.UPDATE_EVENT_FAILURE:
        NotificationManager.warning("Failed to Update Event")
        return {
          ...state,
          eventsLoading: false,
          isAddEvent: false
        }

    /**
     * State Changes
     */
    case Types.CHANGE_DAY_VIEW:
      return {
        ...state,
        dayView: action.payload,
        viewIndex: 2
      };

    case Types.CHANGE_EVENT_VIEW:
      switch (action.payload) {
        case "My Calendar":
          showEvents = state.myEvents;
          break;
        case "Company Calendar":
          showEvents = state.allEvents;
          break;
      }
      return {
        ...state,
        showEvents: showEvents,
        eventView: action.payload
      };

    case Types.CHANGE_CALENDAR_VIEW:
      return {
        ...state,
        viewIndex: action.payload
      };

    case Types.SHOW_SELECTED_SLOT:
      return {
        ...state,
        slotSelected: action.payload,
        isSlotSelected: true
      };

    case Types.HIDE_SELECTED_SLOT:
      return {
        ...state,
        slotSelected: null,
        isSlotSelected: false
      };

    case Types.SHOW_CREATE_EVENT:
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

    case Types.HIDE_CREATE_EVENT:
      return {
        ...state,
        isAddEvent: false
      };

    default:
      return { ...state };
  }
};


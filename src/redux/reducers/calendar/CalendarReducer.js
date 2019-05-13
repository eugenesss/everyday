/**
 * Auth User Reducers
 */
import { NotificationManager } from "react-notifications";
import moment from "moment";
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
 } from "Actions/types";

/**
 * initial auth user
 */
const INIT_STATE = {
  eventToCreate: {
    constants: {
      sDate: "",
      eDate: "",
    },
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    title: "",
    desc: "",
  },
  isCreateEvent: false,
  slotSelected: null,
  isSlotSelected: false,
  dayView: new Date(),
  viewIndex: 0,
  eventView: "My Calendar",
  eventViewOptions: [
    "My Calendar",
    "Company Calendar",
  ],
  myEvents: [
    {
      'title': 'My Event All Day 1',
      'allDay': true,
      'start': new Date(2019, 4, 10),
      'end': new Date(2019, 4, 10)
    },
    {
      'title': 'My Event 2',
      'start': new Date(2019, 4, 13, 5, 30, 0),
      'end': new Date(2019, 4, 20, 9, 45, 0)
    },
    {
      'title': 'My Event 3',
      'start': new Date(2019, 4, 26, 7, 0, 0),
      'end': new Date(2019, 4, 26, 9, 0, 0),
      desc: 'Big conference for important people'
    }
  ],
  companyEvents: [
    {
      'title': 'My Event All Day 1',
      'allDay': true,
      'start': new Date(2019, 4, 10),
      'end': new Date(2019, 4, 10)
    },
    {
      'title': 'Company Event All Day 1',
      'allDay': true,
      'start': new Date(2019, 4, 6),
      'end': new Date(2019, 4, 6)
    },
    {
      'title': 'My Event 2',
      'start': new Date(2019, 4, 13, 5, 30, 0),
      'end': new Date(2019, 4, 20, 9, 45, 0)
    },
    {
      'title': 'Company Event 2',
      'start': new Date(2019, 4, 7),
      'end': new Date(2019, 4, 7)
    },
    {
      'title': 'Company Event 3',
      'start': new Date(2019, 4, 14),
      'end': new Date(2019, 4, 15)
    },
  ],
  showEvents: [],
};

function convertMonth(mm) {
  switch (mm) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
  }
}

export default (state = INIT_STATE, action) => {
  
  switch (action.type) {

    case CHANGE_DAY_VIEW:
      return {
        ...state,
        dayView: action.payload,
        viewIndex: 2
      }

    case CHANGE_EVENT_VIEW:
      switch (action.payload) {
        case "My Calendar":
          var showEvents = state.myEvents;
        case "Company Calender":
          var showEvents = state.companyEvents;
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
      }
    
    case SHOW_SELECTED_SLOT:
      return {
        ...state,
        slotSelected: action.payload,
        isSlotSelected: true,
      }

    case HIDE_SELECTED_SLOT:
      return {
        ...state,
        slotSelected: null,
        isSlotSelected: false,
      }

    case SHOW_CREATE_EVENT:
      var sDate = state.slotSelected.start
      var eDate = state.slotSelected.end
      var startDate = sDate.getDate() + " / " + convertMonth(sDate.getMonth()) + " / " + sDate.getFullYear()
      var endDate = eDate.getDate() + " / " + convertMonth(eDate.getMonth()) + " / " + eDate.getFullYear()
      var startTime = sDate.getHours() + " : " + sDate.getMinutes()
      var endTime = eDate.getHours() + " : " + eDate.getMinutes()
      return {
        ...state,
        isCreateEvent: true,
        isSlotSelected: false,
        eventToCreate: {
          constants : {
            sDate: sDate,
            eDate: eDate,
          },
          startDate: startDate,
          endDate: endDate,
          startTime: startTime,
          endTime: endTime,
        }
      }
    
    case HIDE_CREATE_EVENT:
      return {
        ...state,
        isCreateEvent: false,
      }

    
    default:
      return { ...state };
  }
};

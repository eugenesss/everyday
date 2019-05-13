import { NotificationManager } from "react-notifications";
import {
  LEAD_LIST_DROPDOWN,
  CHANGE_LEAD_LIST_VIEW,
  TOGGLE_LEAD_SUMMARY,
  GET_LEAD_FAILURE,
  GET_ALL_LEAD,
  GET_MY_LEAD,
  GET_OPEN_LEAD,
  GET_CLOSED_LEAD,
  GET_ALL_LEAD_SUCCESS,
  GET_MY_LEAD_SUCCESS,
  GET_OPEN_LEAD_SUCCESS,
  GET_CLOSED_LEAD_SUCCESS
} from "Actions/types";

const INIT_STATE = {
  leadList: {
    dropdownOpen: false,
    showSummary: false,
    nowShowing: "All Leads",
    options: [
      "All Leads",
      "My Leads",
      "Open Leads",
      "Hot Leads",
      "Warm Leads",
      "Cold Leads"
    ],
    action: false,
    loading: false,
    tableData: []
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LEAD_LIST_DROPDOWN:
      return {
        ...state,
        leadList: {
          ...state.leadList,
          dropdownOpen: !state.leadList.dropdownOpen
        }
      };
    case TOGGLE_LEAD_SUMMARY:
      return {
        ...state,
        leadList: {
          ...state.leadList,
          showSummary: !state.leadList.showSummary
        }
      };
    case CHANGE_LEAD_LIST_VIEW:
      if (action.payload == "My Leads") {
        return {
          ...state,
          leadList: {
            ...state.leadList,
            nowShowing: action.payload,
            action: true,
            loading: true
          }
        };
      } else {
        return {
          ...state,
          leadList: {
            ...state.leadList,
            nowShowing: action.payload,
            action: false,
            loading: true
          }
        };
      }

    /**
     * Get Quotes
     */
    case GET_LEAD_FAILURE:
      NotificationManager.warning("Error in fetching Lead");
      console.log(action.payload);
      return {
        ...state,
        leadList: { ...state.leadList, loading: false }
      };
    case GET_ALL_LEAD:
    case GET_MY_LEAD:
    case GET_OPEN_LEAD:
    case GET_CLOSED_LEAD:
      return {
        ...state,
        leadList: { ...state.leadList, loading: true }
      };
    case GET_ALL_LEAD_SUCCESS:
    case GET_MY_LEAD_SUCCESS:
    case GET_OPEN_LEAD_SUCCESS:
    case GET_CLOSED_LEAD_SUCCESS:
      return {
        ...state,
        leadList: {
          ...state.leadList,
          loading: false,
          tableData: action.payload
        }
      };

    default:
      return { ...state };
  }
};

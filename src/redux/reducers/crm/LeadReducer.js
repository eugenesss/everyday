import { NotificationManager } from "react-notifications";
import {
  LEAD_LIST_DROPDOWN,
  CHANGE_LEAD_LIST_VIEW,
  TOGGLE_LEAD_SUMMARY,
  GET_LEAD_FAILURE,
  GET_ALL_LEAD,
  GET_MY_LEAD,
  GET_OPEN_LEAD,
  GET_HOT_LEAD,
  GET_COLD_LEAD,
  GET_LEAD_SUCCESS
} from "Types";

const INIT_STATE = {
  leadList: {
    dropdownOpen: false,
    showSummary: false,
    nowShowing: "All Leads",
    options: ["All Leads", "My Leads", "Open Leads", "Hot Leads", "Cold Leads"],
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
     * Get Leads
     */
    case GET_LEAD_FAILURE:
      NotificationManager.warning("Error in fetching Lead Data");
      console.log(action.payload);
      return {
        ...state,
        leadList: { ...state.leadList, loading: false }
      };
    case GET_ALL_LEAD:
    case GET_MY_LEAD:
    case GET_OPEN_LEAD:
    case GET_HOT_LEAD:
    case GET_COLD_LEAD:
      return {
        ...state,
        leadList: { ...state.leadList, loading: true }
      };
    case GET_LEAD_SUCCESS:
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

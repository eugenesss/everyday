import { NotificationManager } from "react-notifications";
import {
  CHANGE_REPORT_VIEW,
  OPEN_NESTED_VIEW,
  REPORT_ON_DATES_CHANGE,
  REPORT_ON_FOCUS_CHANGE,
  REPORT_RESET_DATES,
  GET_REPORT_FAILURE,
  GET_DEAL_REPORT,
  GET_DEAL_REPORT_SUCCESS,
  GET_LEAD_REPORT,
  GET_LEAD_REPORT_SUCCESS
} from "Types";

const INIT_STATE = {
  title: "",
  nestedView: { sales: false, leads: false, deals: false },
  componentToRender: "",
  dateRange: { startDate: null, endDate: null, focusedInput: null },
  dealReportData: { loading: false },
  leadReportData: { loading: false }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    /**
     * Change Report View
     */
    case OPEN_NESTED_VIEW:
      return {
        ...state,
        nestedView: {
          ...state.nestedView,
          [action.payload]: !state.nestedView[action.payload]
        }
      };
    case CHANGE_REPORT_VIEW:
      return {
        ...state,
        title: action.payload.title,
        componentToRender: action.payload.componentToRender
      };

    /**
     * Report Date Range Picker
     */
    case REPORT_ON_DATES_CHANGE:
      return {
        ...state,
        dateRange: {
          ...state.dateRange,
          startDate: action.payload.startDate,
          endDate: action.payload.endDate
        }
      };
    case REPORT_ON_FOCUS_CHANGE:
      return {
        ...state,
        dateRange: {
          ...state.dateRange,
          focusedInput: action.payload.focusedInput
        }
      };
    case REPORT_RESET_DATES:
      return { ...state, dateRange: INIT_STATE.dateRange };

    /**
     * Get Report Failure
     */
    case GET_REPORT_FAILURE:
      NotificationManager.error("Error in fetching Report");
      console.log(action.payload);
      return INIT_STATE;

    /**
     * Get Deal Report
     */
    case GET_DEAL_REPORT:
      return {
        ...state,
        dealReportData: { ...state.dealReportData, loading: true }
      };
    case GET_DEAL_REPORT_SUCCESS:
      return {
        ...state,
        dealReportData: {
          ...state.dealReportData,
          loading: false,
          ...action.payload
        }
      };

    /**
     * Get Lead Report
     */
    case GET_LEAD_REPORT:
      return {
        ...state,
        leadReportData: { ...state.leadReportData, loading: true }
      };
    case GET_LEAD_REPORT_SUCCESS:
      return {
        ...state,
        leadReportData: {
          ...state.leadReportData,
          loading: false,
          ...action.payload
        }
      };

    default:
      return { ...state };
  }
};

import { NotificationManager } from "react-notifications";
import * as types from "Types/system/ReportTypes";

const INIT_STATE = {
  dealsReport: {
    dealsByOwner: { loading: false, data: null },
    dealsByType: { loading: false, data: null },
    dealsPipeline: { loading: false, data: null }
  },
  leadReportData: { loading: false },
  individualData: { loading: false, staff: "" }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    //=====================
    // Reports Failure
    //=====================
    case types.GET_REPORT_FAILURE:
      NotificationManager.error("Error in fetching Report");
      console.log(action.payload);
      return INIT_STATE;

    //=====================
    // Deal Reports
    //=====================

    //Deal By Owner
    case types.GET_DEALS_BY_OWNER:
      return {
        ...state,
        dealsReport: {
          ...state.dealsReport,
          dealsByOwner: { ...state.dealsReport.dealsByOwner, loading: true }
        }
      };
    case types.GET_DEALS_BY_OWNER_SUCCESS:
      return {
        ...state,
        dealsReport: {
          ...state.dealsReport,
          dealsByOwner: {
            ...state.dealsReport.dealsByOwner,
            loading: false,
            data: action.payload
          }
        }
      };

    // Deal By Type
    case types.GET_DEALS_BY_TYPE:
      return {
        ...state,
        dealsReport: {
          ...state.dealsReport,
          dealsByType: { ...state.dealsReport.dealsByType, loading: true }
        }
      };
    case types.GET_DEALS_BY_TYPE_SUCCESS:
      return {
        ...state,
        dealsReport: {
          ...state.dealsReport,
          dealsByType: {
            ...state.dealsReport.dealsByType,
            loading: false,
            data: action.payload
          }
        }
      };

    // Deals Pipeline
    case types.GET_DEALS_PIPELINE:
      return {
        ...state,
        dealsReport: {
          ...state.dealsReport,
          dealsPipeline: { ...state.dealsReport.dealsPipeline, loading: true }
        }
      };
    case types.GET_DEALS_PIPELINE_SUCCESS:
      return {
        ...state,
        dealsReport: {
          ...state.dealsReport,
          dealsPipeline: {
            ...state.dealsReport.dealsPipeline,
            loading: false,
            data: action.payload
          }
        }
      };

    //=====================
    // Lead Reports
    //=====================
    case types.GET_LEAD_REPORT:
      return {
        ...state,
        leadReportData: { ...state.leadReportData, loading: true }
      };
    case types.GET_LEAD_REPORT_SUCCESS:
      return {
        ...state,
        leadReportData: {
          ...state.leadReportData,
          loading: false,
          ...action.payload
        }
      };

    //=====================
    // Individual Reports
    //=====================
    case types.GET_INDIVIDUAL_REPORT:
      return {
        ...state,
        individualData: { ...state.individualData, loading: true }
      };
    case types.GET_INDIVIDUAL_REPORT_SUCCESS:
      return {
        ...state,
        individualData: {
          ...state.individualData,
          loading: false,
          ...action.payload
        }
      };
    case types.ON_CHANGE_STAFF_SELECT:
      return {
        ...state,
        individualData: {
          ...state.individualData,
          staff: action.payload
        }
      };

    default:
      return { ...state };
  }
};

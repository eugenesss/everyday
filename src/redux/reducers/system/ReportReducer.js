import { NotificationManager } from "react-notifications";
import * as types from "Types/system/ReportTypes";

const INIT_STATE = {
  dealsReport: {
    dealsByOwner: { loading: false, data: null },
    dealsByType: { loading: false, data: null },
    dealsPipeline: { loading: false, data: null }
  },
  leadsReport: {
    leadsByStatus: { loading: false, data: null },
    leadsByOwner: { loading: false, data: null },
    leadsBySource: { loading: false, data: null }
  },
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

    // Leads by status
    case types.GET_LEADS_BY_STATUS:
      return {
        ...state,
        leadsReport: {
          ...state.leadsReport,
          leadsByStatus: { ...state.leadsByStatus, loading: true }
        }
      };
    case types.GET_LEADS_BY_STATUS_SUCCESS:
      return {
        ...state,
        leadsReport: {
          ...state.leadsReport,
          leadsByStatus: {
            ...state.leadsByStatus,
            loading: false,
            data: action.payload
          }
        }
      };

    // Leads by owner
    case types.GET_LEADS_BY_OWNER:
      return {
        ...state,
        leadsReport: {
          ...state.leadsReport,
          leadsByOwner: { ...state.leadsByOwner, loading: true }
        }
      };
    case types.GET_LEADS_BY_OWNER_SUCCESS:
      return {
        ...state,
        leadsReport: {
          ...state.leadsReport,
          leadsByOwner: {
            ...state.leadsByOwner,
            loading: false,
            data: action.payload
          }
        }
      };

    // Leads by source
    case types.GET_LEADS_BY_SOURCE:
      return {
        ...state,
        leadsReport: {
          ...state.leadsReport,
          leadsBySource: { ...state.leadsBySource, loading: true }
        }
      };
    case types.GET_LEADS_BY_SOURCE_SUCCESS:
      return {
        ...state,
        leadsReport: {
          ...state.leadsReport,
          leadsBySource: {
            ...state.leadsBySource,
            loading: false,
            data: action.payload
          }
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

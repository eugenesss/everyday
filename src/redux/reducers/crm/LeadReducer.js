/**
 * Auth User Reducers
 */
import { NotificationManager } from "react-notifications";
import { CHANGE_LEAD_VIEW } from "Actions/types";

/**
 * initial auth user
 */
const INIT_STATE = {
  allLeads: [],
  leadList: {
    tableData: [],
    loading: false,
    dropdownOpen: false,
    nowShowing: "All Leads",
    options: [
      "All Leads",
      "My Leads",
      "Open Leads",
      "Hot Leads",
      "Warm Leads",
      "Cold Leads"
    ]
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_LEAD_VIEW:
      switch (action.payload) {
        case "All Leads":
          var tableData = ["all", "leads"];
        case "My Leads":
          var tableData = ["my", "leads"];
        case "Open Leads":
          var tableData = ["open", "leads"];
        default:
          var tableData = ["default"];
      }
      return {
        ...state,
        leadList: {
          ...state.leadList,
          nowShowing: action.payload,
          tableData: tableData,
          loading: true
        }
      };
    default:
      return { ...state };
  }
};

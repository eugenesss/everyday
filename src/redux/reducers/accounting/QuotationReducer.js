import { NotificationManager } from "react-notifications";
import {
  QUOTATION_LIST_DROPDOWN,
  CHANGE_QUOTATION_LIST_VIEW,
  TOGGLE_QUOTATION_SUMMARY,
  GET_QUOTATION_FAILURE,
  GET_QUOTATION_SUCCESS,
  GET_ALL_QUOTATION,
  GET_MY_QUOTATION,
  GET_OPEN_QUOTATION,
  GET_CLOSED_QUOTATION
} from "Types";

const INIT_STATE = {
  quotationList: {
    dropdownOpen: false,
    showSummary: false,
    nowShowing: "All Quotations",
    options: [
      "All Quotations",
      "My Quotations",
      "Open Quotations",
      "Closed Quotations"
    ],
    action: false,
    loading: false,
    tableData: []
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case QUOTATION_LIST_DROPDOWN:
      return {
        ...state,
        quotationList: {
          ...state.quotationList,
          dropdownOpen: !state.quotationList.dropdownOpen
        }
      };
    case TOGGLE_QUOTATION_SUMMARY:
      return {
        ...state,
        quotationList: {
          ...state.quotationList,
          showSummary: !state.quotationList.showSummary
        }
      };
    case CHANGE_QUOTATION_LIST_VIEW:
      if (action.payload == "My Quotations") {
        return {
          ...state,
          quotationList: {
            ...state.quotationList,
            nowShowing: action.payload,
            action: true,
            loading: true
          }
        };
      } else {
        return {
          ...state,
          quotationList: {
            ...state.quotationList,
            nowShowing: action.payload,
            action: false,
            loading: true
          }
        };
      }

    /**
     * Get Quotes
     */
    case GET_QUOTATION_FAILURE:
      NotificationManager.warning("Error in fetching Quotation Data");
      console.log(action.payload);
      return {
        ...state,
        quotationList: { ...state.quotationList, loading: false }
      };
    case GET_ALL_QUOTATION:
    case GET_MY_QUOTATION:
    case GET_OPEN_QUOTATION:
    case GET_CLOSED_QUOTATION:
      return {
        ...state,
        quotationList: { ...state.quotationList, loading: true }
      };
    case GET_QUOTATION_SUCCESS:
      return {
        ...state,
        quotationList: {
          ...state.quotationList,
          loading: false,
          tableData: action.payload
        }
      };

    default:
      return { ...state };
  }
};

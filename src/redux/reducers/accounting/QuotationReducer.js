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
  GET_CLOSED_QUOTATION,
  GET_SINGLE_QUOTATION,
  GET_SINGLE_QUOTATION_SUCCESS,
  CLEAR_SINGLE_QUOTATION
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
  },
  quotationToView: { loading: false, quotation: null }
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
      return INIT_STATE;
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

    /**
     * Get Single Quotation
     */
    case GET_SINGLE_QUOTATION:
      return {
        ...state,
        quotationToView: { ...state.quotationToView, loading: true }
      };
    case GET_SINGLE_QUOTATION_SUCCESS:
      return {
        ...state,
        quotationToView: {
          ...state.quotationToView,
          loading: false,
          quotation: action.payload
        }
      };
    case CLEAR_SINGLE_QUOTATION:
      return {
        ...state,
        quotationToView: INIT_STATE.quotationToView
      };

    default:
      return { ...state };
  }
};

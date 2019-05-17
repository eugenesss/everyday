import { NotificationManager } from "react-notifications";
import {
  INVOICE_LIST_DROPDOWN,
  CHANGE_INVOICE_LIST_VIEW,
  TOGGLE_INVOICE_SUMMARY,
  GET_INVOICE_FAILURE,
  GET_INVOICE_SUCCESS,
  GET_ALL_INVOICE,
  GET_MY_INVOICE,
  GET_OPEN_INVOICE,
  GET_CLOSED_INVOICE,
  GET_SINGLE_INVOICE,
  GET_SINGLE_INVOICE_SUCCESS,
  CLEAR_SINGLE_INVOICE
} from "Types";

const INIT_STATE = {
  invoiceList: {
    dropdownOpen: false,
    showSummary: false,
    nowShowing: "All Invoices",
    options: [
      "All Invoices",
      "My Invoices",
      "Open Invoices",
      "Closed Invoices"
    ],
    action: false,
    loading: false,
    tableData: []
  },
  invoiceToView: { loading: false, invoice: null }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case INVOICE_LIST_DROPDOWN:
      return {
        ...state,
        invoiceList: {
          ...state.invoiceList,
          dropdownOpen: !state.invoiceList.dropdownOpen
        }
      };
    case TOGGLE_INVOICE_SUMMARY:
      return {
        ...state,
        invoiceList: {
          ...state.invoiceList,
          showSummary: !state.invoiceList.showSummary
        }
      };
    case CHANGE_INVOICE_LIST_VIEW:
      if (action.payload == "My Invoices") {
        return {
          ...state,
          invoiceList: {
            ...state.invoiceList,
            nowShowing: action.payload,
            action: true,
            loading: true
          }
        };
      } else {
        return {
          ...state,
          invoiceList: {
            ...state.invoiceList,
            nowShowing: action.payload,
            action: false,
            loading: true
          }
        };
      }

    /**
     * Get Quotes
     */
    case GET_INVOICE_FAILURE:
      NotificationManager.warning("Error in fetching Invoice Data");
      console.log(action.payload);
      return INIT_STATE;
    case GET_ALL_INVOICE:
    case GET_MY_INVOICE:
    case GET_OPEN_INVOICE:
    case GET_CLOSED_INVOICE:
      return {
        ...state,
        invoiceList: { ...state.invoiceList, loading: true }
      };
    case GET_INVOICE_SUCCESS:
      return {
        ...state,
        invoiceList: {
          ...state.invoiceList,
          loading: false,
          tableData: action.payload
        }
      };

    /**
     * Get Single Invoice
     */
    case GET_SINGLE_INVOICE:
      return {
        ...state,
        invoiceToView: { ...state.invoiceToView, loading: true }
      };
    case GET_SINGLE_INVOICE_SUCCESS:
      return {
        ...state,
        invoiceToView: {
          ...state.invoiceToView,
          loading: false,
          invoice: action.payload
        }
      };
    case CLEAR_SINGLE_INVOICE:
      return {
        ...state,
        invoiceToView: INIT_STATE.invoiceToView
      };

    default:
      return { ...state };
  }
};

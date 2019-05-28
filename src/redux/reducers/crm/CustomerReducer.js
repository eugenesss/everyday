import { NotificationManager } from "react-notifications";
import {
  CUSTOMER_LIST_DROPDOWN,
  CHANGE_CUSTOMER_LIST_VIEW,
  TOGGLE_CUSTOMER_SUMMARY,
  GET_CUSTOMER_FAILURE,
  GET_CUSTOMER_SUCCESS,
  GET_ALL_CUSTOMER,
  GET_MY_CUSTOMER,
  GET_OPEN_CUSTOMER,
  GET_SINGLE_CUSTOMER,
  GET_SINGLE_CUSTOMER_SUCCESS,
  CLEAR_SINGLE_CUSTOMER,
  GET_CUSTOMER_SUMMARY,
  GET_CUSTOMER_SUMMARY_SUCCESS,
  GET_CUSTOMER_SUMMARY_FAILURE,
  HANDLE_CHANGE_CUSTOMER,
  SUBMIT_CUSTOMER,
  CLEAR_CUSTOMER_FORM,
  SUBMIT_CUSTOMER_SUCCESS,
  SUBMIT_CUSTOMER_ERROR
} from "Types";

const INIT_STATE = {
  customerList: {
    dropdownOpen: false,
    nowShowing: "All Customers",
    options: ["All Customers", "My Customers", "Open Customers"],
    action: false,
    loading: false,
    tableData: []
  },
  customerSummary: {
    showSummary: false,
    loading: false,
    summary: []
  },
  customerToView: {
    loading: false,
    customer: null
  },
  customerForm: {
    loading: false,
    customer: {}
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CUSTOMER_LIST_DROPDOWN:
      return {
        ...state,
        customerList: {
          ...state.customerList,
          dropdownOpen: !state.customerList.dropdownOpen
        }
      };
    case CHANGE_CUSTOMER_LIST_VIEW:
      if (action.payload == "My Customers") {
        return {
          ...state,
          customerList: {
            ...state.customerList,
            nowShowing: action.payload,
            action: true,
            loading: true
          }
        };
      } else {
        return {
          ...state,
          customerList: {
            ...state.customerList,
            nowShowing: action.payload,
            action: false,
            loading: true
          }
        };
      }

    /**
     * Customer Summary
     */
    case TOGGLE_CUSTOMER_SUMMARY:
      return {
        ...state,
        customerSummary: {
          ...state.customerSummary,
          showSummary: !state.customerSummary.showSummary
        }
      };
    case GET_CUSTOMER_SUMMARY:
      return {
        ...state,
        customerSummary: {
          ...state.customerSummary,
          loading: true
        }
      };
    case GET_CUSTOMER_SUMMARY_SUCCESS:
      return {
        ...state,
        customerSummary: {
          ...state.customerSummary,
          summary: action.payload,
          loading: false
        }
      };
    case GET_CUSTOMER_SUMMARY_FAILURE:
      NotificationManager.warning("Error in fetching Customer Summary");
      console.log(action.payload);
      return { ...state, customerSummary: INIT_STATE.customerSummary };

    /**
     * Get Customers
     */
    case GET_CUSTOMER_FAILURE:
      NotificationManager.warning("Error in fetching Customer Data");
      console.log(action.payload);
      return {
        ...state,
        customerToView: INIT_STATE.customerToView,
        customerList: INIT_STATE.customerList
      };
    case GET_ALL_CUSTOMER:
    case GET_MY_CUSTOMER:
    case GET_OPEN_CUSTOMER:
      return {
        ...state,
        customerList: { ...state.customerList, loading: true }
      };
    case GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        customerList: {
          ...state.customerList,
          loading: false,
          tableData: action.payload
        }
      };

    /**
     * Get Single Customer
     */
    case GET_SINGLE_CUSTOMER:
      return {
        ...state,
        customerToView: { ...state.customerToView, loading: true }
      };
    case GET_SINGLE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customerToView: {
          ...state.customerToView,
          loading: false,
          customer: action.payload
        }
      };
    case CLEAR_SINGLE_CUSTOMER:
      return {
        ...state,
        customerToView: INIT_STATE.customerToView
      };

    /**
     * New Customer
     */
    case HANDLE_CHANGE_CUSTOMER:
      return {
        ...state,
        customerForm: {
          ...state.customerForm,
          customer: {
            ...state.customerForm.customer,
            [action.payload.field]: action.payload.value
          }
        }
      };
    case SUBMIT_CUSTOMER:
      return {
        ...state,
        customerForm: { ...state.customerForm, loading: true }
      };
    case CLEAR_CUSTOMER_FORM:
      return { ...state, customerForm: INIT_STATE.customerForm };
    case SUBMIT_CUSTOMER_SUCCESS:
      return { ...state, customerForm: INIT_STATE.customerForm };
    case SUBMIT_CUSTOMER_ERROR:
      NotificationManager.error("Error in POST API");
      console.log(action.payload);
      return {
        ...state,
        customerForm: { ...state.customerForm, loading: false }
      };

    default:
      return { ...state };
  }
};

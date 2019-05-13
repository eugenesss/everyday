import { NotificationManager } from "react-notifications";
import {
  CUSTOMER_LIST_DROPDOWN,
  CHANGE_CUSTOMER_LIST_VIEW,
  TOGGLE_CUSTOMER_SUMMARY,
  GET_CUSTOMER_FAILURE,
  GET_CUSTOMER_SUCCESS,
  GET_ALL_CUSTOMER,
  GET_MY_CUSTOMER,
  GET_OPEN_CUSTOMER
} from "Types";

const INIT_STATE = {
  customerList: {
    dropdownOpen: false,
    showSummary: false,
    nowShowing: "All Customers",
    options: ["All Customers", "My Customers", "Open Customers"],
    action: false,
    loading: false,
    tableData: []
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
    case TOGGLE_CUSTOMER_SUMMARY:
      return {
        ...state,
        customerList: {
          ...state.customerList,
          showSummary: !state.customerList.showSummary
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
     * Get Quotes
     */
    case GET_CUSTOMER_FAILURE:
      NotificationManager.warning("Error in fetching Customer Data");
      console.log(action.payload);
      return {
        ...state,
        customerList: { ...state.customerList, loading: false }
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

    default:
      return { ...state };
  }
};

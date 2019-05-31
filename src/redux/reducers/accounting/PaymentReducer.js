import { NotificationManager } from "react-notifications";
import {
  PAYMENT_LIST_DROPDOWN,
  CHANGE_PAYMENT_LIST_VIEW,
  GET_PAYMENT_FAILURE,
  GET_PAYMENT_SUCCESS,
  GET_ALL_PAYMENT,
  GET_MY_PAYMENT,
  GET_OPEN_PAYMENT,
  GET_CLOSED_PAYMENT,
  GET_SINGLE_PAYMENT,
  GET_SINGLE_PAYMENT_SUCCESS,
  CLEAR_SINGLE_PAYMENT
} from "Types";

const INIT_STATE = {
  paymentList: {
    dropdownOpen: false,
    nowShowing: "All Payment",
    options: ["All Payment", "My Payment", "Open Payment", "Closed Payment"],
    action: false,
    loading: false,
    tableData: []
  },
  paymentToView: { loading: false, payment: null }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case PAYMENT_LIST_DROPDOWN:
      return {
        ...state,
        paymentList: {
          ...state.paymentList,
          dropdownOpen: !state.paymentList.dropdownOpen
        }
      };
    case CHANGE_PAYMENT_LIST_VIEW:
      if (action.payload == "My Payment") {
        return {
          ...state,
          paymentList: {
            ...state.paymentList,
            nowShowing: action.payload,
            action: true,
            loading: true
          }
        };
      } else {
        return {
          ...state,
          paymentList: {
            ...state.paymentList,
            nowShowing: action.payload,
            action: false,
            loading: true
          }
        };
      }

    /**
     * Get Payment
     */
    case GET_PAYMENT_FAILURE:
      NotificationManager.warning("Error in fetching Payment Data");
      console.log(action.payload);
      return INIT_STATE;
    case GET_ALL_PAYMENT:
    case GET_MY_PAYMENT:
    case GET_OPEN_PAYMENT:
    case GET_CLOSED_PAYMENT:
      return {
        ...state,
        paymentList: { ...state.paymentList, loading: true }
      };
    case GET_PAYMENT_SUCCESS:
      return {
        ...state,
        paymentList: {
          ...state.paymentList,
          loading: false,
          tableData: action.payload
        }
      };

    /**
     * Get Single Payment
     */
    case GET_SINGLE_PAYMENT:
      return {
        ...state,
        paymentToView: { ...state.paymentToView, loading: true }
      };
    case GET_SINGLE_PAYMENT_SUCCESS:
      return {
        ...state,
        paymentToView: {
          ...state.paymentToView,
          loading: false,
          payment: action.payload
        }
      };
    case CLEAR_SINGLE_PAYMENT:
      return {
        ...state,
        paymentToView: INIT_STATE.paymentToView
      };

    default:
      return { ...state };
  }
};

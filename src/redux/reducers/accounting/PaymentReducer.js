import { NotificationManager } from "react-notifications";
import * as types from "Types";

const INIT_STATE = {
  paymentList: {
    dropdownOpen: false,
    nowShowing: "All Payment",
    options: ["All Payment", "My Payment", "Open Payment", "Closed Payment"],
    action: false,
    loading: false,
    tableData: []
  },

  paymentToView: { loading: false, payment: [] }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.PAYMENT_LIST_DROPDOWN:
      return {
        ...state,
      };
    
    case types.FETCH_ALL_PAYMENT:
          return {
            ...state,
            paymentList: {
              ...state.paymentList,
              loading: true,
            }
          };

    case types.FETCH_ALL_PAYMENT_FAILURE:
        return {
          ...state,
          paymentList: {
            ...state.paymentList,
            loading: false,
          }
        };

    case types.FETCH_ALL_PAYMENT_SUCCESS:
        return {
          ...state,
          paymentList: {
            ...state.paymentList,
            tableData: action.payload,
            loading: false,
          }
        };
        
    case types.MAKE_PAYMENT_INCOMPLETE_FAILURE:
      NotificationManager.error(`Please fill up the ${action.payload}`);
      return {
        ...state,
      };
      
    case types.MAKE_PAYMENT :
        return {
          ...state,
        };

    case types.MAKE_PAYMENT_SUCCESS:
        NotificationManager.success("Payment made successfully")
        return {
          ...state,
        };
    case types.MAKE_PAYMENT_FAILURE:
        NotificationManager.error("Unable to make payment, try again")
        return {
          ...state,
        };

    case types.GET_SINGLE_COMPANY_PAYMENT:
        return {
          ...state,
          paymentToView: {
            ...state.paymentToView,
            loading: true,
          }
        };

    case types.GET_SINGLE_COMPANY_PAYMENT_SUCCESS:
        return {
          ...state,
          paymentToView: {
            ...state.paymentToView,
            loading: false,
            payment : action.payload.data,
            company: action.payload.company
          }
        };

    case types.GET_SINGLE_COMPANY_PAYMENT_FAILURE:

        return {
          ...state,
          paymentToView: {
            ...state.paymentToView,
            loading: false,
          }
        };
            
      
    default:
      return { ...state };
  }
};

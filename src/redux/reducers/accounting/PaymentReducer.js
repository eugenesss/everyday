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

  paymentToView: { loading: false, payment: null }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.PAYMENT_LIST_DROPDOWN:
      return {
        ...state,
      };
    
    case types.MAKE_PAYMENT :
        return {
          ...state,
        };
      
    default:
      return { ...state };
  }
};

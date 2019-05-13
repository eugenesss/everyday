import { NotificationManager } from "react-notifications";
import {
  ACCOUNT_LIST_DROPDOWN,
  CHANGE_ACCOUNT_LIST_VIEW,
  TOGGLE_ACCOUNT_SUMMARY,
  GET_ACCOUNT_FAILURE,
  GET_ACCOUNT_SUCCESS,
  GET_ALL_ACCOUNT,
  GET_MY_ACCOUNT,
  GET_OPEN_ACCOUNT
} from "Types";

const INIT_STATE = {
  accountList: {
    dropdownOpen: false,
    showSummary: false,
    nowShowing: "All Accounts",
    options: ["All Accounts", "My Accounts", "Open Accounts"],
    action: false,
    loading: false,
    tableData: []
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACCOUNT_LIST_DROPDOWN:
      return {
        ...state,
        accountList: {
          ...state.accountList,
          dropdownOpen: !state.accountList.dropdownOpen
        }
      };
    case TOGGLE_ACCOUNT_SUMMARY:
      return {
        ...state,
        accountList: {
          ...state.accountList,
          showSummary: !state.accountList.showSummary
        }
      };
    case CHANGE_ACCOUNT_LIST_VIEW:
      if (action.payload == "My Accounts") {
        return {
          ...state,
          accountList: {
            ...state.accountList,
            nowShowing: action.payload,
            action: true,
            loading: true
          }
        };
      } else {
        return {
          ...state,
          accountList: {
            ...state.accountList,
            nowShowing: action.payload,
            action: false,
            loading: true
          }
        };
      }

    /**
     * Get Quotes
     */
    case GET_ACCOUNT_FAILURE:
      NotificationManager.warning("Error in fetching Account Data");
      console.log(action.payload);
      return {
        ...state,
        accountList: { ...state.accountList, loading: false }
      };
    case GET_ALL_ACCOUNT:
    case GET_MY_ACCOUNT:
    case GET_OPEN_ACCOUNT:
      return {
        ...state,
        accountList: { ...state.accountList, loading: true }
      };
    case GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        accountList: {
          ...state.accountList,
          loading: false,
          tableData: action.payload
        }
      };

    default:
      return { ...state };
  }
};

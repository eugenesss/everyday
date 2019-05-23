import { NotificationManager } from "react-notifications";
import {
  ACCOUNT_LIST_DROPDOWN,
  CHANGE_ACCOUNT_LIST_VIEW,
  TOGGLE_ACCOUNT_SUMMARY,
  GET_ACCOUNT_FAILURE,
  GET_ACCOUNT_SUCCESS,
  GET_ALL_ACCOUNT,
  GET_MY_ACCOUNT,
  GET_OPEN_ACCOUNT,
  GET_SINGLE_ACCOUNT,
  GET_SINGLE_ACCOUNT_SUCCESS,
  CLEAR_SINGLE_ACCOUNT,
  HANDLE_CHANGE_ACCOUNT,
  SUBMIT_ACCOUNT,
  CLEAR_ACCOUNT_FORM,
  SUBMIT_ACCOUNT_SUCCESS,
  SUBMIT_ACCOUNT_ERROR
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
  },
  accountToView: { loading: false, account: null },
  accountForm: { loading: false, account: {} }
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
     * Get Accounts
     */
    case GET_ACCOUNT_FAILURE:
      NotificationManager.warning("Error in fetching Account Data");
      console.log(action.payload);
      return INIT_STATE;
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

    /**
     * Get Single Account
     */
    case GET_SINGLE_ACCOUNT:
      return {
        ...state,
        accountToView: { ...state.accountToView, loading: true }
      };
    case GET_SINGLE_ACCOUNT_SUCCESS:
      return {
        ...state,
        accountToView: {
          ...state.accountToView,
          loading: false,
          account: action.payload
        }
      };
    case CLEAR_SINGLE_ACCOUNT:
      return {
        ...state,
        accountToView: INIT_STATE.accountToView
      };

    /**
     * New Account
     */
    case HANDLE_CHANGE_ACCOUNT:
      return {
        ...state,
        accountForm: {
          ...state.accountForm,
          account: {
            ...state.accountForm.account,
            [action.payload.field]: action.payload.value
          }
        }
      };
    case SUBMIT_ACCOUNT:
      return {
        ...state,
        accountForm: { ...state.accountForm, loading: true }
      };
    case CLEAR_ACCOUNT_FORM:
      return { ...state, accountForm: INIT_STATE.accountForm };
    case SUBMIT_ACCOUNT_SUCCESS:
      return { ...state, accountForm: INIT_STATE.accountForm };
    case SUBMIT_ACCOUNT_ERROR:
      NotificationManager.error("Error in POST API");
      console.log(action.payload);
      return {
        ...state,
        accountForm: { ...state.accountForm, loading: false }
      };

    default:
      return { ...state };
  }
};

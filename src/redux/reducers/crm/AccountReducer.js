import { NotificationManager } from "react-notifications";
import * as acctType from "Types/crm/AccountTypes";

const INIT_STATE = {
  accountList: {
    nowShowing: "All Accounts",
    options: ["All Accounts", "Active Accounts", "Inactive Accounts"],
    action: false,
    loading: false,
    tableData: []
  },
  accountToView: {
    loading: false,
    account: null,
    sectionLoading: false
  },
  accountForm: {
    loading: false,
    account: { baseContact: { _address: {} } }
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case acctType.CHANGE_ACCOUNT_LIST_VIEW:
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
    case acctType.GET_ACCOUNT_FAILURE:
      NotificationManager.warning("Error in fetching Account Data");
      return {
        ...state,
        accountToView: INIT_STATE.accountToView,
        accountList: INIT_STATE.accountList
      };
    case acctType.GET_ALL_ACCOUNT:
    case acctType.GET_MY_ACCOUNT:
    case acctType.GET_OPEN_ACCOUNT:
      return {
        ...state,
        accountList: { ...state.accountList, loading: true }
      };
    case acctType.GET_ACCOUNT_SUCCESS:
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
    case acctType.GET_SINGLE_ACCOUNT:
      return {
        ...state,
        accountToView: { ...state.accountToView, loading: true }
      };
    case acctType.GET_SINGLE_ACCOUNT_SUCCESS:
      return {
        ...state,
        accountToView: {
          ...state.accountToView,
          loading: false,
          account: action.payload
        }
      };
    case acctType.CLEAR_SINGLE_ACCOUNT:
      return {
        ...state,
        accountToView: INIT_STATE.accountToView
      };

    /**
     * New Account
     */

    case acctType.NEW_ACCOUNT:
      return {
        ...state,
        accountForm: { ...state.accountForm, loading: true }
      };
    case acctType.NEW_ACCOUNT_SUCCESS:
      NotificationManager.success("Account Created");
      return { ...state, accountForm: INIT_STATE.accountForm };
    case acctType.NEW_ACCOUNT_FAILURE:
      NotificationManager.error("Error in POST API");
      console.log(action.payload);
      return {
        ...state,
        accountForm: { ...state.accountForm, loading: false }
      };

    /**
     * Edit
     */
    case acctType.EDIT_ACCOUNT:
      return {
        ...state,
        accountForm: { ...state.accountForm, loading: true }
      };
    case acctType.EDIT_ACCOUNT_SUCCESS:
      NotificationManager.success("Account Edited");
      return {
        ...state,
        accountForm: { ...state.accountForm, loading: false }
      };
    case acctType.EDIT_ACCOUNT_FAILURE:
      NotificationManager.error("Error in Edit");
      console.log(action.payload);
      return {
        ...state,
        accountForm: { ...state.accountForm, loading: false }
      };

    /**
     * Delete
     */
    case acctType.DELETE_ACCOUNT:
      return {
        ...state,
        accountToView: { ...state.accountToView, loading: true },
        accountList: { ...state.accountList, loading: true }
      };
    case acctType.DELETE_ACCOUNT_SUCCESS:
      NotificationManager.success("Account Deleted");
      // remove from state
      var afterDeleteData = Object.assign(
        [],
        state.accountList.tableData
      ).filter(acct => acct.id != action.payload);
      return {
        ...state,
        accountToView: { ...state.accountToView, loading: false },
        accountList: {
          ...state.accountList,
          loading: false,
          tableData: afterDeleteData
        }
      };
    case acctType.DELETE_ACCOUNT_FAILURE:
      NotificationManager.error(action.payload.message);
      console.log(action.payload);
      return {
        ...state,
        accountToView: { ...state.accountToView, loading: false },
        accountList: { ...state.accountList, loading: false }
      };

    /**
     * Notes
     */
    case acctType.ADD_NOTE_ACCOUNT:
      return {
        ...state,
        accountToView: { ...state.accountToView, sectionLoading: true }
      };
    case acctType.ADD_NOTE_ACCOUNT_SUCCESS:
      var newNotes = Object.assign([], state.accountToView.account.notes);
      newNotes.unshift(action.payload);
      return {
        ...state,
        accountToView: {
          ...state.accountToView,
          account: { ...state.accountToView.account, notes: newNotes },
          sectionLoading: false
        }
      };
    case acctType.ADD_NOTE_ACCOUNT_FAILURE:
      NotificationManager.error("Error in adding Note");
      console.log(action.payload);
      return {
        ...state,
        accountToView: { ...state.accountToView, sectionLoading: false }
      };

    /**
     * Set Active
     */
    case acctType.SET_ACCOUNT_ACTIVE:
      NotificationManager.success("Account Status Updated");
      return {
        ...state,
        accountToView: { ...state.accountToView, loading: true }
      };
    case acctType.SET_ACCOUNT_ACTIVE_SUCCESS:
      return {
        ...state,
        accountToView: {
          ...state.accountToView,
          account: action.payload,
          loading: false
        }
      };
    case acctType.SET_ACCOUNT_ACTIVE_FAILURE:
      NotificationManager.error("Error");
      console.log(action.payload);
      return {
        ...state,
        accountToView: { ...state.accountToView, loading: false }
      };

    /**
     * Transfer
     */
    case acctType.TRANSFER_ACCOUNT:
      return {
        ...state,
        accountToView: { ...state.accountToView, loading: true }
      };
    case acctType.TRANSFER_ACCOUNT_SUCCESS:
      NotificationManager.success("Record Transferred");
      return {
        ...state,
        accountToView: {
          ...state.accountToView,
          account: action.payload,
          loading: false
        }
      };
    case acctType.TRANSFER_ACCOUNT_FAILURE:
      NotificationManager.error("Error in Transferring Record");
      console.log(action.payload);
      return {
        ...state,
        accountToView: { ...state.accountToView, loading: false }
      };

    default:
      return { ...state };
  }
};

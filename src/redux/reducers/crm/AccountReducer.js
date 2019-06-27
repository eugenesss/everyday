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
      console.log(action.payload);
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
    case acctType.HANDLE_CHANGE_ACCOUNT:
      if (action.payload.type == "baseContact") {
        return {
          ...state,
          accountForm: {
            ...state.accountForm,
            account: {
              ...state.accountForm.account,
              baseContact: {
                ...state.accountForm.account.baseContact,
                [action.payload.field]: action.payload.value
              }
            }
          }
        };
      } else if (action.payload.type == "address") {
        return {
          ...state,
          accountForm: {
            ...state.accountForm,
            account: {
              ...state.accountForm.account,
              baseContact: {
                ...state.accountForm.account.baseContact,
                _address: {
                  ...state.accountForm.account.baseContact._address,
                  [action.payload.field]: action.payload.value
                }
              }
            }
          }
        };
      } else {
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
      }
    case acctType.SUBMIT_ACCOUNT:
      return {
        ...state,
        accountForm: { ...state.accountForm, loading: true }
      };
    case acctType.CLEAR_ACCOUNT_FORM:
      return { ...state, accountForm: INIT_STATE.accountForm };
    case acctType.SUBMIT_ACCOUNT_SUCCESS:
      return { ...state, accountForm: INIT_STATE.accountForm };
    case acctType.SUBMIT_ACCOUNT_ERROR:
      NotificationManager.error("Error in POST API");
      console.log(action.payload);
      return {
        ...state,
        accountForm: { ...state.accountForm, loading: false }
      };

    /**
     * Edit
     */
    case acctType.START_ACCOUNT_EDIT:
      return {
        ...state,
        accountForm: { ...state.accountForm, account: action.payload }
      };
    case acctType.SUBMIT_EDIT_ACCOUNT:
      return {
        ...state,
        accountForm: { ...state.accountForm, loading: true }
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

    default:
      return { ...state };
  }
};

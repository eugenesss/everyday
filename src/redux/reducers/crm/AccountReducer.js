import { NotificationManager } from "react-notifications";
import {
  CHANGE_ACCOUNT_LIST_VIEW,
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
  SUBMIT_ACCOUNT_ERROR,
  START_ACCOUNT_EDIT,
  SUBMIT_EDIT_ACCOUNT,
  ADD_NOTE_ACCOUNT,
  ADD_NOTE_ACCOUNT_SUCCESS,
  ADD_NOTE_ACCOUNT_FAILURE
} from "Types";

const INIT_STATE = {
  accountList: {
    nowShowing: "All Accounts",
    options: ["All Accounts", "My Accounts", "Open Accounts"],
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
      return {
        ...state,
        accountToView: INIT_STATE.accountToView,
        accountList: INIT_STATE.accountList
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

    /**
     * Edit
     */
    case START_ACCOUNT_EDIT:
      return {
        ...state,
        accountForm: { ...state.accountForm, account: action.payload }
      };
    case SUBMIT_EDIT_ACCOUNT:
      return {
        ...state,
        accountForm: { ...state.accountForm, loading: true }
      };

    /**
     * Notes
     */
    case ADD_NOTE_ACCOUNT:
      return {
        ...state,
        accountToView: { ...state.accountToView, sectionLoading: true }
      };
    case ADD_NOTE_ACCOUNT_SUCCESS:
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
    case ADD_NOTE_ACCOUNT_FAILURE:
      NotificationManager.error("Error in adding Note");
      console.log(action.payload);
      return {
        ...state,
        accountToView: { ...state.accountToView, sectionLoading: false }
      };

    default:
      return { ...state };
  }
};

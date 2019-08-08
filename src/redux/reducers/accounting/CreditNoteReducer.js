import { NotificationManager } from "react-notifications";
import {
  CREDIT_NOTE_LIST_DROPDOWN,
  CHANGE_CREDIT_NOTE_LIST_VIEW,
  GET_CREDIT_NOTE_FAILURE,
  GET_CREDIT_NOTE_SUCCESS,
  GET_ALL_CREDIT_NOTE,
  GET_MY_CREDIT_NOTE,
  GET_OPEN_CREDIT_NOTE,
  GET_CLOSED_CREDIT_NOTE,
  GET_SINGLE_CREDIT_NOTE,
  GET_SINGLE_CREDIT_NOTE_SUCCESS,
  CLEAR_SINGLE_CREDIT_NOTE
} from "Types";

const INIT_STATE = {
  creditNoteList: {
    dropdownOpen: false,
    nowShowing: "All Credit Notes",
    options: [
      "All Credit Notes",
      "My Credit Notes",
      "Open Credit Notes",
      "Closed Credit Notes"
    ],
    action: false,
    loading: false,
    tableData: []
  },
  creditNoteToView: { loading: false, creditNote: null }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREDIT_NOTE_LIST_DROPDOWN:
      return {
        ...state,
        creditNoteList: {
          ...state.creditNoteList,
          dropdownOpen: !state.creditNoteList.dropdownOpen
        }
      };
    case CHANGE_CREDIT_NOTE_LIST_VIEW:
      if (action.payload == "My Credit Notes") {
        return {
          ...state,
          creditNoteList: {
            ...state.creditNoteList,
            nowShowing: action.payload,
            action: true,
            loading: true
          }
        };
      } else {
        return {
          ...state,
          creditNoteList: {
            ...state.creditNoteList,
            nowShowing: action.payload,
            action: false,
            loading: true
          }
        };
      }

    /**
     * Get Quotes
     */
    case GET_CREDIT_NOTE_FAILURE:
      NotificationManager.warning("Error in fetching Credit Note Data");
      return INIT_STATE;
    case GET_ALL_CREDIT_NOTE:
    case GET_MY_CREDIT_NOTE:
    case GET_OPEN_CREDIT_NOTE:
    case GET_CLOSED_CREDIT_NOTE:
      return {
        ...state,
        creditNoteList: { ...state.creditNoteList, loading: true }
      };
    case GET_CREDIT_NOTE_SUCCESS:
      return {
        ...state,
        creditNoteList: {
          ...state.creditNoteList,
          loading: false,
          tableData: action.payload
        }
      };

    /**
     * Get Single Credit Note
     */
    case GET_SINGLE_CREDIT_NOTE:
      return {
        ...state,
        creditNoteToView: { ...state.creditNoteToView, loading: true }
      };
    case GET_SINGLE_CREDIT_NOTE_SUCCESS:
      return {
        ...state,
        creditNoteToView: {
          ...state.creditNoteToView,
          loading: false,
          creditNote: action.payload
        }
      };
    case CLEAR_SINGLE_CREDIT_NOTE:
      return {
        ...state,
        creditNoteToView: INIT_STATE.creditNoteToView
      };

    default:
      return { ...state };
  }
};

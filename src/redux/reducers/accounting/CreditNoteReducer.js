import { NotificationManager } from "react-notifications";
import {
  CREDIT_NOTE_LIST_DROPDOWN,
  CHANGE_CREDIT_NOTE_LIST_VIEW,
  TOGGLE_CREDIT_NOTE_SUMMARY,
  GET_CREDIT_NOTE_FAILURE,
  GET_CREDIT_NOTE_SUCCESS,
  GET_ALL_CREDIT_NOTE,
  GET_MY_CREDIT_NOTE,
  GET_OPEN_CREDIT_NOTE,
  GET_CLOSED_CREDIT_NOTE
} from "Types";

const INIT_STATE = {
  creditNoteList: {
    dropdownOpen: false,
    showSummary: false,
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
  }
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
    case TOGGLE_CREDIT_NOTE_SUMMARY:
      return {
        ...state,
        creditNoteList: {
          ...state.creditNoteList,
          showSummary: !state.creditNoteList.showSummary
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
      console.log(action.payload);
      return {
        ...state,
        creditNoteList: { ...state.creditNoteList, loading: false }
      };
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

    default:
      return { ...state };
  }
};

import { NotificationManager } from "react-notifications";
import {
  DEAL_LIST_DROPDOWN,
  CHANGE_DEAL_LIST_VIEW,
  TOGGLE_DEAL_SUMMARY,
  GET_DEAL_FAILURE,
  GET_DEAL_SUCCESS,
  GET_ALL_DEAL,
  GET_MY_DEAL,
  GET_OPEN_DEAL,
  GET_CLOSED_DEAL,
  GET_WON_DEAL,
  GET_SINGLE_DEAL,
  GET_SINGLE_DEAL_SUCCESS,
  CLEAR_SINGLE_DEAL,
  HANDLE_CHANGE_DEAL,
  SUBMIT_DEAL,
  CLEAR_DEAL_FORM,
  SUBMIT_DEAL_SUCCESS,
  SUBMIT_DEAL_ERROR
} from "Types";

const INIT_STATE = {
  dealList: {
    dropdownOpen: false,
    showSummary: false,
    nowShowing: "All Deals",
    options: [
      "All Deals",
      "My Deals",
      "Open Deals",
      "Closed Deals",
      "Won Deals"
    ],
    action: false,
    loading: false,
    tableData: []
  },
  dealToView: { loading: false, deal: null },
  dealForm: { loading: false, deal: {} }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case DEAL_LIST_DROPDOWN:
      return {
        ...state,
        dealList: {
          ...state.dealList,
          dropdownOpen: !state.dealList.dropdownOpen
        }
      };
    case TOGGLE_DEAL_SUMMARY:
      return {
        ...state,
        dealList: {
          ...state.dealList,
          showSummary: !state.dealList.showSummary
        }
      };
    case CHANGE_DEAL_LIST_VIEW:
      if (action.payload == "My Deals") {
        return {
          ...state,
          dealList: {
            ...state.dealList,
            nowShowing: action.payload,
            action: true,
            loading: true
          }
        };
      } else {
        return {
          ...state,
          dealList: {
            ...state.dealList,
            nowShowing: action.payload,
            action: false,
            loading: true
          }
        };
      }

    /**
     * Get Deals
     */
    case GET_DEAL_FAILURE:
      NotificationManager.warning("Error in fetching Deal Data");
      console.log(action.payload);
      return INIT_STATE;
    case GET_ALL_DEAL:
    case GET_MY_DEAL:
    case GET_OPEN_DEAL:
    case GET_CLOSED_DEAL:
    case GET_WON_DEAL:
      return {
        ...state,
        dealList: { ...state.dealList, loading: true }
      };
    case GET_DEAL_SUCCESS:
      return {
        ...state,
        dealList: {
          ...state.dealList,
          loading: false,
          tableData: action.payload
        }
      };

    /**
     * Get Single Deal
     */
    case GET_SINGLE_DEAL:
      return {
        ...state,
        dealToView: { ...state.dealToView, loading: true }
      };
    case GET_SINGLE_DEAL_SUCCESS:
      return {
        ...state,
        dealToView: {
          ...state.dealToView,
          loading: false,
          deal: action.payload
        }
      };
    case CLEAR_SINGLE_DEAL:
      return {
        ...state,
        dealToView: INIT_STATE.dealToView
      };

    /**
     * New Deal
     */
    case HANDLE_CHANGE_DEAL:
      return {
        ...state,
        dealForm: {
          ...state.dealForm,
          deal: {
            ...state.dealForm.deal,
            [action.payload.field]: action.payload.value
          }
        }
      };
    case SUBMIT_DEAL:
      return {
        ...state,
        dealForm: { ...state.dealForm, loading: true }
      };
    case CLEAR_DEAL_FORM:
      return { ...state, dealForm: INIT_STATE.dealForm };
    case SUBMIT_DEAL_SUCCESS:
      return { ...state, dealForm: INIT_STATE.dealForm };
    case SUBMIT_DEAL_ERROR:
      NotificationManager.error("Error in POST API");
      console.log(action.payload);
      return {
        ...state,
        dealForm: { ...state.dealForm, loading: false }
      };

    default:
      return { ...state };
  }
};

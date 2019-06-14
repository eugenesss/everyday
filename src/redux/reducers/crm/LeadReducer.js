import { NotificationManager } from "react-notifications";
import {
  CHANGE_LEAD_LIST_VIEW,
  GET_LEAD_FAILURE,
  GET_ALL_LEAD,
  GET_MY_LEAD,
  GET_OPEN_LEAD,
  GET_HOT_LEAD,
  GET_COLD_LEAD,
  GET_LEAD_SUCCESS,
  GET_SINGLE_LEAD,
  GET_SINGLE_LEAD_SUCCESS,
  CLEAR_SINGLE_LEAD,
  GET_LEAD_SUMMARY,
  GET_LEAD_SUMMARY_SUCCESS,
  GET_LEAD_SUMMARY_FAILURE,
  HANDLE_CHANGE_NEW_LEAD,
  SUBMIT_NEW_LEAD,
  CLEAR_NEW_LEAD,
  NEW_LEAD_SUCCESS,
  NEW_LEAD_ERROR,
  HANDLE_CONVERT_MODAL,
  HANDLE_SUCCESS_CONVERT_MODAL,
  HANDLE_CHANGE_CONVERT_LEAD,
  CONVERT_LEAD,
  CONVERT_LEAD_SUCCESS,
  CONVERT_LEAD_FAILURE,
  UNMOUNT_CONVERT_LEAD,
  START_LEAD_EDIT,
  SUBMIT_EDIT_LEAD
} from "Types";

const INIT_STATE = {
  leadList: {
    nowShowing: "All Leads",
    options: ["All Leads", "My Leads", "Open Leads", "Hot Leads", "Cold Leads"],
    action: false,
    loading: false,
    tableData: []
  },
  leadSummary: {
    summary: [],
    loading: false
  },
  leadToView: {
    loading: false,
    lead: null
  },
  leadForm: {
    loading: false,
    lead: { baseContact: { _address: {} } }
  },
  leadToConvert: {
    modal: false,
    successMsg: false,
    loading: false,
    dealDetails: {},
    newDeal: null,
    newCust: {},
    newAcct: {}
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_LEAD_LIST_VIEW:
      if (action.payload == "My Leads") {
        return {
          ...state,
          leadList: {
            ...state.leadList,
            nowShowing: action.payload,
            action: true,
            loading: true
          }
        };
      } else {
        return {
          ...state,
          leadList: {
            ...state.leadList,
            nowShowing: action.payload,
            action: false,
            loading: true
          }
        };
      }

    /**
     * Lead Summary
     */
    case GET_LEAD_SUMMARY:
      return {
        ...state,
        leadSummary: {
          ...state.leadSummary,
          loading: true
        }
      };
    case GET_LEAD_SUMMARY_SUCCESS:
      return {
        ...state,
        leadSummary: {
          ...state.leadSummary,
          summary: action.payload,
          loading: false
        }
      };
    case GET_LEAD_SUMMARY_FAILURE:
      NotificationManager.warning("Error in fetching Lead Summary");
      console.log(action.payload);
      return { ...state, leadSummary: INIT_STATE.leadSummary };

    /**
     * Get Leads
     */
    case GET_LEAD_FAILURE:
      NotificationManager.warning("Error in fetching Lead Data");
      console.log(action.payload);
      return {
        ...state,
        leadToView: INIT_STATE.leadToView,
        leadList: INIT_STATE.leadList
      };
    case GET_ALL_LEAD:
    case GET_MY_LEAD:
    case GET_OPEN_LEAD:
    case GET_HOT_LEAD:
    case GET_COLD_LEAD:
      return {
        ...state,
        leadList: { ...state.leadList, loading: true }
      };
    case GET_LEAD_SUCCESS:
      return {
        ...state,
        leadList: {
          ...state.leadList,
          loading: false,
          tableData: action.payload
        }
      };

    /**
     * Get Single Lead
     */
    case GET_SINGLE_LEAD:
      return { ...state, leadToView: { ...state.leadToView, loading: true } };
    case GET_SINGLE_LEAD_SUCCESS:
      return {
        ...state,
        leadToView: {
          ...state.leadToView,
          loading: false,
          lead: action.payload
        }
      };
    case CLEAR_SINGLE_LEAD:
      return {
        ...state,
        leadToView: INIT_STATE.leadToView
      };

    /**
     * New Lead
     */
    case HANDLE_CHANGE_NEW_LEAD:
      if (action.payload.type == "baseContact") {
        return {
          ...state,
          leadForm: {
            ...state.leadForm,
            lead: {
              ...state.leadForm.lead,
              baseContact: {
                ...state.leadForm.lead.baseContact,
                [action.payload.field]: action.payload.value
              }
            }
          }
        };
      } else if (action.payload.type == "address") {
        return {
          ...state,
          leadForm: {
            ...state.leadForm,
            lead: {
              ...state.leadForm.lead,
              baseContact: {
                ...state.leadForm.lead.baseContact,
                _address: {
                  ...state.leadForm.lead.baseContact._address,
                  [action.payload.field]: action.payload.value
                }
              }
            }
          }
        };
      } else {
        return {
          ...state,
          leadForm: {
            ...state.leadForm,
            lead: {
              ...state.leadForm.lead,
              [action.payload.field]: action.payload.value
            }
          }
        };
      }
    case SUBMIT_NEW_LEAD:
      return { ...state, leadForm: { ...state.leadForm, loading: true } };
    case CLEAR_NEW_LEAD:
      return { ...state, leadForm: INIT_STATE.leadForm };
    case NEW_LEAD_SUCCESS:
      return { ...state, leadForm: INIT_STATE.leadForm };
    case NEW_LEAD_ERROR:
      NotificationManager.error("Error in POST API");
      console.log(action.payload);
      return { ...state, leadForm: { ...state.leadForm, loading: false } };

    /**
     * Convert Lead
     */
    case HANDLE_CONVERT_MODAL:
      return {
        ...state,
        leadToConvert: {
          ...state.leadToConvert,
          modal: !state.leadToConvert.modal
        }
      };
    case HANDLE_SUCCESS_CONVERT_MODAL:
      return {
        ...state,
        leadToConvert: {
          ...state.leadToConvert,
          successMsg: !state.leadToConvert.successMsg
        }
      };
    case HANDLE_CHANGE_CONVERT_LEAD:
      return {
        ...state,
        leadToConvert: {
          ...state.leadToConvert,
          dealDetails: {
            ...state.leadToConvert.dealDetails,
            [action.payload.field]: [action.payload.value]
          }
        }
      };
    case CONVERT_LEAD:
      return {
        ...state,
        leadToConvert: {
          ...state.leadToConvert,
          loading: true
        }
      };
    case CONVERT_LEAD_SUCCESS:
      return {
        ...state,
        leadToConvert: {
          ...state.leadToConvert,
          modal: false,
          successMsg: true,
          loading: false,
          newDeal: action.payload.newDeal,
          newCust: action.payload.newCust,
          newAcct: action.payload.newAcct
        }
      };
    case CONVERT_LEAD_FAILURE:
      NotificationManager.warning("Error in Convert POST API");
      console.log(action.payload);
      return {
        ...state,
        leadToConvert: {
          ...state.leadToConvert,
          loading: false
        }
      };
    case UNMOUNT_CONVERT_LEAD:
      return {
        ...state,
        leadToConvert: INIT_STATE.leadToConvert
      };

    /**
     * Edit
     */
    case START_LEAD_EDIT:
      return {
        ...state,
        leadForm: { ...state.leadForm, lead: action.payload }
      };
    case SUBMIT_EDIT_LEAD:
      return {
        ...state,
        leadForm: { ...state.leadForm, loading: true }
      };

    default:
      return { ...state };
  }
};

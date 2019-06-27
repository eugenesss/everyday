import { NotificationManager } from "react-notifications";
import * as leadType from "Types/crm/LeadTypes";

const INIT_STATE = {
  leadList: {
    nowShowing: "All Leads",
    options: ["All Leads", "Open Leads", "Hot Leads", "Cold Leads"],
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
    lead: null,
    sectionLoading: false
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
    newAcct: {},
    accountExist: false
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case leadType.CHANGE_LEAD_LIST_VIEW:
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
    case leadType.GET_LEAD_SUMMARY:
      return {
        ...state,
        leadSummary: {
          ...state.leadSummary,
          loading: true
        }
      };
    case leadType.GET_LEAD_SUMMARY_SUCCESS:
      return {
        ...state,
        leadSummary: {
          ...state.leadSummary,
          summary: action.payload,
          loading: false
        }
      };
    case leadType.GET_LEAD_SUMMARY_FAILURE:
      NotificationManager.warning("Error in fetching Lead Summary");
      console.log(action.payload);
      return { ...state, leadSummary: INIT_STATE.leadSummary };

    /**
     * Get Leads
     */
    case leadType.GET_LEAD_FAILURE:
      NotificationManager.warning("Error in fetching Lead Data");
      console.log(action.payload);
      return {
        ...state,
        leadToView: INIT_STATE.leadToView,
        leadList: INIT_STATE.leadList
      };
    case leadType.GET_ALL_LEAD:
    case leadType.GET_MY_LEAD:
    case leadType.GET_OPEN_LEAD:
    case leadType.GET_HOT_LEAD:
    case leadType.GET_COLD_LEAD:
      return {
        ...state,
        leadList: { ...state.leadList, loading: true }
      };
    case leadType.GET_LEAD_SUCCESS:
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
    case leadType.GET_SINGLE_LEAD:
      return { ...state, leadToView: { ...state.leadToView, loading: true } };
    case leadType.GET_SINGLE_LEAD_SUCCESS:
      return {
        ...state,
        leadToView: {
          ...state.leadToView,
          loading: false,
          lead: action.payload
        }
      };
    case leadType.CLEAR_SINGLE_LEAD:
      return {
        ...state,
        leadToView: INIT_STATE.leadToView
      };

    /**
     * New Lead
     */
    case leadType.HANDLE_CHANGE_NEW_LEAD:
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
    case leadType.SUBMIT_NEW_LEAD:
      return { ...state, leadForm: { ...state.leadForm, loading: true } };
    case leadType.CLEAR_NEW_LEAD:
      return { ...state, leadForm: INIT_STATE.leadForm };
    case leadType.NEW_LEAD_SUCCESS:
      NotificationManager.success("Success!");
      return { ...state, leadForm: INIT_STATE.leadForm };
    case leadType.NEW_LEAD_ERROR:
      NotificationManager.error("Error in POST API");
      console.log(action.payload);
      return { ...state, leadForm: { ...state.leadForm, loading: false } };

    /**
     * Convert Lead
     */
    case leadType.HANDLE_CONVERT_MODAL:
      return {
        ...state,
        leadToConvert: {
          ...state.leadToConvert,
          modal: !state.leadToConvert.modal
        }
      };
    case leadType.HANDLE_SUCCESS_CONVERT_MODAL:
      return {
        ...state,
        leadToConvert: {
          ...state.leadToConvert,
          successMsg: !state.leadToConvert.successMsg
        }
      };
    case leadType.HANDLE_CHANGE_CONVERT_LEAD:
      return {
        ...state,
        leadToConvert: {
          ...state.leadToConvert,
          dealDetails: {
            ...state.leadToConvert.dealDetails,
            [action.payload.field]: action.payload.value
          }
        }
      };
    case leadType.CONVERT_LEAD:
      return {
        ...state,
        leadToConvert: {
          ...state.leadToConvert,
          loading: true
        }
      };
    case leadType.CONVERT_LEAD_SUCCESS:
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
    case leadType.CONVERT_LEAD_FAILURE:
      NotificationManager.warning("Error in Convert POST API");
      console.log(action.payload);
      return {
        ...state,
        leadToConvert: {
          ...state.leadToConvert,
          loading: false
        }
      };
    case leadType.UNMOUNT_CONVERT_LEAD:
      return {
        ...state,
        leadToConvert: INIT_STATE.leadToConvert
      };

    /**
     * Edit
     */
    case leadType.START_LEAD_EDIT:
      return {
        ...state,
        leadForm: { ...state.leadForm, lead: action.payload }
      };
    case leadType.SUBMIT_EDIT_LEAD:
      return {
        ...state,
        leadForm: { ...state.leadForm, loading: true }
      };

    /**
     * Delete
     */
    case leadType.DELETE_LEAD:
      return {
        ...state,
        leadToView: { ...state.leadToView, loading: true },
        leadList: { ...state.leadList, loading: true }
      };
    case leadType.DELETE_LEAD_SUCCESS:
      NotificationManager.success("Lead Deleted!");
      // remove from state
      var afterDeleteData = Object.assign([], state.leadList.tableData).filter(
        lead => lead.id != action.payload
      );
      return {
        ...state,
        leadToView: { ...state.leadToView, loading: false },
        leadList: {
          ...state.leadList,
          loading: false,
          tableData: afterDeleteData
        }
      };
    case leadType.DELETE_LEAD_FAILURE:
      NotificationManager.error("Error in Deleting Lead");
      console.log(action.payload);
      return {
        ...state,
        leadToView: { ...state.leadToView, loading: false },
        leadList: { ...state.leadList, loading: false }
      };

    /**
     * Notes
     */
    case leadType.ADD_NOTE_LEAD:
      return {
        ...state,
        leadToView: { ...state.leadToView, sectionLoading: true }
      };
    case leadType.ADD_NOTE_LEAD_SUCCESS:
      var newNotes = Object.assign([], state.leadToView.lead.notes);
      newNotes.unshift(action.payload);
      return {
        ...state,
        leadToView: {
          ...state.leadToView,
          lead: { ...state.leadToView.lead, notes: newNotes },
          sectionLoading: false
        }
      };
    case leadType.ADD_NOTE_LEAD_FAILURE:
      NotificationManager.error("Error in adding Note");
      console.log(action.payload);
      return {
        ...state,
        leadToView: { ...state.leadToView, sectionLoading: false }
      };

    default:
      return { ...state };
  }
};

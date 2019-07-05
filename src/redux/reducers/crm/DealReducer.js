import { NotificationManager } from "react-notifications";
import * as dealType from "Types/crm/DealTypes";

const INIT_STATE = {
  dealList: {
    nowShowing: "All Deals",
    options: ["All Deals", "Open Deals", "Closed Deals", "Won Deals"],
    action: false,
    loading: false,
    tableData: []
  },
  dealSummary: {
    loading: false,
    summary: []
  },
  dealToView: {
    loading: false,
    deal: null,
    sectionLoading: false,
    dealStageStepper: {
      activeStep: 0,
      completed: new Set(),
      loading: false
    }
  },
  dealForm: { loading: false, deal: {} }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case dealType.CHANGE_DEAL_LIST_VIEW:
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
     * Deal Summary
     */
    case dealType.GET_DEAL_SUMMARY:
      return {
        ...state,
        dealSummary: {
          ...state.dealSummary,
          loading: true
        }
      };
    case dealType.GET_DEAL_SUMMARY_SUCCESS:
      return {
        ...state,
        dealSummary: {
          ...state.dealSummary,
          summary: action.payload,
          loading: false
        }
      };
    case dealType.GET_DEAL_SUMMARY_FAILURE:
      NotificationManager.warning("Error in fetching Deal Summary");
      console.log(action.payload);
      return { ...state, dealSummary: INIT_STATE.dealSummary };

    /**
     * Get Deals
     */
    case dealType.GET_DEAL_FAILURE:
      NotificationManager.warning("Error in fetching Deal Data");
      console.log(action.payload);
      return {
        ...state,
        dealToView: INIT_STATE.dealToView,
        dealList: INIT_STATE.dealList
      };
    case dealType.GET_ALL_DEAL:
    case dealType.GET_MY_DEAL:
    case dealType.GET_OPEN_DEAL:
    case dealType.GET_CLOSED_DEAL:
    case dealType.GET_WON_DEAL:
      return {
        ...state,
        dealList: { ...state.dealList, loading: true }
      };
    case dealType.GET_DEAL_SUCCESS:
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
    case dealType.GET_SINGLE_DEAL:
      return {
        ...state,
        dealToView: { ...state.dealToView, loading: true }
      };
    case dealType.GET_SINGLE_DEAL_SUCCESS:
      return {
        ...state,
        dealToView: {
          ...state.dealToView,
          loading: false,
          deal: action.payload
        }
      };
    case dealType.CLEAR_SINGLE_DEAL:
      return {
        ...state,
        dealToView: INIT_STATE.dealToView
      };

    /**
     * Handle Deal Stage
     */
    case dealType.ON_CLICK_STEP:
      return {
        ...state,
        dealToView: {
          ...state.dealToView,
          dealStageStepper: {
            ...state.dealToView.dealStageStepper,
            activeStep: action.payload
          }
        }
      };
    case dealType.SET_CURRENT_STEP:
      const completed = new Set();
      for (let i = 0; i <= action.payload; i++) {
        completed.add(i);
      }
      return {
        ...state,
        dealToView: {
          ...state.dealToView,
          dealStageStepper: {
            ...state.dealToView.dealStageStepper,
            completed,
            activeStep: action.payload
          }
        }
      };
    case dealType.ON_CHANGE_STEP_STATE:
      const activeStep = state.dealToView.dealStageStepper.activeStep;
      const completedSet = new Set();
      for (let i = 0; i <= activeStep; i++) {
        completedSet.add(i);
      }
      return {
        ...state,
        dealToView: {
          ...state.dealToView,
          dealStageStepper: {
            ...state.dealToView.dealStageStepper,
            completed: completedSet,
            activeStep: activeStep
          }
        }
      };
    case dealType.ON_SUBMIT_NEW_STAGE:
      return {
        ...state,
        dealToView: {
          ...state.dealToView,
          dealStageStepper: {
            ...state.dealToView.dealStageStepper,
            loading: true
          }
        }
      };
    case dealType.ON_SUBMIT_NEW_STAGE_SUCCESS:
      return {
        ...state,
        dealToView: {
          ...state.dealToView,
          deal: action.payload,
          dealStageStepper: {
            ...state.dealToView.dealStageStepper,
            loading: false
          }
        }
      };
    case dealType.ON_SUBMIT_NEW_STAGE_FAILURE:
      NotificationManager.error("Error in POST API");
      console.log(action.payload);
      return {
        ...state,
        dealToView: {
          ...state.dealToView,
          dealStageStepper: {
            ...state.dealToView.dealStageStepper,
            loading: false
          }
        }
      };

    /**
     * New Deal
     */
    case dealType.NEW_DEAL:
      return {
        ...state,
        dealForm: { ...state.dealForm, loading: true }
      };
    case dealType.NEW_DEAL_SUCCESS:
      NotificationManager.success("Deal Created");
      return { ...state, dealForm: INIT_STATE.dealForm };
    case dealType.NEW_DEAL_FAILURE:
      NotificationManager.error("Error in POST API");
      console.log(action.payload);
      return {
        ...state,
        dealForm: { ...state.dealForm, loading: false }
      };

    /**
     * Edit
     */
    case dealType.EDIT_DEAL:
      return {
        ...state,
        dealForm: { ...state.dealForm, loading: true }
      };
    case dealType.EDIT_DEAL_SUCCESS:
      NotificationManager.success("Deal Edited");
      return {
        ...state,
        dealForm: { ...state.dealForm, loading: false }
      };
    case dealType.EDIT_DEAL_FAILURE:
      NotificationManager.error("Error in Edit");
      console.log(action.payload);
      return {
        ...state,
        dealForm: { ...state.dealForm, loading: false }
      };

    /**
     * Delete
     */
    case dealType.DELETE_DEAL:
      return {
        ...state,
        dealToView: { ...state.dealToView, loading: true },
        dealList: { ...state.dealList, loading: true }
      };
    case dealType.DELETE_DEAL_SUCCESS:
      NotificationManager.success("Deal Deleted");
      // remove from state
      var afterDeleteData = Object.assign([], state.dealList.tableData).filter(
        cust => cust.id != action.payload
      );
      return {
        ...state,
        dealToView: { ...state.dealToView, loading: false },
        dealList: {
          ...state.dealList,
          loading: false,
          tableData: afterDeleteData
        }
      };
    case dealType.DELETE_DEAL_FAILURE:
      NotificationManager.error("Error in Deleting Deal");
      console.log(action.payload);
      return {
        ...state,
        dealToView: { ...state.dealToView, loading: false },
        dealList: { ...state.dealList, loading: false }
      };

    /**
     * Notes
     */
    case dealType.ADD_NOTE_DEAL:
      return {
        ...state,
        dealToView: { ...state.dealToView, sectionLoading: true }
      };
    case dealType.ADD_NOTE_DEAL_SUCCESS:
      var newNotes = Object.assign([], state.dealToView.deal.notes);
      newNotes.unshift(action.payload);
      return {
        ...state,
        dealToView: {
          ...state.dealToView,
          deal: { ...state.dealToView.deal, notes: newNotes },
          sectionLoading: false
        }
      };
    case dealType.ADD_NOTE_DEAL_FAILURE:
      NotificationManager.error("Error in adding Note");
      console.log(action.payload);
      return {
        ...state,
        dealToView: { ...state.dealToView, sectionLoading: false }
      };

    /**
     * Transfer
     */
    case dealType.TRANSFER_DEAL:
      return { ...state, dealToView: { ...state.dealToView, loading: true } };
    case dealType.TRANSFER_DEAL_SUCCESS:
      NotificationManager.success("Record Transferred");
      return {
        ...state,
        dealToView: {
          ...state.dealToView,
          deal: action.payload,
          loading: false
        }
      };
    case dealType.TRANSFER_DEAL_FAILURE:
      NotificationManager.error("Error in Transferring Record");
      console.log(action.payload);
      return { ...state, dealToView: { ...state.dealToView, loading: false } };

    default:
      return { ...state };
  }
};

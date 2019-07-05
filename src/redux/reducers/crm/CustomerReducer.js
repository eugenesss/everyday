import { NotificationManager } from "react-notifications";
import * as custType from "Types/crm/CustomerTypes";

const INIT_STATE = {
  customerList: {
    nowShowing: "All Customers",
    options: ["All Customers", "Active Customers", "Inactive Customers"],
    action: false,
    loading: false,
    tableData: []
  },
  customerToView: {
    loading: false,
    customer: null,
    sectionLoading: false
  },
  customerForm: {
    loading: false,
    customer: { baseContact: { _address: {} } }
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case custType.CHANGE_CUSTOMER_LIST_VIEW:
      if (action.payload == "My Customers") {
        return {
          ...state,
          customerList: {
            ...state.customerList,
            nowShowing: action.payload,
            action: true,
            loading: true
          }
        };
      } else {
        return {
          ...state,
          customerList: {
            ...state.customerList,
            nowShowing: action.payload,
            action: false,
            loading: true
          }
        };
      }

    /**
     * Get Customers
     */
    case custType.GET_CUSTOMER_FAILURE:
      NotificationManager.warning("Error in fetching Customer Data");
      console.log(action.payload);
      return {
        ...state,
        customerToView: INIT_STATE.customerToView,
        customerList: INIT_STATE.customerList
      };
    case custType.GET_ALL_CUSTOMER:
    case custType.GET_MY_CUSTOMER:
    case custType.GET_OPEN_CUSTOMER:
      return {
        ...state,
        customerList: { ...state.customerList, loading: true }
      };
    case custType.GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        customerList: {
          ...state.customerList,
          loading: false,
          tableData: action.payload
        }
      };

    /**
     * Get Single Customer
     */
    case custType.GET_SINGLE_CUSTOMER:
      return {
        ...state,
        customerToView: { ...state.customerToView, loading: true }
      };
    case custType.GET_SINGLE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customerToView: {
          ...state.customerToView,
          loading: false,
          customer: action.payload
        }
      };
    case custType.CLEAR_SINGLE_CUSTOMER:
      return {
        ...state,
        customerToView: INIT_STATE.customerToView
      };

    /**
     * New Customer
     */

    case custType.NEW_CUSTOMER:
      return {
        ...state,
        customerForm: { ...state.customerForm, loading: true }
      };
    case custType.NEW_CUSTOMER_SUCCESS:
      NotificationManager.success("Customer Created");
      return { ...state, customerForm: INIT_STATE.customerForm };
    case custType.NEW_CUSTOMER_FAILURE:
      NotificationManager.error("Error in POST API");
      console.log(action.payload);
      return {
        ...state,
        customerForm: { ...state.customerForm, loading: false }
      };

    /**
     * Edit
     */
    case custType.EDIT_CUSTOMER:
      return {
        ...state,
        customerForm: { ...state.customerForm, loading: true }
      };
    case custType.EDIT_CUSTOMER_SUCCESS:
      NotificationManager.success("Customer Edited");
      return {
        ...state,
        customerForm: INIT_STATE.customerForm
      };
    case custType.EDIT_CUSTOMER_FAILURE:
      NotificationManager.error("Error in Edit");
      console.log(action.payload);
      return {
        ...state,
        customerForm: { ...state.customerForm, loading: false }
      };

    /**
     * Delete
     */
    case custType.DELETE_CUSTOMER:
      return {
        ...state,
        customerToView: { ...state.customerToView, loading: true },
        customerList: { ...state.customerList, loading: true }
      };
    case custType.DELETE_CUSTOMER_SUCCESS:
      NotificationManager.success("Customer Deleted");
      // remove from state
      var afterDeleteData = Object.assign(
        [],
        state.customerList.tableData
      ).filter(cust => cust.id != action.payload);
      return {
        ...state,
        customerToView: { ...state.customerToView, loading: false },
        customerList: {
          ...state.customerList,
          loading: false,
          tableData: afterDeleteData
        }
      };
    case custType.DELETE_CUSTOMER_FAILURE:
      NotificationManager.error("Error in Deleting Customer");
      console.log(action.payload);
      return {
        ...state,
        customerToView: { ...state.customerToView, loading: false },
        customerList: { ...state.customerList, loading: false }
      };

    /**
     * Notes
     */
    case custType.ADD_NOTE_CUSTOMER:
      return {
        ...state,
        customerToView: { ...state.customerToView, sectionLoading: true }
      };
    case custType.ADD_NOTE_CUSTOMER_SUCCESS:
      var newNotes = Object.assign([], state.customerToView.customer.notes);
      newNotes.unshift(action.payload);
      return {
        ...state,
        customerToView: {
          ...state.customerToView,
          customer: { ...state.customerToView.customer, notes: newNotes },
          sectionLoading: false
        }
      };
    case custType.ADD_NOTE_CUSTOMER_FAILURE:
      NotificationManager.error("Error in adding Note");
      console.log(action.payload);
      return {
        ...state,
        customerToView: { ...state.customerToView, sectionLoading: false }
      };

    /**
     * Set Active
     */
    case custType.SET_CUSTOMER_ACTIVE:
      NotificationManager.success("Customer Status Updated");
      return {
        ...state,
        customerToView: { ...state.customerToView, loading: true }
      };
    case custType.SET_CUSTOMER_ACTIVE_SUCCESS:
      return {
        ...state,
        customerToView: {
          ...state.customerToView,
          customer: action.payload,
          loading: false
        }
      };
    case custType.SET_CUSTOMER_ACTIVE_FAILURE:
      NotificationManager.error("Error");
      console.log(action.payload);
      return {
        ...state,
        customerToView: { ...state.customerToView, loading: false }
      };

    /**
     * Transfer
     */
    case custType.TRANSFER_CUSTOMER:
      return {
        ...state,
        customerToView: { ...state.customerToView, loading: true }
      };
    case custType.TRANSFER_CUSTOMER_SUCCESS:
      NotificationManager.success("Record Transferred");
      return {
        ...state,
        customerToView: {
          ...state.customerToView,
          customer: action.payload,
          loading: false
        }
      };
    case custType.TRANSFER_CUSTOMER_FAILURE:
      NotificationManager.error("Error in Transferring Record");
      console.log(action.payload);
      return {
        ...state,
        customerToView: { ...state.customerToView, loading: false }
      };

    default:
      return { ...state };
  }
};

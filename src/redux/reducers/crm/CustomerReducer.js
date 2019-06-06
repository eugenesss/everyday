import { NotificationManager } from "react-notifications";
import {
  CUSTOMER_LIST_DROPDOWN,
  CHANGE_CUSTOMER_LIST_VIEW,
  GET_CUSTOMER_FAILURE,
  GET_CUSTOMER_SUCCESS,
  GET_ALL_CUSTOMER,
  GET_MY_CUSTOMER,
  GET_OPEN_CUSTOMER,
  GET_SINGLE_CUSTOMER,
  GET_SINGLE_CUSTOMER_SUCCESS,
  CLEAR_SINGLE_CUSTOMER,
  HANDLE_CHANGE_CUSTOMER,
  SUBMIT_CUSTOMER,
  CLEAR_CUSTOMER_FORM,
  SUBMIT_CUSTOMER_SUCCESS,
  SUBMIT_CUSTOMER_ERROR
} from "Types";

const INIT_STATE = {
  customerList: {
    dropdownOpen: false,
    nowShowing: "All Customers",
    options: ["All Customers", "My Customers", "Open Customers"],
    action: false,
    loading: false,
    tableData: []
  },
  customerToView: {
    loading: false,
    customer: null
  },
  customerForm: {
    loading: false,
    customer: { baseContact: { _address: {} } }
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CUSTOMER_LIST_DROPDOWN:
      return {
        ...state,
        customerList: {
          ...state.customerList,
          dropdownOpen: !state.customerList.dropdownOpen
        }
      };
    case CHANGE_CUSTOMER_LIST_VIEW:
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
    case GET_CUSTOMER_FAILURE:
      NotificationManager.warning("Error in fetching Customer Data");
      console.log(action.payload);
      return {
        ...state,
        customerToView: INIT_STATE.customerToView,
        customerList: INIT_STATE.customerList
      };
    case GET_ALL_CUSTOMER:
    case GET_MY_CUSTOMER:
    case GET_OPEN_CUSTOMER:
      return {
        ...state,
        customerList: { ...state.customerList, loading: true }
      };
    case GET_CUSTOMER_SUCCESS:
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
    case GET_SINGLE_CUSTOMER:
      return {
        ...state,
        customerToView: { ...state.customerToView, loading: true }
      };
    case GET_SINGLE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customerToView: {
          ...state.customerToView,
          loading: false,
          customer: action.payload
        }
      };
    case CLEAR_SINGLE_CUSTOMER:
      return {
        ...state,
        customerToView: INIT_STATE.customerToView
      };

    /**
     * New Customer
     */
    case HANDLE_CHANGE_CUSTOMER:
      if (action.payload.type == "baseContact") {
        return {
          ...state,
          customerForm: {
            ...state.customerForm,
            customer: {
              ...state.customerForm.customer,
              baseContact: {
                ...state.customerForm.customer.baseContact,
                [action.payload.field]: action.payload.value
              }
            }
          }
        };
      } else if (action.payload.type == "address") {
        return {
          ...state,
          customerForm: {
            ...state.customerForm,
            customer: {
              ...state.customerForm.customer,
              baseContact: {
                ...state.customerForm.customer.baseContact,
                _address: {
                  ...state.customerForm.customer.baseContact._address,
                  [action.payload.field]: action.payload.value
                }
              }
            }
          }
        };
      } else {
        return {
          ...state,
          customerForm: {
            ...state.customerForm,
            customer: {
              ...state.customerForm.customer,
              [action.payload.field]: action.payload.value
            }
          }
        };
      }
    case SUBMIT_CUSTOMER:
      return {
        ...state,
        customerForm: { ...state.customerForm, loading: true }
      };
    case CLEAR_CUSTOMER_FORM:
      return { ...state, customerForm: INIT_STATE.customerForm };
    case SUBMIT_CUSTOMER_SUCCESS:
      return { ...state, customerForm: INIT_STATE.customerForm };
    case SUBMIT_CUSTOMER_ERROR:
      NotificationManager.error("Error in POST API");
      console.log(action.payload);
      return {
        ...state,
        customerForm: { ...state.customerForm, loading: false }
      };

    default:
      return { ...state };
  }
};

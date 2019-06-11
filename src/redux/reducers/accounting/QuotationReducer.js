import { NotificationManager } from "react-notifications";
import {
  QUOTATION_LIST_DROPDOWN,
  CHANGE_QUOTATION_LIST_VIEW,
  TOGGLE_QUOTATION_SUMMARY,
  GET_QUOTATION_FAILURE,
  GET_QUOTATION_SUCCESS,
  GET_ALL_QUOTATION,
  GET_MY_QUOTATION,
  GET_OPEN_QUOTATION,
  GET_CLOSED_QUOTATION,
  GET_SINGLE_QUOTATION,
  GET_SINGLE_QUOTATION_SUCCESS,
  CLEAR_SINGLE_QUOTATION,
  GET_QUOTE_SUMMARY,
  GET_QUOTE_SUMMARY_SUCCESS,
  GET_QUOTE_SUMMARY_FAILURE,
  HANDLE_CHANGE_QUOTATION,
  SUBMIT_QUOTATION,
  CLEAR_QUOTATION_FORM,
  SUBMIT_QUOTATION_SUCCESS,
  SUBMIT_QUOTATION_FAILURE,
  ADD_NEW_PRODUCT_QUOTATION,
  REMOVE_PRODUCT_QUOTATION,
  HANDLE_PRODUCT_QUOTATION,
  HANDLE_RELATED_TO_QUOTATION,
  HANDLE_ATTN_TO_QUOTATION,
  HANDLE_DISCOUNT_TAX_QUOTATION
} from "Types";

const INIT_STATE = {
  quotationList: {
    dropdownOpen: false,
    nowShowing: "All Quotations",
    options: [
      "All Quotations",
      "My Quotations",
      "Open Quotations",
      "Closed Quotations"
    ],
    action: false,
    loading: false,
    tableData: []
  },
  quotationSummary: {
    showSummary: false,
    loading: false,
    summary: []
  },
  quotationToView: {
    loading: false,
    quotation: null
  },
  quotationForm: {
    loading: false,
    quotation: {
      date: "",
      state: "",
      sent_date: "",
      tnc: "",
      currency: "",
      currency_rate: "",
      version: "",
      subtotal: 0,
      tax_amount: 0,
      discount_total: 0,
      total: 0
    },
    products: [
      {
        name: "",
        description: "",
        quantity: "",
        price: "",
        discount: "",
        tax_amount: "",
        amount: 0
      }
    ]
  }
};

export default (state = INIT_STATE, action) => {
  function getSubTotal(array, key) {
    return array.reduce((a, b) => a + (b[key] || 0), 0);
  }
  function getSingleProductTotal(product) {
    var subtotal = product.price * product.quantity;
    var tax = (product.tax_amount / 100) * subtotal;
    var discount = (product.discount / 100) * subtotal;
    var total = subtotal + tax - discount;
    return total;
  }
  function getTotal(subTotal, invoice) {
    var tax = (invoice.tax_amount / 100) * subTotal;
    var discount = (invoice.discount_total / 100) * subTotal;
    var total = subTotal + tax - discount;
    return total;
  }
  switch (action.type) {
    case QUOTATION_LIST_DROPDOWN:
      return {
        ...state,
        quotationList: {
          ...state.quotationList,
          dropdownOpen: !state.quotationList.dropdownOpen
        }
      };
    case CHANGE_QUOTATION_LIST_VIEW:
      if (action.payload == "My Quotations") {
        return {
          ...state,
          quotationList: {
            ...state.quotationList,
            nowShowing: action.payload,
            action: true,
            loading: true
          }
        };
      } else {
        return {
          ...state,
          quotationList: {
            ...state.quotationList,
            nowShowing: action.payload,
            action: false,
            loading: true
          }
        };
      }

    /**
     * Quotation Summary
     */
    case TOGGLE_QUOTATION_SUMMARY:
      return {
        ...state,
        quotationSummary: {
          ...state.quotationSummary,
          showSummary: !state.quotationSummary.showSummary
        }
      };
    case GET_QUOTE_SUMMARY:
      return {
        ...state,
        quotationSummary: {
          ...state.quotationSummary,
          loading: true
        }
      };
    case GET_QUOTE_SUMMARY_SUCCESS:
      return {
        ...state,
        quotationSummary: {
          ...state.quotationSummary,
          summary: action.payload,
          loading: false
        }
      };
    case GET_QUOTE_SUMMARY_FAILURE:
      NotificationManager.warning("Error in fetching Quotation Summary");
      console.log(action.payload);
      return { ...state, quotationSummary: INIT_STATE.quotationSummary };

    /**
     * Get Quotes
     */
    case GET_QUOTATION_FAILURE:
      NotificationManager.warning("Error in fetching Quotation Data");
      console.log(action.payload);
      return INIT_STATE;
    case GET_ALL_QUOTATION:
    case GET_MY_QUOTATION:
    case GET_OPEN_QUOTATION:
    case GET_CLOSED_QUOTATION:
      return {
        ...state,
        quotationList: { ...state.quotationList, loading: true }
      };
    case GET_QUOTATION_SUCCESS:
      return {
        ...state,
        quotationList: {
          ...state.quotationList,
          loading: false,
          tableData: action.payload
        }
      };

    /**
     * Get Single Quotation
     */
    case GET_SINGLE_QUOTATION:
      return {
        ...state,
        quotationToView: { ...state.quotationToView, loading: true }
      };
    case GET_SINGLE_QUOTATION_SUCCESS:
      return {
        ...state,
        quotationToView: {
          ...state.quotationToView,
          loading: false,
          quotation: action.payload
        }
      };
    case CLEAR_SINGLE_QUOTATION:
      return {
        ...state,
        quotationToView: INIT_STATE.quotationToView
      };

    /**
     * New Quote
     */
    case SUBMIT_QUOTATION:
      return {
        ...state,
        quotationForm: {
          ...state.quotationForm,
          loading: true
        }
      };
    case CLEAR_QUOTATION_FORM:
      return {
        ...state,
        quotationForm: INIT_STATE.quotationForm
      };

    /**
     * Quotation Product
     */
    case ADD_NEW_PRODUCT_QUOTATION:
      return {
        ...state,
        quotationForm: {
          ...state.quotationForm,
          products: [
            ...state.quotationForm.products,
            {
              name: "",
              description: "",
              quantity: "",
              price: "",
              discount: "",
              tax_amount: "",
              amount: 0
            }
          ]
        }
      };
    case REMOVE_PRODUCT_QUOTATION:
      var arr = Object.assign([], state.quotationForm.products);
      var removeArr = [
        ...arr.slice(0, action.payload),
        ...arr.slice(action.payload + 1)
      ];
      //   var arrAmount = removeArr[action.payload].amount;
      return {
        ...state,
        quotationForm: {
          ...state.quotationForm,
          products: removeArr
        }
      };

    /**
     * Handle Change
     */
    case HANDLE_CHANGE_QUOTATION:
      return {
        ...state,
        quotationForm: {
          ...state.quotationForm,
          quotation: {
            ...state.quotationForm.quotation,
            [action.payload.field]: action.payload.value
          }
        }
      };
    case HANDLE_RELATED_TO_QUOTATION:
    //return
    case HANDLE_ATTN_TO_QUOTATION:
      var attnTo = action.payload.value;
      return {
        ...state,
        quotationForm: {
          ...state.quotationForm,
          quotation: {
            ...state.quotationForm.quotation,
            attn_to: attnTo.id,
            address1: attnTo.address1,
            address2: attnTo.address2,
            city: attnTo.city,
            state: attnTo.state,
            zip: attnTo.zip,
            email: attnTo.email,
            phone: attnTo.mobile
          }
        }
      };
    case HANDLE_PRODUCT_QUOTATION:
      var changeArr = state.quotationForm.products;
      changeArr[action.payload.key] = {
        ...changeArr[action.payload.key],
        [action.payload.field]: action.payload.value
      };
      changeArr[action.payload.key].amount = getSingleProductTotal(
        changeArr[action.payload.key]
      );
      var productTotal = getSubTotal(changeArr, "amount");
      return {
        ...state,
        quotationForm: {
          ...state.quotationForm,
          products: changeArr,
          quotation: {
            ...state.quotationForm.quotation,
            subtotal: productTotal,
            total: getTotal(productTotal, state.quotationForm.quotation)
          }
        }
      };

    default:
      return { ...state };
  }
};

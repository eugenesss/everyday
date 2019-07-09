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
  DELETE_QUOTATION,
  DELETE_QUOTATION_SUCCESS,
  DELETE_QUOTATION_FAILURE,
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
    deleted: false,
    tableData: [],
    currencyTable:[{name: 'SGD', rate: 1},{name: 'USD', rate: 1.3},{name: 'EU', rate: 1.5}],
    taxTable:[{name: 'GST 7%', rate: 7},{name: 'GST Inclusive', rate: 0}]

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
    attn_to_array: [],
    quotation: {

      date: new Date(),
      currency: "",
      currency_rate: "",
      total: 0,
      version: "",
      subtotal: 0,
      tax_amount: 0,
      discount_total: 0,


      description: "",
      owner: "",
      account:"",
      attn_toId:"",
      
      address_1:"",
      address_2:"",
      city: "",
      state: "",
      zip: "",
      email: "",
      mobile:"",
      office: "",
      fax: "",
      sent_date: "",
      tnc: "",
    

      quoteID: "QUOT-100001",
      account: null,
      status: "Draft",
      totalAmt: 100,
      sentOn: new Date(),
      dueDate: new Date(),

    },
    products: [
      {
        // name: "",
        description: "",
        quantity: "",
        price: "",
        discount: "",
        tax_id:"",
        tax_rate: 0,
        tax_amount: 0,
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
    var tax = (product.tax_id.rate / 100) * subtotal;
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

  function getTax (product) {
    // let subTotal = 0
    let totalTax = 0
    // let total = 0
    console.log(product)
    if (product.length > 0) {
      product.forEach(element =>{
        totalTax = totalTax + element.tax_amount
      })
      return totalTax
    }
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
        quotationList:{
          ...state.quotationList,
          deleted: false
        },
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
        quotationForm: INIT_STATE.quotationForm,
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
              tax_id:"",
              tax_rate:"",
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

      case HANDLE_PRODUCT_QUOTATION:
        
        var changeArr = state.quotationForm.products;
    
        changeArr[action.payload.key] = {
          ...changeArr[action.payload.key],
          [action.payload.field]: action.payload.value
        };

        if (action.payload.field == "tax_id"){
          changeArr[action.payload.key] = {
            ...changeArr[action.payload.key],
            tax_rate : action.payload.value.rate,
          };
        }

        changeArr[action.payload.key].amount = getSingleProductTotal(
          changeArr[action.payload.key]
        );

        if (changeArr.rate != 0){
          changeArr[action.payload.key].tax_amount = (((changeArr[action.payload.key].tax_rate)/100) * (changeArr[action.payload.key].price * changeArr[action.payload.key].quantity))
        } else {
          changeArr[action.payload.key].tax_amount = 0
        }

        var productTotal = getSubTotal(changeArr, "amount");
        var tax = getTax(changeArr)
      

        return {
          ...state,
          quotationForm: {
            ...state.quotationForm,
            products: changeArr,
            quotation: {
              ...state.quotationForm.quotation,
              subtotal: productTotal,
              total: getTotal(productTotal, state.quotationForm.quotation),
              tax_amount: tax
            }
          }
        };
  
    /**
     * Handle Change
     */
    case HANDLE_CHANGE_QUOTATION:

      var changeArr = state.quotationForm.products;


      // auto fill for address, ctiy, state, zip, mobile, office, fax
      if(action.payload.field == "account") {
        return {
          ...state,
          quotationForm: {
            ...state.quotationForm,
            attn_to_array: action.payload.value.customers,
            quotation: {
              ...state.quotationForm.quotation,
              [action.payload.field]: action.payload.value,
              address_1: action.payload.value.baseContact._address.address_1,
              address_2: action.payload.value.baseContact._address.address_2,
              city: action.payload.value.baseContact._address.city,
              state: "",
              zip: action.payload.value.baseContact._address.zip,
              mobile: action.payload.value.baseContact.mobile,
              office: action.payload.value.baseContact.office,
              fax: action.payload.value.baseContact.fax,
            }
          }
        };
      }

      // autofill for email
      if(action.payload.field == "attn_toId") {
        return {
          ...state,
          quotationForm: {
            ...state.quotationForm,
            quotation: {
              ...state.quotationForm.quotation,
              [action.payload.field]: action.payload.value,
              email:action.payload.value.baseContact.email,
            }
          }
        };
      }

      if(action.payload.field == "currency") {
        return {
          ...state,
          quotationForm: {
            ...state.quotationForm,
            quotation: {
              ...state.quotationForm.quotation,
              currency: action.payload.value,
              currency_rate: action.payload.value.rate
            }
          }
        };
      }

      var productTotal = getSubTotal(changeArr, "amount");
      var tax = getTax(changeArr)

      return {
        ...state,
        quotationForm: {
          ...state.quotationForm,
          quotation: {
            ...state.quotationForm.quotation,
            [action.payload.field]: action.payload.value,
            subtotal: productTotal,
            tax_amount: tax
          }
        }
      };







    case SUBMIT_QUOTATION_SUCCESS:
      NotificationManager.success("New quotation submitted")
      let initialItem = INIT_STATE.quotationForm.quotation
      return {
        ...state,
        quotationForm: {
          quotation : initialItem,
          products: [
            {
              description: "",
              quantity: "",
              price: "",
              discount: "",
              tax_id:"",
              tax_rate: 0,
              tax_amount: 0,
              amount: 0
            }
          ]
        }
      }
      

    case SUBMIT_QUOTATION_FAILURE:
      NotificationManager.warning("Unable to submit quotation, please try again")

      return {
        ...state,
        quotationForm: {
          ...state.quotationForm,
          quotation: {
            ...state.quotationForm.quotation,
          }
        }
      };

    case DELETE_QUOTATION:
      // console.log(action.payload)
      // NotificationManager.warning("Unable to submit quotation, please try again")
      return {
        ...state,
        quotationList: {
          ...state.quotationList,
        }
        
      };

    case DELETE_QUOTATION_SUCCESS:
      // console.log(action.payload)
      NotificationManager.success("Quotation successfully deleted")
      return {
        ...state,
        quotationList: {
          ...state.quotationList,
          deleted: true
        }
      };

    case DELETE_QUOTATION_FAILURE:
      NotificationManager.error(action.payload)
      return {
        ...state,
        quotationList: {
          ...state.quotationList,
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

    default:
      return { ...state };
  }
};

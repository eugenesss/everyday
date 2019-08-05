import { NotificationManager } from "react-notifications";

import * as types from 'Types'


const INIT_STATE = {
    loading: false,
};


export default (state = INIT_STATE, action) => {
  
    switch (action.type) {
      case types.HANDLE_SUBMIT_ACCOUNT_QUOTATION_INVOICE:
        return {...state};

        case types.HANDLE_SUBMIT_ACCOUNT_QUOTATION_INVOICE_SUCCESS:
            NotificationManager.success("New form has been successfully created");
            return {...state};

        case types.HANDLE_SUBMIT_ACCOUNT_QUOTATION_INVOICE_FAILURE:
            NotificationManager.error("Unable to create form fields, please try again");
            return {...state};

        default:
            return {...state};
    }
}
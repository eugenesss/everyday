import {
  PAYMENT_LIST_DROPDOWN,
  CHANGE_PAYMENT_LIST_VIEW,
  GET_PAYMENT_FAILURE,
  GET_ALL_PAYMENT,
  GET_MY_PAYMENT,
  GET_OPEN_PAYMENT,
  GET_CLOSED_PAYMENT,
  GET_PAYMENT_SUCCESS,
  GET_SINGLE_PAYMENT,
  GET_SINGLE_PAYMENT_SUCCESS,
  CLEAR_SINGLE_PAYMENT
} from "Types";

/**
 * Change List View
 */
export const changePaymentView = newValue => ({
  type: CHANGE_PAYMENT_LIST_VIEW,
  payload: newValue
});
/**
 * Toggle DropDown
 */
export const togglePaymentDropDown = () => ({
  type: PAYMENT_LIST_DROPDOWN
});

/**
 * Get Payment Failure
 */
export const getPaymentFailure = error => ({
  type: GET_PAYMENT_FAILURE,
  payload: error
});

/**
 * Get Payment Success
 */
export const getPaymentSuccess = data => ({
  type: GET_PAYMENT_SUCCESS,
  payload: data
});

/**
 * Get All Payment
 */
export const getAllPayment = () => ({
  type: GET_ALL_PAYMENT
});

/**
 * Get My Payment
 */
export const getMyPayment = () => ({
  type: GET_MY_PAYMENT
});

/**
 * Get Open Payment
 */
export const getOpenPayment = () => ({
  type: GET_OPEN_PAYMENT
});

/**
 * Get Closed Payment
 */
export const getClosedPayment = () => ({
  type: GET_CLOSED_PAYMENT
});

/**
 * Get Single Payment
 */
export const getSinglePayment = credID => ({
  type: GET_SINGLE_PAYMENT,
  payload: credID
});
export const getSinglePaymentSuccess = data => ({
  type: GET_SINGLE_PAYMENT_SUCCESS,
  payload: data
});
export const clearSinglePayment = () => ({
  type: CLEAR_SINGLE_PAYMENT
});

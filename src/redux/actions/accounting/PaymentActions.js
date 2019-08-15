import * as types from "Types";

// /**
//  * Change List View
//  */
export const changePaymentView = newValue => ({
  type: types.CHANGE_PAYMENT_LIST_VIEW,
  payload: newValue
});
// /**
//  * Toggle DropDown
//  */
export const togglePaymentDropDown = () => ({
  type: types.PAYMENT_LIST_DROPDOWN
});

export const getAllPayment = () => ({
  type: types.GET_ALL_PAYMENT
});

// /**
//  * Get Payment Failure
//  */
// export const getPaymentFailure = error => ({
//   type: GET_PAYMENT_FAILURE,
//   payload: error
// });

// /**
//  * Get Payment Success
//  */
// export const getPaymentSuccess = data => ({
//   type: GET_PAYMENT_SUCCESS,
//   payload: data
// });

// /**
//  * Get All Payment
//  */

// /**
//  * Get My Payment
//  */
// export const getMyPayment = () => ({
//   type: GET_MY_PAYMENT
// });

// /**
//  * Get Open Payment
//  */
// export const getOpenPayment = () => ({
//   type: GET_OPEN_PAYMENT
// });

// /**
//  * Get Closed Payment
//  */
// export const getClosedPayment = () => ({
//   type: GET_CLOSED_PAYMENT
// });

// /**
//  * Get Single Payment
//  */
// export const getSinglePayment = credID => ({
//   type: GET_SINGLE_PAYMENT,
//   payload: credID
// });
// export const getSinglePaymentSuccess = data => ({
//   type: GET_SINGLE_PAYMENT_SUCCESS,
//   payload: data
// });
// export const clearSinglePayment = () => ({
//   type: CLEAR_SINGLE_PAYMENT
// });



/**
 * Make Payment
 */
export const makePayment = data => ({
  type: types.MAKE_PAYMENT,
  payload: data
});
export const makePaymentSuccess = data => ({
  type: types.MAKE_PAYMENT_SUCCESS,
  payload: data
});
export const makePaymentFailure = () => ({
  type: types.MAKE_PAYMENT_FAILURE
});

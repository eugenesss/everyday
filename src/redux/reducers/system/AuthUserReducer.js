/**
 * Auth User Reducers
 */
import { NotificationManager } from "react-notifications";
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  HANDLE_REGISTER_FORM
} from "Types";

/**
 * initial auth user
 */
const INIT_STATE = {
  user: localStorage.getItem("user_id"),
  loading: false,
  register: {
    form: {
      email: "",
      password: "",
      repassword: undefined,
      priceplan: "",
      userInfo: { firstName: "", lastName: "" },
      companyInfo: { name: "" },
      paymentInfo: {
        name: "",
        payment_name: "",
        paymentType: "CreditCard",
        payment_no: "",
        payment_username: "",
        payment_company: "",
        payment_expiry: "",
        payment_code: ""
      }
    },
    loading: false,
    success: false
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    /**
     * Login User
     */
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      NotificationManager.success("User Logged In");
      return { ...state, loading: false, user: action.payload };
    case LOGIN_USER_FAILURE:
      NotificationManager.error(action.payload);
      return { ...state, loading: false };

    /**
     * Log out User
     */
    case LOGOUT_USER:
      return { ...state };
    case LOGOUT_USER_SUCCESS:
      return { ...state, user: null };
    case LOGOUT_USER_FAILURE:
      return { ...state };

    /**
     * Register
     */
    case SIGNUP_USER:
      return { ...state, register: { ...state.register, loading: true } };
    case SIGNUP_USER_SUCCESS:
      NotificationManager.success("Accout Created");
      return {
        ...state,
        register: { ...state.register, loading: false, success: true }
      };
    case SIGNUP_USER_FAILURE:
      NotificationManager.error(action.payload);
      console.log(action.payload);
      return {
        ...state,
        register: { ...state.register, loading: false }
      };

    /**
     * Handle Change
     */
    case HANDLE_REGISTER_FORM:
      if (action.payload.type == "userInfo")
        return {
          ...state,
          register: {
            ...state.register,
            form: {
              ...state.register.form,
              userInfo: {
                ...state.register.form.userInfo,
                [action.payload.field]: action.payload.value
              }
            }
          }
        };
      else if (action.payload.type == "companyInfo")
        return {
          ...state,
          register: {
            ...state.register,
            form: {
              ...state.register.form,
              companyInfo: {
                ...state.register.form.companyInfo,
                [action.payload.field]: action.payload.value
              }
            }
          }
        };
      else if (action.payload.type == "paymentInfo")
        return {
          ...state,
          register: {
            ...state.register,
            form: {
              ...state.register.form,
              paymentInfo: {
                ...state.register.form.paymentInfo,
                [action.payload.field]: action.payload.value
              }
            }
          }
        };
      else
        return {
          ...state,
          register: {
            ...state.register,
            form: {
              ...state.register.form,
              [action.payload.field]: action.payload.value
            }
          }
        };
    default:
      return { ...state };
  }
};

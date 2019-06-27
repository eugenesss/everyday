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
  HANDLE_REGISTER_FORM,
  HANDLE_REGISTER_ERROR,
  LOGIN_USER_RESENT_EMAIL,
  LOGIN_USER_RESENT_EMAIL_SUCCESS,
  LOGIN_USER_RESENT_EMAIL_FAILURE,
  LOGIN_USER_RESET_PASSWORD,
  LOGIN_USER_RESET_PASSWORD_SUCCESS,
  LOGIN_USER_RESET_PASSWORD_FAILURE,
  HANDLE_RESET_SUCCESS,
  USER_RIGHTS_SUCCESS,
  USER_RIGHTS_FAILURE
} from "Types";

/**
 * initial auth user
 */
const INIT_STATE = {
  user: localStorage.getItem("user_id"),
  access: [],
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
  },
  error: ""
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

      return {
        ...state,
        loading: false,
        user: action.payload.user,
        access: action.payload.accessRights
      };
    case USER_RIGHTS_SUCCESS:
      return {
        ...state,
        loading: false,
        access: action.payload.accessRights
      };
    case LOGIN_USER_FAILURE:
      if (action.payload.message == "login failed") {
        NotificationManager.error(action.payload.message);
        return {
          ...state,
          loading: false,
          error: action.payload.code,
          user: "userId"
        };
      } else {
        NotificationManager.error(action.payload.message);
        return {
          ...state,
          loading: false,
          error: action.payload.code,
          user: action.payload.details.user
        };
      }
    case USER_RIGHTS_FAILURE:
      NotificationManager.error(
        "Unable to load access rights. Please logout and try again."
      );
      return { ...state, loading: false, error: "" };

    /**
     * Resent Verificaiton Email
     */
    case LOGIN_USER_RESENT_EMAIL:
      return { ...state, loading: false };

    case LOGIN_USER_RESENT_EMAIL_SUCCESS:
      NotificationManager.success(
        "A verification email has been sent, please check in your inbox"
      );
      return { ...state, loading: false, error: "" };

    case LOGIN_USER_RESENT_EMAIL_FAILURE:
      NotificationManager.error(
        "Unable to send verification email, please contact your admin"
      );
      return { ...state, loading: false, error: "" };

    /**
     * Resent Verificaiton Password
     */
    case LOGIN_USER_RESET_PASSWORD:
      return { ...state, loading: false };

    case LOGIN_USER_RESET_PASSWORD_SUCCESS:
      NotificationManager.success(
        "A reset password email has been sent, please check in your inbox"
      );
      return { ...state, loading: false, error: "" };

    case LOGIN_USER_RESET_PASSWORD_FAILURE:
      NotificationManager.error(action.payload);
      return { ...state, loading: false, error: "" };

    case LOGIN_USER_RESENT_EMAIL_SUCCESS:
      NotificationManager.success(
        "A verification email has been sent, please check in your inbox"
      );
      return { ...state, loading: false, error: "" };

    case LOGIN_USER_RESENT_EMAIL_FAILURE:
      NotificationManager.error(
        "Unable to send verification email, please contact your admin"
      );
      return { ...state, loading: false, error: "" };

    /**
     * Resent Verificaiton Password
     */
    case LOGIN_USER_RESET_PASSWORD:
      return { ...state, loading: false };

    case LOGIN_USER_RESET_PASSWORD_SUCCESS:
      NotificationManager.success(
        "A reset password email has been sent, please check in your inbox"
      );
      return { ...state, loading: false, error: "" };

    case LOGIN_USER_RESET_PASSWORD_FAILURE:
      NotificationManager.error(action.payload);
      return { ...state, loading: false, error: "" };

    /**
     * Log out User
     */
    case LOGOUT_USER:
      return { ...state };
    case LOGOUT_USER_SUCCESS:
      NotificationManager.success("Successfully logout");
      return { ...state, user: null };

    case LOGOUT_USER_FAILURE:
      NotificationManager.error('Unable to logout"');
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
      return {
        ...state,
        register: { ...state.register, loading: false }
      };
    /**
     * Reset Success
     */
    case HANDLE_RESET_SUCCESS:
      return {
        ...state,
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

    case HANDLE_REGISTER_ERROR:
      NotificationManager.error(action.payload);
      return { ...state, loading: false };

    default:
      return { ...state };
  }
};

/**
 * Auth User Reducers
 */
import { NotificationManager } from "react-notifications";
import * as types from "Types";

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
  },
  error: "",
  loggedInUser: {
    access: []
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    /**
     * Login User
     */
    case types.LOGIN_USER:
      return { ...state, loading: true };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user.userId,
        loggedInUser: {
          access: action.payload.accessRights,
          ...action.payload.userInfo
        }
      };

    case types.LOGIN_USER_FAILURE:
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
    /**
     * User rights
     */
    case types.USER_RIGHTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedInUser: {
          access: action.payload.accessRights,
          ...action.payload.userInfo
        }
      };
    case types.USER_RIGHTS_FAILURE:
      NotificationManager.error(
        "Unable to load access rights. Please logout and try again."
      );
      return { ...state, loading: false, error: "" };

    /**
     * Resent Verificaiton Email
     */
    case types.LOGIN_USER_RESENT_EMAIL:
      return { ...state, loading: false };

    case types.LOGIN_USER_RESENT_EMAIL_SUCCESS:
      NotificationManager.success(
        "A verification email has been sent, please check in your inbox"
      );
      return { ...state, loading: false, error: "" };

    case types.LOGIN_USER_RESENT_EMAIL_FAILURE:
      NotificationManager.error(
        "Unable to send verification email, please contact your admin"
      );
      return { ...state, loading: false, error: "" };

    /**
     * Resent Verificaiton Password
     */
    case types.LOGIN_USER_RESET_PASSWORD:
      return { ...state, loading: false };

    case types.LOGIN_USER_RESET_PASSWORD_SUCCESS:
      NotificationManager.success(
        "A reset password email has been sent, please check in your inbox"
      );
      return { ...state, loading: false, error: "" };

    case types.LOGIN_USER_RESET_PASSWORD_FAILURE:
      NotificationManager.error(action.payload);
      return { ...state, loading: false, error: "" };

    case types.LOGIN_USER_RESENT_EMAIL_SUCCESS:
      NotificationManager.success(
        "A verification email has been sent, please check in your inbox"
      );
      return { ...state, loading: false, error: "" };

    case types.LOGIN_USER_RESENT_EMAIL_FAILURE:
      NotificationManager.error(
        "Unable to send verification email, please contact your admin"
      );
      return { ...state, loading: false, error: "" };

    /**
     * Resent Verificaiton Password
     */
    case types.LOGIN_USER_RESET_PASSWORD:
      return { ...state, loading: false };

    case types.LOGIN_USER_RESET_PASSWORD_SUCCESS:
      NotificationManager.success(
        "A reset password email has been sent, please check in your inbox"
      );
      return { ...state, loading: false, error: "" };

    case types.LOGIN_USER_RESET_PASSWORD_FAILURE:
      NotificationManager.error(action.payload);
      return { ...state, loading: false, error: "" };

    /**
     * Log out User
     */
    case types.LOGOUT_USER:
      return { ...state };
    case types.LOGOUT_USER_SUCCESS:
      return { ...state, user: null };

    case types.LOGOUT_USER_FAILURE:
      NotificationManager.error('Unable to logout"');
      return { ...state };

    /**
     * Register
     */
    case types.SIGNUP_USER:
      return { ...state, register: { ...state.register, loading: true } };
    case types.SIGNUP_USER_SUCCESS:
      NotificationManager.success("Accout Created");
      return {
        ...state,
        register: { ...state.register, loading: false, success: true }
      };
    case types.SIGNUP_USER_FAILURE:
      NotificationManager.error(action.payload);
      return {
        ...state,
        register: { ...state.register, loading: false }
      };
    /**
     * Reset Success
     */
    case types.HANDLE_RESET_SUCCESS:
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
    case types.HANDLE_REGISTER_FORM:
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

    case types.HANDLE_REGISTER_ERROR:
      NotificationManager.error(action.payload);
      return { ...state, loading: false };

    case types.HANDLE_REGISTER_SUCCESS:
      NotificationManager.success(action.payload);
      return { ...state, loading: false };

    case types.HANDLE_REGISTER_WARNING:
      // var Constants = {
      //   CHANGE: 'change',
      //   INFO: 'info',
      //   SUCCESS: 'success',
      //   WARNING: 'warning',
      //   ERROR: 'error'
      // };
      NotificationManager.warning(action.payload);
      return { ...state, loading: false };

    /* profile stuff */
    case types.UPDATE_PASSWORD:
      return { ...state, loading: true };
    case types.UPDATE_PASSWORD_SUCCESS:
      NotificationManager.success("Password changed successfully.");
      return { ...state, loading: false, error: "" };

    case types.UPDATE_PASSWORD_FAILURE:
      NotificationManager.error(action.payload);
      return { ...state, loading: false, error: "" };

    default:
      return { ...state };
  }
};

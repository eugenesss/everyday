import * as types from "Types/system/WidgetTypes";

const INIT_STATE = {
  crmSummary: { loading: false, data: null }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.GET_CRM_SUMMARY:
      return { ...state, crmSummary: { ...state.crmSummary, loading: true } };
    case types.GET_CRM_SUMMARY_SUCCESS:
      return {
        ...state,
        crmSummary: {
          ...state.crmSummary,
          loading: false,
          data: action.payload
        }
      };
    case types.GET_CRM_SUMMARY_FAILURE:
      return { ...state, crmSummary: { ...state.crmSummary, loading: false } };
    default:
      return { ...state };
  }
};

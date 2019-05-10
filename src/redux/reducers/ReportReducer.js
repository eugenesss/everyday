import { CHANGE_REPORT_VIEW, OPEN_NESTED_VIEW } from "Actions/types";

const INIT_STATE = {
  title: "",
  nestedView: { sales: false, leads: false, deals: false },
  componentToRender: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case OPEN_NESTED_VIEW:
      return {
        ...state,
        nestedView: {
          ...state.nestedView,
          [action.payload]: !state.nestedView[action.payload]
        }
      };

    case CHANGE_REPORT_VIEW:
      return {
        ...state,
        title: action.payload.title,
        componentToRender: action.payload.componentToRender
      };

    default:
      return { ...state };
  }
};

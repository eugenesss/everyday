/**
 * Profile Reducers
 */
import {
  CHANGE_FEED_VIEW
} from "Types";

const INIT_STATE = {
  viewIndex: 0,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case CHANGE_FEED_VIEW:
      console.log(action)
      return {
        ...state,
        viewIndex: action.payload
      };

    default:
      return { ...state };
  }
};

import { NotificationManager } from "react-notifications";
import {
  GET_SALES_TEAM,
  GET_SALES_TEAM_SUCCESS,
  GET_SALES_TEAM_FAILURE
} from "Types";

const INIT_STATE = {
  salesTeamList: {
    loading: false,
    teams: []
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    /**
     * Get Sales Team
     */
    case GET_SALES_TEAM:
      return {
        ...state,
        salesTeamList: { ...state.salesTeamList, loading: true }
      };
    case GET_SALES_TEAM_SUCCESS:
      return {
        ...state,
        salesTeamList: {
          ...state.salesTeamList,
          loading: false,
          teams: action.payload
        }
      };
    case GET_SALES_TEAM_FAILURE:
      NotificationManager.error("Error in fetching Sales Team");
      console.log(action.payload);
      return {
        ...state,
        salesTeamList: {
          ...state.salesTeamList,
          loading: false
        }
      };

    default:
      return { ...state };
  }
};

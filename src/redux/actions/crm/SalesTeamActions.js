import {
  GET_SALES_TEAM,
  GET_SALES_TEAM_SUCCESS,
  GET_SALES_TEAM_FAILURE
} from "Types";

export const getSalesTeam = () => ({
  type: GET_SALES_TEAM
});
export const getSalesTeamSuccess = data => ({
  type: GET_SALES_TEAM_SUCCESS,
  payload: data
});
export const getSalesTeamFailure = error => ({
  type: GET_SALES_TEAM_FAILURE,
  payload: error
});

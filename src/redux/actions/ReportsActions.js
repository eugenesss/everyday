import { CHANGE_REPORT_VIEW, OPEN_NESTED_VIEW } from "./types";

export const changeReportView = (title, componentToRender) => ({
  type: CHANGE_REPORT_VIEW,
  payload: { title, componentToRender }
});

export const openNestedView = nested => ({
  type: OPEN_NESTED_VIEW,
  payload: nested
});

import { OPEN_DIALOG, CLOSE_DIALOG } from "Types";

const INIT_STATE = {
  open: false,
  fullWidth: true,
  maxWidth: "xl"
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return { ...state, open: true };
    case CLOSE_DIALOG:
      return { ...state, open: false };
    default:
      return { ...state };
  }
};

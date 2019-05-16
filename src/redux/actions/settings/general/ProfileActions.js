/**
 * Profile Actions
 */
import { CHANGE_FEED_VIEW } from "Types";

/**
 * Change Feed View
 */
export const onChangeFeedView = (event, newValue) => ({
  type: CHANGE_FEED_VIEW,
  payload: (event, newValue)
});
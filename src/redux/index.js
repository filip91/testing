import { combineReducers } from "redux";
import commentsReducer from "./comment-box/reducer";

export default combineReducers({
  comments: commentsReducer
});

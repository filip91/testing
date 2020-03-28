import { combineReducers } from "redux";
import commentsReducer from "./comment-box/reducer";
import fetchComments from "./fetch-comments/reducer";

export default combineReducers({
  comments: commentsReducer,
  fetchComments
});

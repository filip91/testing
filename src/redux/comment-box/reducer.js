import {
  ADD_COMMENT,
  FETCH_COMMENTS_SUCCESSFULL,
  FETCH_COMMENTS_ERROR
} from "../types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS_SUCCESSFULL:
      const fetchCommentNames = action.payload.data.map(
        comment => comment.name
      );
      return [...state, ...fetchCommentNames];
    case FETCH_COMMENTS_ERROR:
      return "Error no comments";
    default:
      return state;
  }
};

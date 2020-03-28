import {
  FETCH_COMMENTS_SUCCESSFULL,
  FETCH_COMMENTS_STARTED,
  FETCH_COMMENTS_ERROR
} from "../types";
const initialState = {
  comments: [],
  loading: false,
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_STARTED:
      return { ...state, loading: true };
    case FETCH_COMMENTS_SUCCESSFULL:
      return {
        ...state,
        comments: [...state.comments, ...action.payload.data],
        loading: false
      };
    case FETCH_COMMENTS_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

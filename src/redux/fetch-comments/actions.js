import {
  FETCH_COMMENTS_SUCCESSFULL,
  FETCH_COMMENTS_STARTED,
  FETCH_COMMENTS_ERROR
} from "../types";
import axios from "axios";

export const fetchComments = () => dispatch => {
  dispatch(fetchCommentsStarted());
  axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then(response => dispatch(fetchCommentsSuccessfully(response)))
    .catch(err => dispatch(fetchCommentsError(err)));
};

const fetchCommentsStarted = () => ({
  type: FETCH_COMMENTS_STARTED
});

const fetchCommentsSuccessfully = res => ({
  type: FETCH_COMMENTS_SUCCESSFULL,
  payload: res
});

const fetchCommentsError = err => ({
  type: FETCH_COMMENTS_ERROR,
  payload: err
});

import axios from "axios";

export const fetchCommentsApi = () =>
  axios.create({
    baseURL: "http://jsonplaceholder.typicode.com/comments",
    url: "get"
  });

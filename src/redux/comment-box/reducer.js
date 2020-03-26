import { ADD_COMMENT } from "../types";
const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

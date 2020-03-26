import commentReducer from "../reducer";
import { ADD_COMMENT } from "../../types";

it("handles action of add comment", () => {
  const action = {
    type: ADD_COMMENT,
    payload: "some comment"
  };

  const newState = commentReducer([], action);
  expect(newState).toEqual(["some comment"]);
});

it("handles action with unknown type", () => {
  const newState = commentReducer([], { type: "" });
  expect(newState).toEqual([]);
});

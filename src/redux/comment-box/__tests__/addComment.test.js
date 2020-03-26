import { addComment } from "../actions";
import { ADD_COMMENT } from "../../types";

describe("add comment action", () => {
  it("has a correct type", () => {
    const action = addComment();
    expect(action.type).toEqual(ADD_COMMENT);
  });

  it("has a correct payload", () => {
    const action = addComment("some comment");
    expect(action.payload).toEqual("some comment");
  });
});

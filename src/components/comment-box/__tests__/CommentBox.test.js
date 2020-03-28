import { mount } from "enzyme";
import React from "react";
import CommentBox from "../CommentBox";
import Root from "../../../Root";

let wrapped = null;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});
it("has textarea and button submit", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});
describe("the text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });
    wrapped.update();
  });
  it("has text area that allows users to type in some text", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });
  it("has empty textarea when submitted form", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
afterEach(() => {
  wrapped.unmount();
});

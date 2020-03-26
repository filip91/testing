import React from "react";
import Root from "../../../Root";
import CommentList from "../CommentList";
import { mount } from "enzyme";

let wrapped = null;
beforeEach(() => {
  const initialState = {
    comments: ["comment1", "comment2"]
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates one LI element per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows the text for each comment", () => {
  expect(wrapped.render().text()).toContain("comment1");
  expect(wrapped.render().text()).toContain("comment2");
});

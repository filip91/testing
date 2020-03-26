import React from "react";
// import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Home from "../Home";
import CommentBox from "../../../components/comment-box/CommentBox";
import CommentList from "../../../components/comment-list/CommentList";

describe("home render page", () => {
  let wrapped = null;

  beforeEach(() => {
    wrapped = shallow(<Home />);
  });
  it("checks if comment box exist", () => {
    expect(wrapped.find(CommentBox)).toHaveLength(1);
  });
  it("checks if comment list exist", () => {
    expect(wrapped.find(CommentList)).toHaveLength(1);
  });
});

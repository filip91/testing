import React from "react";
import Root from "../Root";
import Home from "../containers/home/Home";
import { mount } from "enzyme";
import moxios from "moxios";

it("can fetch a list of comments and display them", done => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
      status: 200,
      response: [{ name: "Fetch comment 1" }, { name: "Fetch comment 2" }]
    });
  });
  afterEach(() => {
    moxios.uninstall();
  });
  // Attempt to render entire app
  const wrapped = mount(
    <Root>
      <Home />
    </Root>
  );
  // Find fetch comments button and click on it
  wrapped.find(".fetch-comments").simulate("click");
  // Expect to find a list od comments
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    done();
    wrapped.unmount();
  });
});

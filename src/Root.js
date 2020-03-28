import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk, logger)
  );
  return <Provider store={store}>{children}</Provider>;
};

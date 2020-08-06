import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { render } from "@testing-library/react";
import rulesReducer from "./reducers/rules-reducer";

const rootReducer = combineReducers({
  rules: rulesReducer
});

const renderWithRedux = (
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
};
export default renderWithRedux;
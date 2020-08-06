import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { render } from "@testing-library/react";
import rulesReducer from "./reducers/rules-reducer";

const rootReducer = combineReducers({
  rules: rulesReducer
});

const renderWithRedux = (
  ui,
  { 
    initialState, 
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk), 
    ) 
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
};
export default renderWithRedux;
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import RuleList from "./RuleList";
import store from "./store/app-store";

const reactElement = (
  <Provider store={store}>
    <RuleList />
  </Provider>
);
const domElement = document.getElementById("root");
ReactDOM.render(reactElement, domElement);
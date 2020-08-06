import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import RuleList from "./RuleList";
import store from "./store/app-store";

const reactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={RuleList} />
    </BrowserRouter>
  </Provider>
);
const domElement = document.getElementById("root");
ReactDOM.render(reactElement, domElement);
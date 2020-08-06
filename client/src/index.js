import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import RuleList from "./RuleList";
import rules from './data'; 
console.log('rules = ', rules);

const reactElement = <RuleList rules={rules} />;
const domElement = document.getElementById("root");
ReactDOM.render(reactElement, domElement);
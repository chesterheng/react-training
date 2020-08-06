import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

const reactElement = React.createElement("div", null, "Hello World");
const domElement = document.getElementById("root");
ReactDOM.render(reactElement, domElement);
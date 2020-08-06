import React from "react";
import ReactDOM from "react-dom";

const reactElement = React.createElement("div", null, "Hello World");
const domElement = document.getElementById("root");
ReactDOM.render(reactElement, domElement);
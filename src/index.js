import React from "react";
import ReactDOM from "react-dom";

import store from "./redux/store";

import { myAction } from "./redux/actions";

import "./index.css";
import App from "./App";

console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

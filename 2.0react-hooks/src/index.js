import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { countries } from "./data/countries";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <React.StrictMode>
    <App countries={countries} />
  </React.StrictMode>,
  document.getElementById("root")
);

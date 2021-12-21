import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import MainContainer from "./core/core/MainContainer";

ReactDOM.render(
  <React.StrictMode>
    <MainContainer />
  </React.StrictMode>,
  document.getElementById("root")
);

import { createStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import allReducers from "./reducers";
import { myLogger } from "./reducers";
import { applyMiddleware } from "redux";
const store = createStore(allReducers, applyMiddleware(myLogger));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

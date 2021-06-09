import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import App from "./infrastructure/web/routes/App";
import store from "./infrastructure/store/index";

import './infrastructure/web/assets/styles/main.scss'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app"),
);

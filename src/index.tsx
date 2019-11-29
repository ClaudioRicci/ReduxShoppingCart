import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import "./index.css";
import Reducers from "./redux/reducers";
import App from "./App_container";
// import * as serviceWorker from './serviceWorker';

const Store = createStore(Reducers);

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

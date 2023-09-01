import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";
import App from "./components/App";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);

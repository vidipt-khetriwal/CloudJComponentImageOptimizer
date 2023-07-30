import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//redux imports
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./Reducers/rootReducer.jsx";

const store = createStore(RootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);

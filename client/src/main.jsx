import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import { store } from "./store.js";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

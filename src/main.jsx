import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import QuanLyNguoiDungSlice from "./redux/QuanLyNguoiDungSlice";
import QuanLySanSlice from "./redux/QuanLySanSlice";
import App from "./App.jsx";
import "../css/index.css";
export let store = configureStore({
  reducer: {
    QuanLyNguoiDungSlice,
    QuanLySanSlice,
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

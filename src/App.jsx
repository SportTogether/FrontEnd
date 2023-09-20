import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import DangNhapPage from "./Pages/DangNhapPage/DangNhapPage";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="dang-nhap" element={<DangNhapPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

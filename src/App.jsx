import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import DangNhapPage from "./Pages/DangNhapPage/DangNhapPage";
import HomePage from "./Pages/HomePage/HomePage";
import DangKyPage from "./Pages/DangKyPage/DangKyPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage/ResetPasswordPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<DangNhapPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
            <Route path="signup" element={<DangKyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

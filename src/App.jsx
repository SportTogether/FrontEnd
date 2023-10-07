import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import DangNhapPage from "./Pages/DangNhapPage/DangNhapPage";
import HomePage from "./Pages/HomePage/HomePage";
import DangKyPage from "./Pages/DangKyPage/DangKyPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage/ResetPasswordPage";
import DatSanPage from "./Pages/DatSanPage/DatSanPage";
import DetailSanPage from "./Pages/DetailSan/DetailSanPage";
import UuDaiPage from "./Pages/UuDai/UuDaiPage";
import ForumPage from "./Pages/Forum/ForumPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="dat-san" element={<DatSanPage />} />
            <Route path="uu-dai" element={<UuDaiPage />} />
            <Route path="detail" element={<DetailSanPage />} />
            <Route path="forum" element={<ForumPage />} />
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

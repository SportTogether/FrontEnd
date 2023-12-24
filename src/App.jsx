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
import KetNoiPage from "./Pages/KetNoi/KetNoiPage";
import TrangThongTinUser from "./Pages/TrangThongTinUser/TrangThongTinUser";
import ThanhToanPage from "./Pages/ThanhToanPage/ThanhToanPage";
import DangKyDoiTacPage from "./Pages/DangKyDoiTac/DangKyDoiTacPage";
import NewsPage from "./Pages/News/NewsPage";
import GoogleMapPage from "./Pages/GoogleMap/GoogleMapPage";

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
            <Route path="thanh-toan" element={<ThanhToanPage />} />
            <Route path="forum" element={<ForumPage />} />
            <Route path="ket-noi" element={<KetNoiPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="dang-ky-doi-tac" element={<DangKyDoiTacPage />} />
            <Route path="login" element={<DangNhapPage />} />
            <Route path="thong-tin-user" element={<TrangThongTinUser />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
            <Route path="signup" element={<DangKyPage />} />
            <Route path="googlemap" element={<GoogleMapPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { createSlice } from "@reduxjs/toolkit";
import { localStorageServices } from "../Services/localStorageServices";
import { SPORT_LOCALSTORAGE } from "../Constants";
import { Domain_State } from "../Services/config";
//---------------state-----------------
const initialState = {
  checkLogin: localStorageServices.getUser(SPORT_LOCALSTORAGE),
};
const QuanLyNguoiDungSlice = createSlice({
  name: SPORT_LOCALSTORAGE,
  initialState,
  reducers: {
    setLogin: (state, { type, payload }) => {
      state.checkLogin = payload;
    },
  },
});
export const { setLogin } = QuanLyNguoiDungSlice.actions;
//------------------------------------------

//-----------------api----------------------
export let LayTaiKhoanDangNhap = (values) => {
  return Domain_State.post("/api/users/login", values);
};
export let LayTaiKhoanDangKy = (values) => {
  return Domain_State.post("/api/QuanLyNguoiDung/DangKy", values);
};

export default QuanLyNguoiDungSlice.reducer;
//-----------------------------------------

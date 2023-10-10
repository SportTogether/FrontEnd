import { createSlice } from "@reduxjs/toolkit";
import { localStorageServices } from "../Services/localStorageServices";
import { SPORT_LOCALSTORAGE } from "../Constants";
//---------------state-----------------
const initialState = {
  checkLogin: localStorageServices.getUser(SPORT_LOCALSTORAGE),
  listSanUserDaDat: [],
};
const QuanLyNguoiDungSlice = createSlice({
  name: SPORT_LOCALSTORAGE,
  initialState,
  reducers: {
    setLogin: (state, { type, payload }) => {
      state.checkLogin = payload;
    },
    setlistSanUserDaDat: (state, { type, payload }) => {
      state.listSanUserDaDat = payload;
    },
  },
});
export const { setLogin, setlistSanUserDaDat } = QuanLyNguoiDungSlice.actions;
//------------------------------------------
export default QuanLyNguoiDungSlice.reducer;
//-----------------------------------------

import { createSlice } from "@reduxjs/toolkit";
import { SPORT_LOCALSTORAGE } from "../Constants";
//---------------state-----------------
const initialState = {
  listSan: [],
  thongTinSan: {},
  thongTinNgayGio: {},
  thongTinSanDaDat: {},
};
const QuanLySanSlice = createSlice({
  name: SPORT_LOCALSTORAGE,
  initialState,
  reducers: {
    setListSan: (state, { type, payload }) => {
      state.listSan = payload;
    },
    setDetailSan: (state, { type, payload }) => {
      state.thongTinSan = payload;
    },
    setNgayGio: (state, { type, payload }) => {
      state.thongTinNgayGio = payload;
    },
    setDatSan: (state, { type, payload }) => {
      state.thongTinSanDaDat = payload;
    },
  },
});
export const { setListSan, setDetailSan, setNgayGio, setDatSan } =
  QuanLySanSlice.actions;
export default QuanLySanSlice.reducer;

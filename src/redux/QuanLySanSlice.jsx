import { createSlice } from "@reduxjs/toolkit";
import { SPORT_LOCALSTORAGE } from "../Constants";
//---------------state-----------------
const initialState = {
  valueSearch: {},
  listSan: [],
  thongTinSan: {},
  thongTinNgayGio: {},
  thongTinSanDaDat: {},
};
const QuanLySanSlice = createSlice({
  name: SPORT_LOCALSTORAGE,
  initialState,
  reducers: {
    setValueSearch: (state, { type, payload }) => {
      state.valueSearch = payload;
    },
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
export const {
  setValueSearch,
  setListSan,
  setDetailSan,
  setNgayGio,
  setDatSan,
} = QuanLySanSlice.actions;
export default QuanLySanSlice.reducer;

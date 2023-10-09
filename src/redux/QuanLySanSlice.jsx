import { createSlice } from "@reduxjs/toolkit";
import { SPORT_LOCALSTORAGE } from "../Constants";
//---------------state-----------------
const initialState = {
  listSan: [],
  thongTinSan: {},
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
  },
});
export const { setListSan, setDetailSan } = QuanLySanSlice.actions;
export default QuanLySanSlice.reducer;

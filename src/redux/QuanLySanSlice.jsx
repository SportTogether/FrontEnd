import { createSlice } from "@reduxjs/toolkit";
import { SPORT_LOCALSTORAGE } from "../Constants";
//---------------state-----------------
const initialState = {
  thongTinSan: {},
};
const QuanLySanSlice = createSlice({
  name: SPORT_LOCALSTORAGE,
  initialState,
  reducers: {
    setDetailYard: (state, { type, payload }) => {
      state.thongTinSan = payload;
    },
  },
});
export const { setDetailYard } = QuanLySanSlice.actions;
export default QuanLySanSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { SPORT_LOCALSTORAGE } from "../Constants";
//---------------state-----------------
const initialState = {
  listSan: [],
};
const QuanLySanSlice = createSlice({
  name: SPORT_LOCALSTORAGE,
  initialState,
  reducers: {
    setListSan: (state, { type, payload }) => {
      state.listSan = payload;
    },
  },
});
export const { setListSan } = QuanLySanSlice.actions;
export default QuanLySanSlice.reducer;

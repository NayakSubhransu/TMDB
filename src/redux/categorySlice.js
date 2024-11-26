import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categorySlice",
  initialState: {
    curr: 1,
  },
  reducers: {
    nextCategory: (state) => {
      if (state.curr < 4) {
        state.curr += 1;
      } else {
        state.curr = 1;
      }
    },
    prevCategory: (state) => {
      if (state.curr > 1) {
        state.curr -= 1;
      } else {
        state.curr = 4;
      }
    },
  },
});

export default categorySlice;

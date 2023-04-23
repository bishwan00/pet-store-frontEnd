import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      if (action.payload) {
        state.value += action.payload;
      } else {
        state.value += 1;
      }
    },
    decrement: (state) => {
      state.value -= 1;
    },
    refresh: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, refresh } = counterSlice.actions;

export default counterSlice.reducer;

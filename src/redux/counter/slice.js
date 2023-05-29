import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 100,
};

const counterSlice = createSlice({
  name: "COUNTER",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;

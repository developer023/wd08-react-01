import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  firstname: null,
  userId: null,
};

const userSlice = createSlice({
  name: "USER",
  initialState: initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.email = payload.email;
      state.firstname = payload.firstname;
      state.userId = payload.id;
    },
    removeUser: (state) => {
      state.email = null;
      state.firstname = null;
      state.userId = null;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

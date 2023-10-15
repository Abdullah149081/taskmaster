import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Mir Hussain",
  userTask: [],
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;

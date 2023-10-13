import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: [],
};

export const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;

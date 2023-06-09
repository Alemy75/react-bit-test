import { createSlice } from "@reduxjs/toolkit";

interface widgetState {
  value: number;
}

const initialState: widgetState = {
  value: 0,
};

export const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {},
});

export const widgetAction = widgetSlice.actions;

export default widgetSlice.reducer;

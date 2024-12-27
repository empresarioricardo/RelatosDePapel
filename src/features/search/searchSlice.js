import { createSlice } from "@reduxjs/toolkit";
export const searchSlice = createSlice({
  name: "search",
  initialState: {
    visible: true,
  },
  reducers: {
    setHide: (state, action) => {
      state.visible = action.payload;
    },
  },
});

export const { setHide } = searchSlice.actions;

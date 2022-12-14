import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isLoading: false, notification: null },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    clearNotification(state) {
      state.notification = null;
    },
    loadingBackdropHandler(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;

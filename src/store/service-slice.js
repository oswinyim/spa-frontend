import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    records: [],
  },
  reducers: {
    getServices(state, action) {
      state.records = action.payload;
    },
    createService(state, action) {},
    deleteServices(state, action) {},
  },
});

export const serviceActions = serviceSlice.actions;

export default serviceSlice;

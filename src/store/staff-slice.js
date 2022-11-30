import { createSlice } from "@reduxjs/toolkit";

const staffSlice = createSlice({
  name: "guest",
  initialState: {
    records: [],
  },
  reducers: {
    getStaffs(state, action) {
      state.records = action.payload;
      console.log(state.records);
    },
    createStaff(state, action) {},
    deleteStaffs(state, action) {},
  },
});

export const guestActions = staffSlice.actions;

export default staffSlice;

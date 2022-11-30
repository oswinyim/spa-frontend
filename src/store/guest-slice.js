import { createSlice } from "@reduxjs/toolkit";

const guestSlice = createSlice({
  name: "guest",
  initialState: {
    records: [],
  },
  reducers: {
    getGuests(state, action) {
      state.records = action.payload;
      console.log(state.records);
    },
    createGuest(state, action) {},
    deleteGuests(state, action) {},
  },
});

export const guestActions = guestSlice.actions;

export default guestSlice;

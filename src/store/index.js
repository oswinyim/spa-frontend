import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import authReducer from "./auth";
import serviceSlice from "./service-slice";
import guestSlice from "./guest-slice";
import staffSlice from "./staff-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiSlice.reducer,
    service: serviceSlice.reducer,
    guest: guestSlice.reducer,
    staff: staffSlice.reducer,
  },
});

export default store;

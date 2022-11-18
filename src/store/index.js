import { configureStore } from "@reduxjs/toolkit";
import stopWatchSlice from "./stopWatchSlice";

const store = configureStore({
  reducer: {
    [stopWatchSlice.name]: stopWatchSlice.reducer,
  },
});

export default store;

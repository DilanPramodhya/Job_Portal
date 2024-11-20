import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlice.js";
const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.js";
import jobReducer from "./slices/jobSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    jobs: jobReducer,
  },
});

export default store;

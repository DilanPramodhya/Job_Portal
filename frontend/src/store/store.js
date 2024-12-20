import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.js";
import jobReducer from "./slices/jobSlice.js";
import applicationReducer from "./slices/applicationSlice.js";
import updateProfileReducer from "./slices/updateProfileSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    jobs: jobReducer,
    applications: applicationReducer,
    updateProfile: updateProfileReducer,
  },
});

export default store;

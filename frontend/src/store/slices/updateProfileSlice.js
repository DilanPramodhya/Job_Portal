import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const updateProfileSlice = createSlice({
  name: "updateProfile",
  initialState: {
    loading: false,
    error: null,
    isUpdated: false,
  },
  reducers: {
    updateProfileRequest(state) {
      state.loading = true;
    },
    updateProfileSuccess(state) {
      state.loading = false;
      state.error = null;
      state.isUpdated = true;
    },
    updateProfileFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.isUpdated = false;
    },
    updatePasswordRequest(state) {
      state.loading = true;
    },
    updatePasswordSuccess(state) {
      state.loading = false;
      state.error = null;
      state.isUpdated = true;
    },
    updatePasswordFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.isUpdated = false;
    },
    clearAllUpdateProfileErrors(state) {
      state.error = null;
    },
    profileResetAfterUpdate(state) {
      state.error = null;
      state.isUpdated = false;
      state.loading = false;
    },
  },
});

export const updateProfile = (data) => async (dispatch) => {
  dispatch(updateProfileSlice.actions.updateProfileRequest());
  try {
    const response = await axios.put(
      `http://localhost:4000/api/v1/user/update/profile`,
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    dispatch(
      updateProfileSlice.actions.updateProfileSuccess(response.data.message)
    );
    dispatch(updateProfileSlice.actions.clearAllUpdateProfileErrors());
  } catch (error) {
    dispatch(
      updateProfileSlice.actions.updateProfileFailure(
        error.response.data.message || "Failed to Update Profile"
      )
    );
  }
};

export const clearAllUpdateProfileErrors = () => (dispatch) => {
  dispatch(updateProfileSlice.actions.clearAllUpdateProfileErrors());
};

export const resetUpdateProfileSlice = () => (dispatch) => {
  dispatch(updateProfileSlice.actions.profileResetAfterUpdate());
};

export default updateProfileSlice.reducer;

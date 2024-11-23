import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    loading: false,
    error: null,
    message: null,
    singleJob: {},
    myJobs: {},
  },
  reducers: {
    requestForAllJobs(state) {
      state.loading = true;
      state.error = null;
    },
    successForAllJobs(state, action) {
      state.loading = false;
      state.jobs = action.payload;
      state.error = null;
    },
    failedForAllJobs(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    requestForSingleJob(state) {
      state.message = null;
      state.error = null;
      state.loading = true;
    },
    successForSingleJob(state, action) {
      state.loading = false;
      state.error = null;
      state.singleJob = action.payload;
    },
    failureForSingleJob(state, action) {
      // state.singleJob = state.singleJob;
      state.error = action.payload;
      state.loading = false;
    },
    clearAllError(state) {
      state.error = null;
      //   state.jobs = state.jobs;
    },
    resetJobSlice(state) {
      state.error = null;
      //   state.jobs = state.jobs;
      state.loading = false;
      state.message = null;
      //   state.myJobs = state.myJobs;
      state.singleJob = {};
    },
  },
});

export const fetchJobs =
  (city, niche, searchKeyword = "") =>
  async (dispatch) => {
    try {
      dispatch(jobSlice.actions.requestForAllJobs());
      let link = "http://localhost:4000/api/v1/job/getAll?";
      let queryParams = [];
      if (searchKeyword) {
        queryParams.push(`searchKeyword=${searchKeyword}`);
      }
      if (city) {
        queryParams.push(`city=${city}`);
      }
      if (niche) {
        queryParams.push(`niche=${niche}`);
      }
      link += queryParams.join("&");

      const response = await axios.get(link, { withCredentials: true });

      dispatch(jobSlice.actions.successForAllJobs(response.data.jobs));
      dispatch(jobSlice.actions.clearAllError());
    } catch (error) {
      dispatch(jobSlice.actions.failedForAllJobs(error.response.data.message));
    }
  };

export const fetchSingleJob = (jobId) => async (dispatch) => {
  dispatch(jobSlice.actions.requestForSingleJob());
  // try {
    const response = await axios.get(
      `http://localhost:4000/api/v1/job/get/${jobId}`,
      { withCredentials: true }
    );
    dispatch(jobSlice.actions.successForSingleJob(response.data.job));
    // dispatch(jobSlice.actions.clearAllErrors());
  // } 
};

export const clearAllJobErrors = () => (dispatch) => {
  dispatch(jobSlice.actions.clearAllError());
};

export const resetJobSlice = () => (dispatch) => {
  dispatch(jobSlice.actions.resetJobSlice());
};

export default jobSlice.reducer;

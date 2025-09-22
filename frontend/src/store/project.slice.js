import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const initialState = {
      isLoading: false,
      projectsData: [],
      error: null,
};

export const getAllProjects = createAsyncThunk(
      "project/getAllProjects",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await axios.get(`${baseUrl}/api/v1/project/get-all-projects`, {
                        withCredentials: true,
                  });
                  return response.data;
            } catch (error) {
                  return rejectWithValue(error.response?.data);
            }
      }
);

const projectSlice = createSlice({
      name: "project",
      initialState,
      reducers: {},
      extraReducers: (builder) => {
            builder
                  .addCase(getAllProjects.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(getAllProjects.fulfilled, (state, action) => {
                        state.isLoading = false;
                        state.projectsData = action.payload.data || [];
                        state.error = null;
                  })
                  .addCase(getAllProjects.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                  });
      },
});

export default projectSlice.reducer;

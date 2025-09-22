import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const initialState = {
      isLoading: false,
      skillsData: [],
      error: null,
};

export const getAllSkills = createAsyncThunk(
      "skills/getAllSkills",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await axios.get(`${baseUrl}/api/v1/skills/get-all-skill-categories`, {
                        withCredentials: true,
                  });
                  return response.data;
            } catch (error) {
                  return rejectWithValue(error.response?.data);
            }
      }
);

const skillsSlice = createSlice({
      name: "skills",
      initialState,
      reducers: {},
      extraReducers: (builder) => {
            builder
                  .addCase(getAllSkills.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(getAllSkills.fulfilled, (state, action) => {
                        state.isLoading = false;
                        state.skillsData = action.payload.data || [];
                        state.error = null;
                  })
                  .addCase(getAllSkills.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                  });
      },
});

export default skillsSlice.reducer;

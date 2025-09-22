import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const initialState = {
      isLoading: false,
      servicesData: [],
      error: null,
};

export const getAllServices = createAsyncThunk(
      "services/getAllServices",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await axios.get(`${baseUrl}/api/v1/services/get-all-services`, {
                        withCredentials: true,
                  });
                  return response.data;
            } catch (error) {
                  return rejectWithValue(error.response?.data);
            }
      }
);

const servicesSlice = createSlice({
      name: "services",
      initialState,
      reducers: {},
      extraReducers: (builder) => {
            builder
                  .addCase(getAllServices.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(getAllServices.fulfilled, (state, action) => {
                        state.isLoading = false;
                        state.servicesData = action.payload.data || [];
                        state.error = null;
                  })
                  .addCase(getAllServices.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                  });
      },
});

export default servicesSlice.reducer;

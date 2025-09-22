import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const initialState = {
      isLoading: false,
      aboutData: null,
      error: null,
};

export const addUpdateAboutData = createAsyncThunk(
      "about/updateAboutData",
      async (formData, { rejectWithValue }) => {
            try {
                  const response = await axios.post(`${baseUrl}/api/v1/about/add-and-update-about-content`, formData, { 
                        withCredentials: true,
                  });
                  return response.data;
            } catch (error) {
                  return rejectWithValue(error.response?.data);
            }
      }
);
export const fetchAboutData = createAsyncThunk(
      "about/fetchAboutData",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await axios.get(`${baseUrl}/api/v1/about/get-about-content`, {
                        withCredentials: true,
                  });
                  return response.data;
            } catch (error) {
                  return rejectWithValue(error.response?.data);
            }
      }
);

const aboutSlice = createSlice({
      name: "about",
      initialState,
      reducers: {},
      extraReducers: (builder) => {
            builder.addCase(addUpdateAboutData.pending, (state) => {
                  state.isLoading = true;
                  state.error = null;
            }).addCase(addUpdateAboutData.fulfilled, (state, action) => {
                  state.isLoading = false;
                  state.aboutData = action.payload.data || null;
                  state.error = null;
            }).addCase(addUpdateAboutData.rejected, (state, action) => {
                  state.isLoading = false;
                  state.error = action.payload;
            }).addCase(fetchAboutData.pending, (state) => {
                  state.isLoading = true;
                  state.error = null;
            }).addCase(fetchAboutData.fulfilled, (state, action) => {
                  state.isLoading = false;
                  state.aboutData = action.payload.data || null;
                  state.error = null;
            }).addCase(fetchAboutData.rejected, (state, action) => {
                  state.isLoading = false;
                  state.error = action.payload;
            });
      }
});


export const aboutActions = aboutSlice.actions;
export default aboutSlice.reducer;
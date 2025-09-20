import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const initialState = {
      isLoading: false,
      heroData: null,
      error: null,
};

export const addUpdateHeroData = createAsyncThunk(
      "hero/updateHeroData",
      async (formData, { rejectWithValue }) => {
            try {
                  const response = await axios.post(`${baseUrl}/api/v1/hero/add-and-update-hero-content`, formData, { 
                        withCredentials: true,
                  });
                  return response.data;
            } catch (error) {
                  return rejectWithValue(error.response?.data);
            }
      }
)

const heroSlice = createSlice({
      name: "hero",
      initialState,
      reducers: {},
      extraReducers: (builder) => { 
            builder.addCase(addUpdateHeroData.pending, (state) => {
                  state.isLoading = true;
                  state.error = null;
            }).addCase(addUpdateHeroData.fulfilled, (state, action) => {
                  state.isLoading = false;
                  state.heroData = action.payload.data || null;
                  state.error = null;
            }).addCase(addUpdateHeroData.rejected, (state, action) => {
                  state.isLoading = false;
                  state.error = action.payload;
            });
      }
});

export const heroActions = heroSlice.actions;
export default heroSlice.reducer;
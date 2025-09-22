import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const initialState = {
      isLoading: false,
      educationData: [],
      error: null,
};

export const createEducation = createAsyncThunk(
      "education/createEducation",
      async (formData, { rejectWithValue }) => {
            try {
                  const response = await axios.post(`${baseUrl}/api/v1/education/create-education-details`, formData, {
                        withCredentials: true,
                  });
                  return response.data;
            } catch (error) {
                  return rejectWithValue(error.response?.data);
            }
      }
);

export const getAllEducation = createAsyncThunk(
      "education/getAllEducation",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await axios.get(`${baseUrl}/api/v1/education/get-all-education-details`, {
                        withCredentials: true,
                  });
                  return response.data;
            } catch (error) {
                  return rejectWithValue(error.response?.data);
            }
      }
);

export const getEducationById = createAsyncThunk(
      "education/getEducationById",
      async (id, { rejectWithValue }) => {
            try {
                  const response = await axios.get(`${baseUrl}/api/v1/education/get-education-details/${id}`, {
                        withCredentials: true,
                  });
                  return response.data;
            } catch (error) {
                  return rejectWithValue(error.response?.data);
            }
      }
);

export const updateEducation = createAsyncThunk(
      "education/updateEducation",
      async ({ id, formData }, { rejectWithValue }) => {
            try {
                  const response = await axios.put(`${baseUrl}/api/v1/education/update-education-details/${id}`, formData, {
                        withCredentials: true,
                  });
                  return response.data;
            } catch (error) {
                  return rejectWithValue(error.response?.data);
            }
      }
);

export const deleteEducation = createAsyncThunk(
      "education/deleteEducation",
      async (id, { rejectWithValue }) => {
            try {
                  const response = await axios.delete(`${baseUrl}/api/v1/education/delete-education-details/${id}`, {
                        withCredentials: true,
                  });
                  return response.data;
            } catch (error) {
                  return rejectWithValue(error.response?.data);
            }
      }
);

const educationSlice = createSlice({
      name: "education",
      initialState,
      reducers: {},
      extraReducers: (builder) => {
            builder
                  .addCase(createEducation.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(createEducation.fulfilled, (state, action) => {
                        state.isLoading = false;
                        state.educationData.push(action.payload.data);
                        state.error = null;
                  })
                  .addCase(createEducation.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                  })
                  .addCase(getAllEducation.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(getAllEducation.fulfilled, (state, action) => {
                        state.isLoading = false;
                        state.educationData = action.payload.data || [];
                        state.error = null;
                  })
                  .addCase(getAllEducation.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                  })
                  .addCase(getEducationById.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(getEducationById.fulfilled, (state, action) => {
                        state.isLoading = false;
                        // You might want to handle this differently, e.g., storing the selected education item
                        state.error = null;
                  })
                  .addCase(getEducationById.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                  })
                  .addCase(updateEducation.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(updateEducation.fulfilled, (state, action) => {
                        state.isLoading = false;
                        const index = state.educationData.findIndex(item => item._id === action.payload.data._id);
                        if (index !== -1) {
                              state.educationData[index] = action.payload.data;
                        }
                        state.error = null;
                  })
                  .addCase(updateEducation.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                  })
                  .addCase(deleteEducation.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(deleteEducation.fulfilled, (state, action) => {
                        state.isLoading = false;
                        // The id of the deleted item is not in the payload, so we can't remove it from the state here.
                        // We will refetch the list of education items after a successful delete.
                        state.error = null;
                  })
                  .addCase(deleteEducation.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                  });
      },
});

export const educationActions = educationSlice.actions;
export default educationSlice.reducer;

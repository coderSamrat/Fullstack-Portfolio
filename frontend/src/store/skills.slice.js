import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const initialState = {
      isLoading: false,
      skillsData: [],
      error: null,
};

// Async Thunks
export const createSkillCategory = createAsyncThunk(
      "skills/createSkillCategory",
      async (categoryData, { rejectWithValue }) => {
            try {
                  const response = await axios.post(
                        `${baseUrl}/api/v1/skills/create-skill-category`,
                        categoryData
                  );
                  return response.data.data;
            } catch (error) {
                  return rejectWithValue(error.response.data.message || error.message);
            }
      }
);

export const getAllSkillCategories = createAsyncThunk(
      "skills/getAllSkillCategories",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await axios.get(
                        `${baseUrl}/api/v1/skills/get-all-skill-categories`
                  );
                  return response.data.data;
            } catch (error) {
                  return rejectWithValue(error.response.data.message || error.message);
            }
      }
);

export const getSkillCategoryById = createAsyncThunk(
      "skills/getSkillCategoryById",
      async (id, { rejectWithValue }) => {
            try {
                  const response = await axios.get(
                        `${baseUrl}/api/v1/skills/get-skill-categories/${id}`
                  );
                  return response.data.data;
            } catch (error) {
                  return rejectWithValue(error.response.data.message || error.message);
            }
      }
);

export const deleteSkillCategory = createAsyncThunk(
      "skills/deleteSkillCategory",
      async (id, { rejectWithValue }) => {
            try {
                  await axios.delete(
                        `${baseUrl}/api/v1/skills/delete-skill-category/${id}`
                  );
                  return id;
            } catch (error) {
                  return rejectWithValue(error.response.data.message || error.message);
            }
      }
);

export const addSkillToCategory = createAsyncThunk(
      "skills/addSkillToCategory",
      async ({ id, skillData }, { rejectWithValue }) => {
            try {
                  const response = await axios.post(
                        `${baseUrl}/api/v1/skills/add-skill-to-category/${id}`,
                        skillData
                  );
                  return response.data.data;
            } catch (error) {
                  return rejectWithValue(error.response.data.message || error.message);
            }
      }
);

export const updateSkillToCategory = createAsyncThunk(
      "skills/updateSkillToCategory",
      async ({ categoryId, skillId, skillData }, { rejectWithValue }) => {
            try {
                  const response = await axios.put(
                        `${baseUrl}/api/v1/skills/update-skill-in-category/${categoryId}/${skillId}`,
                        skillData
                  );
                  return response.data.data;
            } catch (error) {
                  return rejectWithValue(error.response.data.message || error.message);
            }
      }
);

export const deleteSkillFromCategory = createAsyncThunk(
      "skills/deleteSkillFromCategory",
      async ({ categoryId, skillId }, { rejectWithValue }) => {
            try {
                  const response = await axios.delete(
                        `${baseUrl}/api/v1/skills/delete-skill-from-category/${categoryId}/${skillId}`
                  );
                  return response.data.data; 
            } catch (error) {
                  return rejectWithValue(error.response.data.message || error.message);
            }
      }
);

const skillsSlice = createSlice({
      name: "skills",
      initialState,
      reducers: {},
      extraReducers: (builder) => {
            builder
                  // createSkillCategory
                  .addCase(createSkillCategory.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(createSkillCategory.fulfilled, (state, action) => {
                        state.isLoading = false;
                        state.skillsData.push(action.payload);
                  })
                  .addCase(createSkillCategory.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                  })
                  // getAllSkillCategories
                  .addCase(getAllSkillCategories.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(getAllSkillCategories.fulfilled, (state, action) => {
                        state.isLoading = false;
                        state.skillsData = action.payload;
                  })
                  .addCase(getAllSkillCategories.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                  })
                  // getSkillCategoryById
                  .addCase(getSkillCategoryById.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(getSkillCategoryById.fulfilled, (state, action) => {
                        state.isLoading = false;
                        // Optionally update a specific category if needed, or just use the data
                        // For now, we'll assume this is for display and not modify skillsData directly
                  })
                  .addCase(getSkillCategoryById.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                  })
                  // deleteSkillCategory
                  .addCase(deleteSkillCategory.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(deleteSkillCategory.fulfilled, (state, action) => {
                        state.isLoading = false;
                        state.skillsData = state.skillsData.filter(
                              (category) => category._id !== action.payload
                        );
                  })
                  .addCase(deleteSkillCategory.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                  })
                  // addSkillToCategory
                  .addCase(addSkillToCategory.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(addSkillToCategory.fulfilled, (state, action) => {
                        state.isLoading = false;
                        const index = state.skillsData.findIndex(
                              (category) => category._id === action.payload._id
                        );
                        if (index !== -1) {
                              state.skillsData[index] = action.payload;
                        }
                  })
                  .addCase(addSkillToCategory.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                  })
                  // updateSkillToCategory
                  .addCase(updateSkillToCategory.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(updateSkillToCategory.fulfilled, (state, action) => {
                        state.isLoading = false;
                        const index = state.skillsData.findIndex(
                              (category) => category._id === action.payload._id
                        );
                        if (index !== -1) {
                              state.skillsData[index] = action.payload;
                        }
                  })
                  .addCase(updateSkillToCategory.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                  })
                  // deleteSkillFromCategory
                  .addCase(deleteSkillFromCategory.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(deleteSkillFromCategory.fulfilled, (state, action) => {
                        state.isLoading = false;
                        const index = state.skillsData.findIndex(
                              (category) => category._id === action.payload._id
                        );
                        if (index !== -1) {
                              state.skillsData[index] = action.payload;
                        }
                  })
                  .addCase(deleteSkillFromCategory.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                  });
      },
});

export const skillsActions = skillsSlice.actions;
export default skillsSlice.reducer;

import { SkillModel } from "../models/skills.model.js";
import { ApiError } from "../utilities/ApiError.js";
import { ApiResponse } from "../utilities/ApiResponse.js";
import { asyncHandler } from "../utilities/asyncHandler.js";

export const createSkillCategory = async (req, res) => {
      try {
            const { category, skills } = req.body;

            if (!category || !skills || !Array.isArray(skills)) {
                  throw new ApiError(400, "Category and skills (array) are required");
            }
            const existingCategory = await SkillModel.findOne({ category });

            if (existingCategory) {
                  throw new ApiError(400, "Category already exists");
            }

            const newSkillCategory = await SkillModel.create({
                  category,
                  skills,
            });

            return res.status(201).json(
                  new ApiResponse(201, newSkillCategory, "Skill category created successfully.")
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);
            
            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
};

export const getAllSkillCategories = asyncHandler(async (req, res) => {
      try {
            const skillCategories = await SkillModel.find();
            return res.status(200).json(
                  new ApiResponse(200, skillCategories, "Skill categories retrieved successfully.")
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);
            
            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const getSkillCategoryById = asyncHandler(async (req, res) => {
      try {
            const { id } = req.params;
            const skillCategory = await SkillModel.findById(id);
            if (!skillCategory) {
                  throw new ApiError(404, "Skill category not found");
            }
            return res.status(200).json(
                  new ApiResponse(200, skillCategory, "Skill category retrieved successfully.")
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);
            
            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const deleteSkillCategory = asyncHandler(async (req, res) => {
      try {
            const { id } = req.params;
            const deletedCategory = await SkillModel.findByIdAndDelete(id);
            if (!deletedCategory) {
                  throw new ApiError(404, "Skill category not found");
            }
            return res.status(200).json(
                  new ApiResponse(200, {}, "Skill category deleted successfully.")
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);
            
            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const addSkillToCategory = asyncHandler(async (req, res) => {
      try {
            const { id } = req.params;
            const { name, level, iconName, iconColor } = req.body;

            if (!name || level === undefined || level === null) {
                  throw new ApiError(400, "Skill name and level are required");
            }

            const category = await SkillModel.findById(id);
            if (!category) {
                  throw new ApiError(404, "Skill category not found");
            }

            category.skills.push({
                  name: name,
                  level: level,
                  iconName: iconName || "",
                  iconColor: iconColor || "",
            });
            await category.save();

            return res.status(200).json(
                  new ApiResponse(200, category, "Skill added to category successfully.")
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);
            
            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const updateSkillToCategory = asyncHandler(async (req, res) => {
      try {
            const { categoryId, skillId } = req.params;
            const { name, level, iconName, iconColor } = req.body;

            if (!categoryId || !skillId) {
                  throw new ApiError(400, "Category ID and Skill ID are required");
            }
            const category = await SkillModel.findById(categoryId);
            if (!category) {
                  throw new ApiError(404, "Skill category not found");
            }
            const skill = category.skills.id(skillId);
            if (!skill) {
                  throw new ApiError(404, "Skill not found in category");
            }

            const updateFields = {};
            if (name) updateFields['skills.$.name'] = name;
            if (level !== undefined) updateFields['skills.$.level'] = level;
            if (iconName) updateFields['skills.$.iconName'] = iconName;
            if (iconColor) updateFields['skills.$.iconColor'] = iconColor;

            if (Object.keys(updateFields).length === 0) {
                  throw new ApiError(400, "No update fields provided.");
            }

            const updateSkillCategory = await SkillModel.findOneAndUpdate(
                  { _id: categoryId, 'skills._id': skillId },
                  { $set: updateFields },
                  { new: true }
            );
            if (!updateSkillCategory) {
                  throw new ApiError(404, "Skill or category not found");
            }
            return res.status(200).json(
                  new ApiResponse(200, updateSkillCategory, "Skill updated in category successfully.")
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);
            
            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const deleteSkillFromCategory = asyncHandler(async (req, res) => {
      try {
            const { categoryId, skillId } = req.params;

            if (!categoryId || !skillId) {
                  throw new ApiError(400, "Category ID and Skill ID are required");
            }

            const updatedCategory = await SkillModel.findByIdAndUpdate(
                  { _id: categoryId },
                  { $pull: { skills: { _id: skillId } } },
                  { new: true }
            );

            if (!updatedCategory) {
                  throw new ApiError(404, "Skill category not found");
            }

            return res.status(200).json(
                  new ApiResponse(200, updatedCategory, "Skill removed from category successfully.")
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);
            
            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});
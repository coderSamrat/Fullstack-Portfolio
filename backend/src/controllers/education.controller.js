import { EducationModel } from "../models/education.model.js";
import { ApiError } from "../utilities/ApiError.js";
import { ApiResponse } from "../utilities/ApiResponse.js";
import { asyncHandler } from "../utilities/asyncHandler.js";

export const createEducation = asyncHandler(async (req, res) => {
      try {
            const { title, description, certification, certificateLink, date } = req.body;
      
            if (!title) {
                  throw new ApiError(400, "Title is required.");
            }
      
            let existingEducation;
            if (certificateLink) {
                  existingEducation = await EducationModel.findOne({
                        $or: [
                              { title: title },
                              { certificateLink: certificateLink }
                        ]
                  });
            } else {
                  existingEducation = await EducationModel.findOne({ title: title });
            }
      
            if (existingEducation) {
                  throw new ApiError(400, "An education entry with this title or certificate link already exists.");
            }
      
            const newEducation = await EducationModel.create({
                  title,
                  description,
                  certification,
                  certificateLink,
                  date,
            });
      
            if (!newEducation) {
                  throw new ApiError(500, "Failed to create the education entry.");
            }
      
            return res.status(201).json(
                  new ApiResponse(201, newEducation, "Education entry created successfully.")
            );
      } catch (error) {
            throw new ApiError(500, "An error occurred while creating the education entry.");
      }
});

export const getAllEducation = asyncHandler(async (req, res) => {
      try {
            const allEducation = await EducationModel.find();
      
            if (!allEducation) {
                  throw new ApiError(404, "No education entries found.");
            }
      
            return res.status(200).json(
                  new ApiResponse(200, allEducation, "All education entries retrieved successfully.")
            );
      } catch (error) {
            throw new ApiError(500, "An error occurred while retrieving education entries.");
      }
});

export const getEducationById = asyncHandler(async (req, res) => {
      try {
            const { id } = req.params;
            const education = await EducationModel.findById(id);
      
            if (!education) {
                  throw new ApiError(404, "Education entry not found.");
            }
      
            return res.status(200).json(
                  new ApiResponse(200, education, "Education entry retrieved successfully.")
            );
      } catch (error) {
            throw new ApiError(500, "An error occurred while retrieving the education entry.");
      }
});

export const updateEducation = asyncHandler(async (req, res) => {
      try {
            const { id } = req.params;
            const { title, description, certification, certificateLink, date } = req.body;
      
            const updatedEducation = await EducationModel.findByIdAndUpdate(
                  id,
                  {
                        $set: {
                              title,
                              description,
                              certification,
                              certificateLink,
                              date,
                        },
                  },
                  { new: true }
            );
      
            if (!updatedEducation) {
                  throw new ApiError(404, "Education entry not found or failed to update.");
            }
      
            return res.status(200).json(
                  new ApiResponse(200, updatedEducation, "Education entry updated successfully.")
            );
      } catch (error) {
            throw new ApiError(500, "An error occurred while updating the education entry.");
      }
});

export const deleteEducation = asyncHandler(async (req, res) => {
      try {
            const { id } = req.params;
      
            const deletedEducation = await EducationModel.findByIdAndDelete(id);
      
            if (!deletedEducation) {
                  throw new ApiError(404, "Education entry not found or failed to delete.");
            }
      
            return res.status(200).json(
                  new ApiResponse(200, {}, "Education entry deleted successfully.")
            );
      } catch (error) {
            throw new ApiError(500, "An error occurred while deleting the education entry.");
      }
});

import { AboutModel } from "../models/about.model.js";
import { ApiError } from "../utilities/ApiError.js";
import { ApiResponse } from "../utilities/ApiResponse.js";
import { asyncHandler } from "../utilities/asyncHandler.js";
import { uploadImageOnCloudinary } from "../utilities/cloudinary.config.js";
import { processParagraphs } from "../utilities/split.helper.js";

export const addAndUpdateAboutContent = asyncHandler(async (req, res) => {
      try {
            const { paragraphs } = req.body;
            const imageFile = req.file;

            const dataToSave = {};

            if (imageFile) {
                  const uploadResult = await uploadImageOnCloudinary(imageFile);
                  if (!uploadResult?.secure_url) {
                        throw new ApiError(500, "Failed to upload image to Cloudinary.");
                  }
                  dataToSave.aboutImage = uploadResult?.secure_url;
            }

            if (paragraphs) {
                  dataToSave.paragraphs = processParagraphs(paragraphs);
            }

            let aboutContent = await AboutModel.findOne();
            let wasCreated = false;

            if (aboutContent) {
                  aboutContent = await AboutModel.findByIdAndUpdate(
                        aboutContent._id,
                        { $set: dataToSave },
                        { new: true, runValidators: true }
                  );
            } else {
                  aboutContent = await AboutModel.create(dataToSave);
                  wasCreated = true;
            }

            if (!aboutContent) {
                  throw new ApiError(500, "Failed to save the 'About' content.");
            }

            const statusCode = wasCreated ? 201 : 200;
            const message = wasCreated
                  ? "About content added successfully."
                  : "About content updated successfully.";

            return res.status(statusCode).json(new ApiResponse(statusCode, aboutContent, message));
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.log(error);
            
            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const getAboutContent = asyncHandler(async (req, res) => {
      try {
            const aboutContent = await AboutModel.findOne();

            if (!aboutContent) {
                  throw new ApiError(404, "'About' content not found.");
            }

            return res.status(200).json(
                  new ApiResponse(200, aboutContent, "'About' content retrieved successfully.")
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.log(error);
            
            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});
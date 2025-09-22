import { HeroModel } from "../models/hero.model.js";
import { ApiError } from "../utilities/ApiError.js";
import { ApiResponse } from "../utilities/ApiResponse.js";
import { asyncHandler } from "../utilities/asyncHandler.js";
import { uploadImageOnCloudinary } from "../utilities/cloudinary.config.js";
import { processSplit} from "../utilities/split.helper.js";

export const addAndUpdateHeroContent = asyncHandler(async (req, res) => {
      try {
            const { name, title, description, resumeLink } = req.body;
            if ([name, title, description, resumeLink].some(field => !field || String(field).trim() === '')) {
                  throw new ApiError(400, "Please provide all required fields.");
            }

            const imageFile = req.file;
      
            const dataToSave = {};
      
            if (name) dataToSave.name = name;
            if (description) dataToSave.description = description;
            if (resumeLink) dataToSave.resumeLink = resumeLink;
            if (title) dataToSave.title = processSplit(title);
      
            if (imageFile) {
                  const uploadResult = await uploadImageOnCloudinary(imageFile);
                  if (!uploadResult?.secure_url) {
                        throw new ApiError(500, "Failed to upload profile image.");
                  }
                  dataToSave.profileImage = uploadResult.secure_url;
            }
      
            let heroContent = await HeroModel.findOne();
            let wasCreated = false;
      
            if (heroContent) {
                  heroContent = await HeroModel.findByIdAndUpdate(
                        heroContent._id,
                        { $set: dataToSave },
                        { new: true }
                  );
            } else {
                  heroContent = await HeroModel.create(dataToSave);
                  wasCreated = true;
            }
      
            if (!heroContent) {
                  throw new ApiError(500, "Failed to save the hero content.");
            }
      
            const statusCode = wasCreated ? 201 : 200;
            const message = wasCreated
                  ? "Hero content added successfully."
                  : "Hero content updated successfully.";
      
            return res.status(statusCode).json(new ApiResponse(statusCode, heroContent, message));
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.log(error);
            
            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const getHeroContent = asyncHandler(async (req, res) => {
      try {
            const heroContent = await HeroModel.find();

            if (!heroContent) {
                  throw new ApiError(404, "Hero content not found.");

            }

            return res.status(200).json(
                  new ApiResponse(200, heroContent, "Hero content fetched successfully.")
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.log(error);
            
            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});
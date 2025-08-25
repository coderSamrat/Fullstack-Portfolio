import { HeroModel } from "../models/hero.model.js";
import { asyncHandler } from "../utilities/asyncHandler.js";
import { uploadImageOnCloudinary } from "../utilities/cloudinary.config.js";

const processTitles = (title) => {
      if (Array.isArray(title)) {
            return title.filter(Boolean);
      }
      if (typeof title === 'string') {

            return title.split(',').map(t => t.trim()).filter(Boolean);
      }
      return [];
};

export const addHeroContent = asyncHandler(async (req, res) => {
      try {
            const { name, title, description, resumeLink } = req.body;
      
            if (!name || !title || !description || !resumeLink) {
                  return res.status(400).json({
                        message: "Name, title, description, and resumeLink are required.",
                        success: false,
                  });
            }
            const image = req.file;
            if (!image) {
                  return res.status(400).json({
                        message: "Profile image is required.",
                        success: false,
                  });
            }
      
            const existingContent = await HeroModel.findOne();
            if (existingContent) {
                  return res.status(409).json({
                        message: "Hero content already exists. Please use the update route instead.",
                        success: false,
                  });
            }
      
            const uploadImage = await uploadImageOnCloudinary(image);
            if (!uploadImage?.secure_url) {
                  return res.status(500).json({ message: "Failed to upload image.", success: false });
            }
      
            const titlesArray = processTitles(title);
      
            const heroContent = await HeroModel.create({
                  name,
                  title: titlesArray,
                  description,
                  resumeLink,
                  profileImage: uploadImage?.secure_url,
            });
      
            return res.status(201).json({
                  message: "Hero content added successfully.",
                  success: true,
                  data: heroContent
            });
      } catch (error) {
            return res.status(500).json({
                  message: "Internal Server Error",
                  success: false,
                  error: error.message
            });
      }
});

export const getHeroContent = asyncHandler(async (req, res) => {
      try {
            const heroContent = await HeroModel.findOne();
      
            if (!heroContent) {
                  return res.status(404).json({
                        message: "Hero content not found.",
                        success: false,
                  });
            }
      
            return res.status(200).json({
                  message: "Hero content fetched successfully.",
                  success: true,
                  data: heroContent
            });
      } catch (error) {
            return res.status(500).json({
                  message: "Internal Server Error",
                  success: false,
                  error: error.message
            });
      }
});

export const updateHeroContent = asyncHandler(async (req, res) => {
      try {
            const { name, title, description, resumeLink } = req.body;
      
            const existingHeroContent = await HeroModel.findOne();
            if (!existingHeroContent) {
                  return res.status(404).json({
                        message: "Hero content not found. Please add content before updating.",
                        success: false,
                  });
            }
      
            const updateData = {};
            if (name) updateData.name = name;
            if (description) updateData.description = description;
            if (resumeLink) updateData.resumeLink = resumeLink;
            if (title) updateData.title = processTitles(title);
            const image = req.file;
            if (image) {
                  const uploadImage = await uploadImageOnCloudinary(image);
                  if (!uploadImage?.secure_url) {
                        return res.status(500).json({ message: "Failed to upload new image.", success: false });
                  }
                  updateData.profileImage = uploadImage?.secure_url;
            }
            const updatedHeroContent = await HeroModel.findByIdAndUpdate(
                  existingHeroContent._id,
                  { $set: updateData },
                  { new: true, runValidators: true }
            );
      
            return res.status(200).json({
                  message: "Hero content updated successfully.",
                  success: true,
                  data: updatedHeroContent
            });
      } catch (error) {
            return res.status(500).json({
                  message: "Internal Server Error",
                  success: false,
                  error: error.message
            });
      }
});
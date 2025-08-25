import { AboutModel } from "../models/about.model.js";
import { asyncHandler } from "../utilities/asyncHandler.js";
import { uploadImageOnCloudinary } from "../utilities/cloudinary.config.js";

export const addAboutContent = asyncHandler(async (req, res) => {
      try {
            let { paragraphs } = req.body;
            const image = req.file;

            if (!paragraphs || paragraphs.trim() === '') {
                  return res.status(400).json({
                        message: "Paragraphs are required.",
                        success: false,
                        error: true,
                  });
            }

            if (!image) {
                  return res.status(400).json({
                        message: "Image is required.",
                        success: false,
                        error: true,
                  });
            }
            const UpdatingParagraph = paragraphs.split(/(?<=[.?!])\s+/);

            // console.log(UpdatingParagraph);
            

            if (UpdatingParagraph.length === 0) {
                  return res.status(400).json({
                        message: "Paragraphs cannot be empty after splitting. Please provide valid text.",
                        success: false,
                        error: true,
                  });
            }

            const uploadImage = await uploadImageOnCloudinary(image); 
            if (!uploadImage?.secure_url) {
                  return res.status(500).json({
                        message: "Image upload failed.",
                        success: false,
                        error: true,
                  });
            }

            const aboutContent = await AboutModel.create({
                  aboutImage: uploadImage.secure_url,
                  paragraphs: UpdatingParagraph,
            });

            res.status(201).json({
                  message: "About content created successfully.",
                  success: true,
                  data: aboutContent,
            });

      } catch (error) {
            console.error("Error in addAboutContent:", error);
            res.status(500).json({
                  message: "Internal Server Error.",
                  success: false,
                  error: error.message,
            });
      }
});

import { asyncHandler } from "../utilities/asyncHandler.js";
import { ApiError } from "../utilities/ApiError.js";
import { ApiResponse } from "../utilities/ApiResponse.js";
import { ContactDetailsModel } from "../models/contact-details.model.js";
import { uploadImageOnCloudinary } from "../utilities/cloudinary.config.js";

export const addAndUpdateContactDetails = asyncHandler(async (req, res) => {
      try {
            const { name, email, mobile, address } = req.body;
            const imageFile = req.file;

            const dataToSave = {};
            if (name) dataToSave.name = name;
            if (email) dataToSave.email = email;
            if (mobile) dataToSave.mobile = mobile;
            if (address) dataToSave.address = address;
            if (imageFile) {
                  const uploadResult = await uploadImageOnCloudinary(imageFile);
                  if (uploadResult.secure_url) {
                        dataToSave.contactImage = uploadResult?.secure_url;
                  } else {
                        throw new ApiError(500, "Failed to upload image to Cloudinary.");
                  }
            }

            if (Object.keys(dataToSave).length === 0) {
                  throw new ApiError(400, "No valid fields provided for update.");
            }

            let ContactDetailsContent = await ContactDetailsModel.findOne();
            let wasCreated = false;

            if (ContactDetailsContent) {
                  ContactDetailsContent = await ContactDetailsModel.findByIdAndUpdate(
                        { _id: ContactDetailsContent?._id },
                        { $set: dataToSave },
                        { new: true }
                  );
                  if (!ContactDetailsContent) {
                        throw new ApiError(500, "Failed to update contact details.");
                  }
            } else {
                  ContactDetailsContent = await ContactDetailsModel.create(dataToSave);
                  if (!ContactDetailsContent) {
                        throw new ApiError(500, "Failed to create contact details.");
                  }
                  wasCreated = true;
            }

            const statusCode = wasCreated ? 201 : 200;
            const message = wasCreated
                  ? "Contact details added successfully."
                  : "Contact details updated successfully.";

            return res.status(statusCode).json(new ApiResponse(statusCode, ContactDetailsContent, message));
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);
            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }

});

export const getContactDetails = asyncHandler(async (req, res) => {
      try {
            const contactDetails = await ContactDetailsModel.find();
            if (!contactDetails) {
                  throw new ApiError(404, "No contact details found.");
            }
            return res.status(200).json(
                  new ApiResponse(200, contactDetails, "Contact details fetched successfully.")
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);
            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});
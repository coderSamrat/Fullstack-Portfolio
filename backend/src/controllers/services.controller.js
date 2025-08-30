import { ServiceModel } from "../models/services.model.js";
import { ApiError } from "../utilities/ApiError.js";
import { ApiResponse } from "../utilities/ApiResponse.js";
import { asyncHandler } from "../utilities/asyncHandler.js";
import { processSplit } from "../utilities/split.helper.js";

export const createServices = asyncHandler(async (req, res) => {
      try {
            const { title, description, icon, features } = req.body;

            if ([title, description, icon, features].some(field => !field || String(field).trim() === '')) {
                  throw new ApiError(400, "Please provide all required fields.");
            }

            const existingServices = await ServiceModel.findOne({ title: title });

            if (existingServices) {
                  throw new ApiError(409, "Service with this title already exists.");
            }

            const processedFeatures = features ? processSplit(features) : [];

            const newServices = await ServiceModel.create({
                  title,
                  description,
                  icon,
                  features: processedFeatures
            });

            return res.status(201).json(
                  new ApiResponse(201, newServices, "Service created successfully.")
            );

      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);

            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const getAllServices = asyncHandler(async (req, res) => {
      try {

            const services = await ServiceModel.find();

            if (!services) {
                  throw new ApiError(400, "Services not Found");
            }

            return res.status(200).json(
                  new ApiResponse(200, services, "Services retrieved successfully.")
            );

      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);

            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const getServicesById = asyncHandler(async (req, res) => {
      try {

            const { servicesId } = req.params;

            if (!servicesId) {
                  throw new ApiError(400, "Services Id not found");
            }

            const services = await ServiceModel.findById({ _id: servicesId });

            if (!services) {
                  throw new ApiError(400, "Services not Found");
            }

            return res.status(200).json(
                  new ApiResponse(200, services, "Services retrieved successfully.")
            );

      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);

            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const updateServices = asyncHandler(async (req, res) => {
      try {
            const { servicesId } = req.params;

            if (!servicesId) {
                  throw new ApiError(400, "Services Id not found");
            }

            const { title, description, icon, features } = req.body;

            const updateFields = {};

            if (title) updateFields.title = title;
            if (description) updateFields.description = description;
            if (icon) updateFields.icon = icon;
            if (features) updateFields.features = processSplit(features);

            if (Object.keys(updateFields).length === 0) {
                  throw new ApiError(400, "No update fields provided.");
            }

            const updatedServices = await ServiceModel.findByIdAndUpdate(
                  { _id: servicesId },
                  { $set: updateFields },
                  { new: true }
            );

            if (!updatedServices) {
                  throw new ApiError(404, "Services not found or failed to update.");
            }

            return res.status(200).json(
                  new ApiResponse(200, updatedServices, "Services updated successfully.")
            );

      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);

            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const deleteServices = asyncHandler(async (req, res) => {
      try {
            const { servicesId } = req.params;

            if (!servicesId) {
                  throw new ApiError(400, "Services Id not found");
            }

            const deletedServices = await ServiceModel.findByIdAndDelete(servicesId);

            if (!deletedServices) {
                  throw new ApiError(404, "Services not found to delete.");
            }
            return res.status(200).json(
                  new ApiResponse(200, {}, "Services deleted successfully.")
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);

            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});
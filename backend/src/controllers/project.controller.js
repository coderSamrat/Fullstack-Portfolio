import { ProjectModel } from '../models/project.model.js';
import { ApiError } from '../utilities/ApiError.js';
import { ApiResponse } from '../utilities/ApiResponse.js';
import { asyncHandler } from '../utilities/asyncHandler.js';
import { processSplit } from '../utilities/split.helper.js';

export const addProject = asyncHandler(async (req, res) => {
      try {
            const { title, description, technologies, githubUrl, liveUrl, status } = req.body;

            if (!title || !description) {
                  throw new ApiError(400, "Title and description are required fields.");
            }

            const processedTechnologies = technologies ? processSplit(technologies) : [];

            const existingProject = await ProjectModel.findOne(
                  {
                        $or: [{
                              title: title,
                              description: description
                        }]
                  }
            );

            if (existingProject) {
                  throw new ApiError(409, "A project with the same title or description already exists.");
            }

            const newProject = await ProjectModel.create({
                  title,
                  description,
                  technologies: processedTechnologies,
                  githubUrl,
                  liveUrl,
                  status
            });

            if (!newProject) {
                  throw new ApiError(500, "Failed to create the project.");
            }
            return res.status(201).json(
                  new ApiResponse(201, newProject, "Project created successfully.")
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);

            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const getAllProjects = asyncHandler(async (req, res) => {
      try {
            const projects = await ProjectModel.find();
            if (!projects) {
                  throw new ApiError(400, "Project not Found");
            }
            return res.status(200).json(
                  new ApiResponse(200, projects, "Project retrieved successfully.")
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);

            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const getProjectById = asyncHandler(async (req, res) => {
      try {

            const { projectId } = req.params;
            if (!projectId) {
                  throw new ApiError(400, "Project Id not found");
            }
            const project = await ProjectModel.findById({ _id: projectId });
            if (!project) {
                  throw new ApiError(400, "Project not Found");
            }
            return res.status(200).json(
                  new ApiResponse(200, project, "Project retrieved successfully.")
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);

            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const updateProject = asyncHandler(async (req, res) => {
      try {

            const { projectId } = req.params;
            if (!projectId) {
                  throw new ApiError(400, "Project Id not found");
            }

            const { title, description, technologies, githubUrl, liveUrl, status } = req.body;

            const updateFields = {};

            if (title) updateFields.title = title;
            if (description) updateFields.description = description;
            if (technologies) updateFields.technologies = technologies;
            if (githubUrl) updateFields.githubUrl = githubUrl;
            if (liveUrl) updateFields.liveUrl = liveUrl;
            if (status) updateFields.status = status;

            if (Object.keys(updateFields).length === 0) {
                  throw new ApiError(400, "No valid fields provided for update.");
            }

            const updateProject = await ProjectModel.findByIdAndUpdate(
                  { _id: projectId },
                  { $set: updateFields },
                  { new: true }
            );

            if(!updateProject) {
                  throw new ApiError(404, "Project not found or failed to update.")
            }

            return res.status(200).json(
                  new ApiResponse(200, updateProject, "Project updated successfully.")
            );

      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);

            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const deleteProject = asyncHandler(async (req, res) => {
      try {
            const { projectId } = req.params;
            if (!projectId) {
                  throw new ApiError(400, "Project Id not found");
            }

            const deletedProject = await ProjectModel.findByIdAndDelete(projectId);

            if (!deletedProject) {
                  throw new ApiError(404, "Project not found to delete.");
            }

            return res.status(200).json(
                  new ApiResponse(200, {}, "Project deleted successfully.")
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);

            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

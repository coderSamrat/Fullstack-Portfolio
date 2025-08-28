import { Router } from "express";
import {
      addProject,
      deleteProject,
      getAllProjects,
      getProjectById,
      updateProject
} from "../controllers/project.controller.js";

const projectRouter = Router();

projectRouter.route('/add-project').post(addProject);
projectRouter.route('/get-all-projects').get(getAllProjects);
projectRouter.route('/get-project/:projectId').get(getProjectById);
projectRouter.route('/update-project/:projectId').put(updateProject);
projectRouter.route('/delete-project/:projectId').delete(deleteProject);

export { projectRouter };
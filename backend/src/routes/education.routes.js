import { Router } from "express";
import {
    createEducation,
    getAllEducation,
    getEducationById,
    updateEducation,
    deleteEducation,
} from "../controllers/education.controller.js";

const educationRouter = Router();

educationRouter.route("/create-education-details").post(createEducation);
educationRouter.route("/get-all-education-details").get(getAllEducation);
educationRouter.route("/get-education-details/:id").get(getEducationById);
educationRouter.route("/update-education-details/:id").put(updateEducation);
educationRouter.route("/delete-education-details/:id").delete(deleteEducation);

export { educationRouter };

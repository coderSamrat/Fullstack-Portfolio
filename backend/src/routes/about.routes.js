import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { addAndUpdateAboutContent, getAboutContent } from "../controllers/about.controller.js";

const aboutRouter = Router();

aboutRouter.route('/add-and-update-about-content').post(upload.single('aboutImage'), addAndUpdateAboutContent);
aboutRouter.route('/get-about-content').get(getAboutContent);

export { aboutRouter };
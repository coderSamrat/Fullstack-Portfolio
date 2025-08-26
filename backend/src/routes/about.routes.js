import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { addAndUpdateAboutContent } from "../controllers/about.controller.js";

const aboutRouter = Router();

aboutRouter.route('/add-and-update-about-content').post(upload.single('aboutImage'), addAndUpdateAboutContent);

export { aboutRouter };
import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { addAboutContent } from "../controllers/about.controller.js";

const aboutRouter = Router();

aboutRouter.route('/add-about-content').post(upload.single('aboutImage'), addAboutContent);

export { aboutRouter };
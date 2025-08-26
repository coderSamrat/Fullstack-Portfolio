import { Router } from 'express';
import { upload } from '../middleware/multer.middleware.js';
import { addAndUpdateHeroContent, getHeroContent } from '../controllers/hero.controller.js';

const heroRouter = Router();

heroRouter.route('/add-and-update-hero-content').post(upload.single('profileImage'), addAndUpdateHeroContent);
heroRouter.route('/get-hero-content').get(getHeroContent);


export { heroRouter };
import { Router } from 'express';
import { upload } from '../middleware/multer.middleware.js';
import { addHeroContent, getHeroContent, updateHeroContent } from '../controllers/hero.controller.js';

const heroRouter = Router();

heroRouter.route('/add-hero-content').post(upload.single('profileImage'), addHeroContent);
heroRouter.route('/get-hero-content').get(getHeroContent);
heroRouter.route('/update-hero-content').put(updateHeroContent);


export { heroRouter };
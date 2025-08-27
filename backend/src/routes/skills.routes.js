import { Router } from "express";
import {
      addSkillToCategory,
      createSkillCategory,
      deleteSkillCategory,
      deleteSkillFromCategory,
      getAllSkillCategories,
      getSkillCategoryById,
      updateSkillToCategory
} from "../controllers/skills.controller.js";

const skillRouter = Router();

skillRouter.route("/create-skill-category").post(createSkillCategory);
skillRouter.route("/get-all-skill-categories").get(getAllSkillCategories);
skillRouter.route("/get-skill-categories/:id").get(getSkillCategoryById);
skillRouter.route("/delete-skill-category/:id").delete(deleteSkillCategory);
skillRouter.route("/add-skill-to-category/:id").post(addSkillToCategory);
skillRouter.route("/update-skill-in-category/:categoryId/:skillId").put(updateSkillToCategory);
skillRouter.route("/delete-skill-from-category/:categoryId/:skillId").delete(deleteSkillFromCategory);

export { skillRouter };

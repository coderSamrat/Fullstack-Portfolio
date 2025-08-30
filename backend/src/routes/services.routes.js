import { Router } from "express";
import {
      createServices,
      deleteServices,
      getAllServices,
      getServicesById,
      updateServices
} from "../controllers/services.controller.js";

const servicesRouter = Router();

servicesRouter.route("/create-services").post(createServices);
servicesRouter.route("/get-all-services").get(getAllServices);
servicesRouter.route("/get-services/:servicesId").get(getServicesById);
servicesRouter.route("/update-services/:servicesId").put(updateServices);
servicesRouter.route("/delete-services/:servicesId").delete(deleteServices);

export { servicesRouter };
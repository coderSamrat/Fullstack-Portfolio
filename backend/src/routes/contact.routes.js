import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { addAndUpdateContactDetails, getContactDetails } from "../controllers/contact-details.controller.js";
import { contactmeAndSendEmail } from "../controllers/contactme.controller.js";

const contactRouter = Router();

contactRouter.route("/add-update-contact-details").post(upload.single("contactImage"), addAndUpdateContactDetails);
contactRouter.route("/get-contact-details").get(getContactDetails);
contactRouter.route("/send-message").post(contactmeAndSendEmail);

export { contactRouter };
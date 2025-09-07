import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { addAndUpdateContactDetails, getContactDetails } from "../controllers/contact-details.controller.js";
import { contactmeAndSendEmail, getContactMeMessages } from "../controllers/contactme.controller.js";

const contactRouter = Router();

contactRouter.route("/add-update-contact-details").post(upload.single("contactImage"), addAndUpdateContactDetails);
contactRouter.route("/get-contact-details").get(getContactDetails);
contactRouter.route("/send-message").post(contactmeAndSendEmail);
contactRouter.route("/get-all-messages").get(getContactDetails);
contactRouter.route("/get-message/:messageId").get(getContactMeMessages);
contactRouter.route("/delete-message/:messageId").delete(getContactDetails);

export { contactRouter };
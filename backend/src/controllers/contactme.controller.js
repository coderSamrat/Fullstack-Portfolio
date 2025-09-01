import { asyncHandler } from '../utilities/asyncHandler.js';
import { ApiError } from '../utilities/ApiError.js';
import { ApiResponse } from '../utilities/ApiResponse.js';
import { receiverEmailTemplate, senderEmailTemplate } from '../utilities/sendEmailTemplate.js';
import { transporter } from '../utilities/transport.configration.js';
import { ContactMe } from '../models/contact-me.model.js';

const PORTFOLIO_OWNER_NAME = "Samrat Mallick";
const PORTFOLIO_OWNER_EMAIL = process.env.EMAIL_USERNAME;

export const contactmeAndSendEmail = asyncHandler(async (req, res) => {
      try {
            const { name, email, mobile, message } = req.body;
            if (!(name && email && mobile && message)) {
                  console.error("All fields are required.");
                  throw new ApiError(400, "All fields are required.");
            }

            const newContactMessage = await ContactMe.create({
                  name,
                  email,
                  mobile,
                  message
            });

            if (!newContactMessage) {
                  throw new ApiError(500, "Something went wrong while saving the message to the database.");
            }

            const mailReceived = {
                  from: `"${name}" <${PORTFOLIO_OWNER_EMAIL}>`,
                  replyTo: email,
                  bcc: PORTFOLIO_OWNER_EMAIL,
                  cc: PORTFOLIO_OWNER_EMAIL,
                  subject: `🚀 New Message from ${name} via Portfolio`,
                  html: receiverEmailTemplate({ name, email, mobile, message }),
            };

            const mailSendToSender = {
                  from: `"${PORTFOLIO_OWNER_NAME}" <${PORTFOLIO_OWNER_EMAIL}>`,
                  to: email,
                  bcc: PORTFOLIO_OWNER_EMAIL,
                  cc: PORTFOLIO_OWNER_EMAIL,
                  subject: 'Thank you for your message!',
                  html: senderEmailTemplate({ name, message }),
            };

            const [mailReceivedInfo, mailSendToSenderInfo] = await Promise.all([
                  transporter.sendMail(mailReceived),
                  transporter.sendMail(mailSendToSender),
            ]);

            console.log('Emails sent successfully');
            return res.status(200).json(new ApiResponse(200, "Message & emails sent successfully", {
                  savedMessage: newContactMessage,
                  mailReceivedInfo,
                  mailSendToSenderInfo,
            }));

      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);

            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});
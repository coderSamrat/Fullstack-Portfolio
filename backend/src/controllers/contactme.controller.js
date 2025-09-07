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


            if (email) {
                  if (!/^\S+@\S+\.\S+$/.test(email)) {
                        throw new ApiError(400, "Please provide a valid email address.");
                  }
            }

            const phoneRegex = /^\+?[\d\s-]{7,15}$/;
            if (mobile) {
                  if (!phoneRegex.test(mobile)) {
                        throw new ApiError(400, "Please provide a valid phone number, including the country code if applicable.");
                  }
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
                  subject: `🚀 New Message from ${name} via Portfolio`,
                  html: receiverEmailTemplate({ name, email, mobile, message }),
            };

            const mailSendToSender = {
                  from: `"${PORTFOLIO_OWNER_NAME}" <${PORTFOLIO_OWNER_EMAIL}>`,
                  to: email,
                  cc: PORTFOLIO_OWNER_EMAIL,
                  subject: 'Thank you for your message!',
                  html: senderEmailTemplate({ name, message }),
            };

            const [mailReceivedInfo, mailSendToSenderInfo] = await Promise.all([
                  transporter.sendMail(mailReceived),
                  transporter.sendMail(mailSendToSender),
            ]).then((results) => {
                  console.log('Emails sent successfully');
                  return results;
            }).catch((error) => {
                  console.error('Error sending emails:', error);
                  throw new ApiError(500, "Error sending emails", [error.message]);
            });
            return res.status(200).json(
                  new ApiResponse(200, "Message & emails sent successfully", {
                        savedMessage: newContactMessage,
                        mailReceivedInfo,
                        mailSendToSenderInfo,
                  })
            );

      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);

            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const getAllContactMeMessages = asyncHandler(async (req, res) => {
      try {
            const messages = await ContactMe.find();
            if (!messages) {
                  throw new ApiError(404, "No messages found");
            }
            return res.status(200).json(
                  new ApiResponse(200, "Messages fetched successfully", messages)
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);
            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const getContactMeMessages = asyncHandler(async (req, res) => {
      try {
            const { messageId } = req.params;
            if (!messageId) {
                  throw new ApiError(400, "Message ID is required");
            }
            const message = await ContactMe.findById({ _id: messageId });
            if (!message) {
                  throw new ApiError(404, "Message not found");
            }
            return res.status(200).json(
                  new ApiResponse(200, "Message fetched successfully", message)
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);
            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});

export const deleteContactMeMessage = asyncHandler(async (req, res) => {
      try {
            const { messageId } = req.params;
            if (!messageId) {
                  throw new ApiError(400, "Message ID is required");
            }
            const deletedMessage = await ContactMe.findByIdAndDelete({ _id: messageId }, { new: true });
            if (!deletedMessage) {
                  throw new ApiError(404, "Message not found");
            }
            return res.status(200).json(
                  new ApiResponse(200, {}, "Message deleted successfully")
            );
      } catch (error) {
            if (error instanceof ApiError) {
                  throw new Error(error);
            }
            console.error(error);
            throw new ApiError(500, "An unexpected error occurred while processing the request.", [error.message]);
      }
});
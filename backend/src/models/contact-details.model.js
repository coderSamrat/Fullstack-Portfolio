import mongoose, { Schema } from "mongoose";

const contactDetailsSchema = new Schema(
      {
            contactImage: {
                  type: String,
            },
            name: {
                  type: String,
            },
            email: {
                  type: String,
            },
            mobile: {
                  type: String,
            },
            address: {
                  type: String,
            },
            
      }, { timestamps: true }
);

export const ContactDetailsModel = mongoose.model("ContactDetails", contactDetailsSchema);
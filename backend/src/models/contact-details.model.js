import mongoose, { Schema } from "mongoose";

const contactDetailsSchema = new Schema(
      {
            contactImage: {
                  type: String,
                  required: true,
            },
            constctDetails: [
                  {
                        name: String,
                        email: String,
                        mobile: String,
                        address: String,
                  }
            ]
      }, { timestamps: true }
);

export const ContactDetails = mongoose.model("ContactDetails", contactDetailsSchema);
import mongoose, { Schema } from "mongoose";

const constctMeSchema = new Schema({
      name: {
            type: String,
            required: true,
      },
      email: {
            type: String,
            required: true,
      },
      mobile: {
            type: String,
            required: true,
      },
      message: {
            type: String,
            required: true,
      }
}, { timestamps: true });

export const ContactMe = mongoose.model("ContactMe", constctMeSchema);
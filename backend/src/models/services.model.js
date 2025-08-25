import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema(
      {
            title: {
                  type: String,
                  required: true,
            },
            description: {
                  type: String,
                  required: true,
            },
            icon: {
                  type: String,
                  required: true,
            },
            features: {
                  type: [String],
                  required: true,
            },
      }, { timestamps: true }
);
export const ServiceModel = mongoose.model('Service', serviceSchema);
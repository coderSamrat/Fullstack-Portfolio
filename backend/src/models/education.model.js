import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema(
      {
            title: {
                  type: String,
                  required: [true, "Title is required."],
                  trim: true,
            },
            description: {
                  type: String,
            },
            certification: {
                  type: Boolean,
                  default: false,
            },
            certificateLink: {
                  type: String,
                  trim: true,
            },
            date: {
                  type: String,
                  trim: true,
            },
      },
      {
            timestamps: true 
      }
);

export const EducationModel = mongoose.model('Education', educationSchema);

import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema(
      {
            title: {
                  type: String,
                  required: true,
            },
            description: {
                  type: String,
                  required: true,
            },
            certification: {
                  type: Boolean,
                  required: true,
            },
            certificateLink: {
                  type: String,
                  required: true,
            },
            date: {
                  type: String,
                  required: true,
            },
      }, { timestamps: true }
);

export const EducationModel = mongoose.model('Education', educationSchema);
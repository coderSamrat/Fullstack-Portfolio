import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema(
      {
            profileImage: {
                  type: String,
                  required: true,
            },
            name: {
                  type: String,
                  required: true,
            },
            title: {
                  type: [String],
                  required: true,
            },
            description: {
                  type: String,
                  required: true,
            },
            resumeLink: {
                  type: String,
                  required: true,
            },
      }, { timestamps: true }
);

export const HeroModel = mongoose.model('Hero', heroSchema);
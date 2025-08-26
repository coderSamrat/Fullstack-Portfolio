import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema(
      {
            profileImage: {
                  type: String,
            },
            name: {
                  type: String,
            },
            title: {
                  type: [String],
            },
            description: {
                  type: String,
            },
            resumeLink: {
                  type: String,
            },
      }, { timestamps: true }
);

export const HeroModel = mongoose.model('Hero', heroSchema);
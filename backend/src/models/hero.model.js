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
                  validate: [
                        (arr) => Array.isArray(arr) && arr.every(t => typeof t === 'string'),
                        'Title must be an array of strings.'
                  ]
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
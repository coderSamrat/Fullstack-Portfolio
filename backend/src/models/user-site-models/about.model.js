import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema(
      {
            aboutImage: {
                  type: String,
                  required: true,
            },
            paragraphs: {
                  type: [String],
                  required: true,
            }
      }, { timestamps: true }
);

export const AboutModel = mongoose.model('About', aboutSchema);
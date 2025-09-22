import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema(
      {
            aboutImage: {
                  type: String,
            },
            paragraphs: {
                  type: String,
            }
      }, { timestamps: true }
);

export const AboutModel = mongoose.model('About', aboutSchema);
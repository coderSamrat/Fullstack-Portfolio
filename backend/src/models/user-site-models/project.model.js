import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
      {
            title: {
                  type: String,
                  required: true,
            },
            description: {
                  type: String,
                  required: true,
            },
            technologies: {
                  type: Boolean,
            },
            githubUrl: {
                  type: String,
            },
            liveUrl: {
                  type: String,
            },
            status: {
                  type: String,
            },
      }, { timestamps: true }
);

export const ProjectModel = mongoose.model('Project', projectSchema);
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
                  type: [String],
            },
            githubUrl: {
                  type: String,
            },
            liveUrl: {
                  type: String,
            },
            status: {
                  type: String,
                  enum: ['In Progress', 'Completed', 'On Hold'],
                  default: 'Completed',
            },
      }, { timestamps: true }
);

export const ProjectModel = mongoose.model('Project', projectSchema);
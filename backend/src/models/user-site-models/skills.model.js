import mongoose, { Schema } from "mongoose";

const skillSchema = new Schema = (
      {
            category: {
                  type: String,
                  required: true,
            },
            skills: [
                  {
                        name: String,
                        level: Number,
                        iconName: String,
                        iconColor: String,
                  }
            ]
      }, { timestamps: true }
);
export const SkillModel = mongoose.model('Skill', skillSchema);
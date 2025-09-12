import mongoose from "mongoose";

const adminUserSchema = new mongoose.Schema(
      {
            userName: {
                  type: String,
                  required: true,
                  unique: true,
                  trim: true,
            },
            
      }, { timestamps: true }
);

export const AdminUser = mongoose.model("AdminUser", adminUserSchema);
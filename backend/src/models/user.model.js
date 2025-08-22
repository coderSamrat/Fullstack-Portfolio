import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
      // User Schema objects
}, { timestamps: true });

export const UserModel = mongoose.model('User', userSchema);
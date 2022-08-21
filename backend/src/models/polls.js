import mongoose from 'mongoose';
export const questionModel = mongoose.model("Question", questionSchema);
export const userModel = mongoose.model("User", userSchema);
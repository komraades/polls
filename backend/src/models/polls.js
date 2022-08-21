import mongoose from 'mongoose';
import {QuestionSchema, UserSchema} from '../schemas/Polls.js'
export const questionModel = mongoose.model("Question", QuestionSchema);
export const userModel = mongoose.model("User", UserSchema);

import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: ObjectId, // a unique nanoid
  name: String,
});

const VoteSchema = new mongoose.Schema({
  user: UserSchema,
  choice: Boolean,
});

export const QuestionSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  author: UserSchema,
  yesVotes: [VoteSchema],
  noVotes: [VoteSchema],
  createdAt: Date,
});

//TODO: Perhaps a comment section in the future?

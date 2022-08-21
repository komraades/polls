import { ObjectId } from "mongodb";
import { Schema } from "mongoose";

const User = new Schema({
  id: ObjectId, // a unique nanoid
  name: String,
});

const Vote = new Schema({
  user: User,
  choice: Boolean,
});

export const questionSchema = new Schema({
  title: String,
  subtitle: String,
  author: User,
  yesVotes: [Vote],
  noVotes: [Vote],
  createdAt: Date,
});

//TODO: Perhaps a comment section in the future?
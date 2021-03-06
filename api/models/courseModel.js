import { Schema, model } from "mongoose";

const courseModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  enrolled: {
    type: Number,
    default: 0,
  },
  lastUpdated: {
    type: Date,
    default: Date.now(),
  },
  link: [
    {
      type: String,
    }
  ],
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export default new model("course", courseModel);

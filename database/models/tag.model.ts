import { model, Schema, Document, models } from "mongoose";

export interface ITag extends Document {
  name: string;
  description: string;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdAt: Date;
}

const TagSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    default: "",
  },
  questions: {
    type: [Schema.Types.ObjectId],
    default: [],
  },
  followers: {
    type: [Schema.Types.ObjectId],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Tag = models.Tag || model<ITag>("Tag", TagSchema);

export default Tag;

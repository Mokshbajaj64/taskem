import mongoose from 'mongoose';

export interface TagModel extends mongoose.Document {
  name: string;
  description: string;
  color: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const TagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    color: {
      type: String,
      default: 'green',
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Tag = mongoose.model<TagModel>('Tag', TagSchema);
export default Tag;

import mongoose from 'mongoose';

export interface ProjectModel extends mongoose.Document {
  title: string;
  description: string;
  color: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
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

const Project = mongoose.model<ProjectModel>('Project', ProjectSchema);
export default Project;

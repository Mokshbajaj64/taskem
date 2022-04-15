import mongoose from 'mongoose';

export interface ProjectTaskModel extends mongoose.Document {
  title: string;
  description: string;
  userId: string;
  completed: boolean;
  projectId: string
  createdAt: Date;
  updatedAt: Date;
}

const ProjectTasks = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    completed: {
      type: Boolean,
      default: false,
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project"
    }
  },
  {
    timestamps: true,
  }
);

const ProjectTasksBoi = mongoose.model<ProjectTaskModel>('ProjectTasks', ProjectTasks);
export default ProjectTasksBoi;

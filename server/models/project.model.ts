import mongoose from 'mongoose';

export interface ProjectModel extends mongoose.Document {
  name: string;
  description: string;
  color: string;
  userId: string;
  comments:Array
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new mongoose.Schema(
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
    comments:{
      type:Array,
      default:[]
    }
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model<ProjectModel>('Project', ProjectSchema);
export default Project;

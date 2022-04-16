import mongoose from 'mongoose';

export interface TaskModel extends mongoose.Document {
  title: string;
  description: string;
  userId: string;
  isTodayTask: boolean;
  isInboxTask: boolean;
  isWeeklyTask: boolean;
  completed: boolean;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new mongoose.Schema(
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
    isTodayTask: {
      type: Boolean,
    },
    isInboxTask: {
      type: Boolean,
    },
    isWeeklyTask: {
      type: Boolean,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model<TaskModel>('Task', TaskSchema);
export default Task;

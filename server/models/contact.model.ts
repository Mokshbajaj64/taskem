import mongoose, { Schema } from 'mongoose';

export interface ContactModel extends mongoose.Document {
  username: string;
  email: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema: Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 4,
      max: 20,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
      min: 1,
      max: 200,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model<ContactModel>('Contact', ContactSchema);
export default Contact;

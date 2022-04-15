import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserModel extends mongoose.Document {
  username: string;
  email: string;
  password: string;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email is already taken'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    bio: {
      type: String,
      default: 'I love Taskem',
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function (next) {
  let user = this as UserModel;

  if (!user.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();
});

const User = mongoose.model<UserModel>('User', UserSchema);
export default User;

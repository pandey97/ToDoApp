import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is requied"],
    },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    mobileNumber: {
      type: String,
      required: [true, "mobileNumber is requied"],
    }
  },{ timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
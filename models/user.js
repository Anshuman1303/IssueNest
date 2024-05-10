import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  gh_id: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
});

const User = models.User || model("User", UserSchema);

export default User;

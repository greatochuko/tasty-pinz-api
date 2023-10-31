import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please Enter your First Name"],
    },
    lastName: { type: String, required: [true, "Please Enter your Last Name"] },
    email: {
      type: String,
      required: [true, "Please Enter your Email"],
      unique: true,
      lowercase: true,
    },
    password: { type: String, required: [true, "Please Enter your Password"] },
    imgUrl: { type: String, default: "placeholderProfileImage.png" },
    cart: {
      type: [mongoose.SchemaTypes.ObjectId],
      default: [],
      ref: "product",
    },
    orders: {
      type: [mongoose.SchemaTypes.ObjectId],
      default: [],
      ref: "order",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("user", userSchema);

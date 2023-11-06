import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please Enter your First Name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter your Email"],
      unique: true,
      lowercase: true,
    },
    password: { type: String, required: [true, "Please Enter your Password"] },
    imgUrl: { type: String, default: "placeholderProfileImage.png" },
    cart: {
      type: [
        {
          product: { type: mongoose.SchemaTypes.ObjectId, ref: "product" },
          quantity: { type: Number, default: 1 },
        },
      ],
      default: [],
    },
    orders: {
      type: [mongoose.SchemaTypes.ObjectId],
      default: [],
      ref: "order",
    },
    wishList: {
      type: [mongoose.SchemaTypes.ObjectId],
      default: [],
      ref: "product",
    },
    stores: {
      type: [mongoose.SchemaTypes.ObjectId],
      default: [],
      ref: "store",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("user", userSchema);

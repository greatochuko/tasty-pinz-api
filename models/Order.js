import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    status: { type: String, default: "pending" },
    totalPrice: { type: Number },
    products: { type: Array },
    shippingCost: { type: Number },
    notes: { type: String },
  },
  { timestamps: true }
);

export const Order = mongoose.model("order", orderSchema);

import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: [true, "Please enter a title"] },
    description: {
      type: String,
      required: [true, "Please enter a description"],
    },
    category: {
      type: String,
      required: [true, "Please Select a category"],
    },
    price: {
      type: Number,
      required: [true, "Please enter a price"],
    },
    quantity: { type: Number, default: 1 },
    imageUrl: {
      type: String,
      required: [true, "Please select at least one image"],
    },
    reviews: { type: [mongoose.SchemaTypes.ObjectId], ref: "review" },
    rating: { type: Number, default: 5 },
    tags: { type: [String] },
    discount: { type: Number, default: 0 },
    store: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "store",
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("product", productSchema);

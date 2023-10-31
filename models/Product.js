import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: { type: String, required: [true, "Please enter a title"] },
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
    images: {
      type: [String],
      required: [true, "Please select at least one image"],
    },
    reviews: { type: [mongoose.SchemaTypes.ObjectId], ref: "review" },
    rating: { type: Number },
    tags: { type: [String] },
    discount: { type: Number, default: 0 },
    creator: {
      type: mongoose.SchemaTypes.ObjectId,
      required: [true, "Product must have a creator"],
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("product", productSchema);

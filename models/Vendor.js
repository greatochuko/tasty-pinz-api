import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logoUrl: { type: String, required: true },
  phone: { type: String, required: true },
  coverPhotoUrl: { type: String },
  photos: { type: [String] },
  menu: {
    type: [mongoose.SchemaTypes.ObjectId],
    default: [],
    ref: "product",
  },
  creator: { type: mongoose.SchemaTypes.ObjectId, required: true },
});

export const Vendor = mongoose.model("vendor", vendorSchema);

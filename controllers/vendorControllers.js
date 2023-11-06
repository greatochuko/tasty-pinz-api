import { Product } from "../models/Product.js";
import { Vendor } from "../models/Vendor.js";
import { User } from "../models/User.js";

export async function getAllVendors(req, res) {
  const vendors = await Vendor.find().populate({
    path: "vendor",
    select: "name",
  });
  res.json(vendors);
}

export async function getVendor(req, res) {
  const { vendorId } = req.params;
  const vendors = await Vendor.findById(vendorId);
  res.json(vendors);
}

export async function createVendor(req, res) {
  const { name, logoUrl, phone } = req.body;
  try {
    const newVendor = await Vendor.create({
      name,
      logoUrl,
      phone,
      creator: req.userId,
    });
    await User.findByIdAndUpdate(req.userId, {
      $push: { vendors: newVendor._id },
    });
    res.json(newVendor);
  } catch (err) {
    res.json({ error: err.message });
  }
}

export async function getVendorProducts(req, res) {
  const { vendorId } = req.params;
  const products = await Product.find({ vendor: vendorId });
  res.json(products);
}

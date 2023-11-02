import { Product } from "../models/Product.js";
import { Store } from "../models/Store.js";
import { User } from "../models/User.js";

export async function getAllStores(req, res) {
  const stores = await Store.find();
  res.json(stores);
}

export async function getStore(req, res) {
  const { storeId } = req.params;
  const stores = await Store.findById(storeId);
  res.json(stores);
}

export async function createStore(req, res) {
  const { name, logoUrl, phone } = req.body;
  try {
    const newStore = await Store.create({
      name,
      logoUrl,
      phone,
      creator: req.userId,
    });
    await User.findByIdAndUpdate(req.userId, {
      $push: { stores: newStore._id },
    });
    res.json(newStore);
  } catch (err) {
    res.json({ error: err.message });
  }
}

export async function getStoreProducts(req, res) {
  const { storeId } = req.params;
  const products = await Product.find({ store: storeId });
  res.json(products);
}

import { Product } from "../models/Product.js";
import { Store } from "../models/Store.js";
import { User } from "../models/User.js";

export async function getProducts(req, res) {
  const products = await Product.find();
  res.json(products);
}

export async function getOneProduct(req, res) {
  const product = await Product.findById(req.params.productId);
  res.json(product);
}

export async function createProduct(req, res) {
  const {
    name,
    description,
    category,
    price,
    quantity,
    imageUrl,
    storeId,
    ...others
  } = req.body;
  try {
    const newProduct = await Product.create({
      ...others,
      name,
      description,
      category,
      price,
      quantity,
      imageUrl,
      store: storeId,
    });
    // Add new product id to store products
    await Store.findByIdAndUpdate(storeId, {
      $push: { menu: newProduct._id },
    });
    res.json(newProduct);
  } catch (err) {
    res.json({ error: err.message });
  }
}

export async function updateProduct(req, res) {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.productId,
      {
        ...req.body,
      },
      { new: true }
    );
    res.json(product);
  } catch (err) {
    res.json({ error: err.message });
  }
}

export async function addProductToWishlist(req, res) {
  const { productId } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.userId,
      { $push: { wishList: productId } },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.json({ error: err.message });
  }
}

export async function removeProductFromWishlist(req, res) {
  const { productId } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.userId,
      { $pull: { wishList: productId } },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.json({ error: err.message });
  }
}

export async function deleteProduct(req, res) {
  const product = await Product.findById(req.params.productId);
  try {
    await product.deleteOne();
    res.json(product);
  } catch (err) {
    res.json({ error: err.message });
  }
}

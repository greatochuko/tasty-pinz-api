import { User } from "../models/User.js";

export async function addItemToCart(req, res) {
  const { productId, quantity } = req.body;
  console.log(req.body);
  res.json("asf");
  // try {
  //   const user = await User.findById(req.userId);
  //   user.cart.push({ product: productId, quantity });
  //   await user.save();
  //   res.json(user);
  // } catch (err) {
  //   res.json({ error: err.message });
  // }
}

export async function increaseCartItemQuantity(req, res) {
  const { productId } = req.params;
  try {
    const user = await User.findById(req.userId);
    const item = user.cart.find(
      (item) => item.product.toString() === productId
    );
    item.quantity += 1;
    await user.save();
    res.json(user);
  } catch (err) {
    res.json({ error: err.message });
  }
}

export async function decreaseCartItemQuantity(req, res) {
  const { productId } = req.params;
  try {
    const user = await User.findById(req.userId);
    const item = user.cart.find(
      (item) => item.product.toString() === productId
    );
    item.quantity -= 1;
    await user.save();
    res.json(user);
  } catch (err) {
    res.json({ error: err.message });
  }
}

export async function removeItemFromCart(req, res) {
  const { productId } = req.params;
  try {
    const user = await User.findByIdAndUpdate(
      req.userId,
      { $pull: { cart: { product: productId } } },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.json({ error: err.message });
  }
}

export async function clearCart(req, res) {
  try {
    const user = await User.findById(req.userId);
    user.cart = [];
    await user.save();
    res.json(user);
  } catch (err) {
    res.json({ error: err.message });
  }
}

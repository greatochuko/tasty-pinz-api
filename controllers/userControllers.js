import { User } from "../models/User.js";

export async function getUserProfile(req, res) {
  try {
    const user = await User.findById(req.userId)
      .populate({
        path: "cart",
        populate: {
          path: "product",
          select: "title description category price",
        },
      })
      .populate({
        path: "wishList",
        select: "title description category price",
      })
      .populate({
        path: "orders",
        select: "status totalPrice products",
      });
    res.json(user);
  } catch (err) {
    res.json({ error: err.message });
  }
}

export async function editUserProfile(req, res) {
  try {
    const user = await User.findByIdAndUpdate(req.userId, req.body);
    res.json(user);
  } catch (err) {
    res.json({ error: err.message });
  }
}

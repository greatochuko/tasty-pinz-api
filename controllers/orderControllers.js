import { Order } from "../models/Order.js";

export async function createOrder(req, res) {
  const { totalPrice, products, shippingCost, notes } = req.body;
  try {
    const newOrder = await Order.create({
      totalPrice,
      products,
      shippingCost,
      notes,
    });
    res.json(newOrder);
  } catch (err) {
    res.json({ error: err.message });
  }
}

export async function cancelOrder(req, res) {
  const { orderId } = req.params;
  try {
    const order = await Order.findById(orderId);
    order.status = "cancelled";
    await order.save();
    res.json(order);
  } catch (err) {
    res.json({ error: err.message });
  }
}

export async function approveProductOrder(req, res) {
  const { productId } = req.body;
  const { orderId } = req.params;
  try {
    const order = await Order.findById(orderId);
    console.log(order);
    order.products.find((product) => product.id === productId).status =
      "processed";
    await order.save();
    res.json(order);
  } catch (err) {
    res.json({ error: err.message });
  }
}

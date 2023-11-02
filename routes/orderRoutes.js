import { Router } from "express";
import {
  approveProductOrder,
  cancelOrder,
  createOrder,
  getOrders,
} from "../controllers/orderControllers.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const orderRouter = Router();

orderRouter.get("/", authenticate, getOrders);
orderRouter.post("/", authenticate, createOrder);
orderRouter.put("/:orderId", authenticate, cancelOrder);
orderRouter.put("/approve/:orderId", authenticate, approveProductOrder);

export default orderRouter;

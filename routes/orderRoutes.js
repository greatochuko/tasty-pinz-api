import { Router } from "express";
import {
  approveProductOrder,
  cancelOrder,
  createOrder,
} from "../controllers/orderControllers.js";
import {
  authenticate,
  authenticateAdmin,
} from "../middlewares/authMiddleware.js";

const orderRouter = Router();

orderRouter.post("/", authenticate, createOrder);
orderRouter.put("/:orderId", authenticate, cancelOrder);
orderRouter.put("/approve/:orderId", authenticateAdmin, approveProductOrder);

export default orderRouter;

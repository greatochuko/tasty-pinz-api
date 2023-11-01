import { Router } from "express";
import {
  approveProductOrder,
  cancelOrder,
  createOrder,
} from "../controllers/orderControllers.js";
import { authenticateAdmin } from "../middlewares/authMiddleware.js";

const orderRouter = Router();

orderRouter.post("/", createOrder);
orderRouter.put("/:orderId", cancelOrder);
orderRouter.put("/approve/:orderId", authenticateAdmin, approveProductOrder);

export default orderRouter;

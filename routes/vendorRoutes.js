import {
  createVendor,
  getAllVendors,
  getVendor,
  getVendorProducts,
} from "../controllers/vendorControllers.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { Router } from "express";

const vendorRouter = Router();
vendorRouter.get("/", getAllVendors);
vendorRouter.post("/", authenticate, createVendor);
vendorRouter.get("/:vendorId", getVendor);
vendorRouter.get("/:vendorId/products", getVendorProducts);

export default vendorRouter;

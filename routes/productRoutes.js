import { Router } from "express";
import {
  createProduct,
  getOneProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/productControllers.js";
import { authenticateAdmin } from "../middlewares/authMiddleware.js";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/:productId", getOneProduct);
productRouter.post("/", authenticateAdmin, createProduct);
productRouter.put("/:productId", authenticateAdmin, updateProduct);
productRouter.delete("/:productId", authenticateAdmin, deleteProduct);

export default productRouter;

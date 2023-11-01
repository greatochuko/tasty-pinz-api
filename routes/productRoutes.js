import { Router } from "express";
import {
  createProduct,
  getOneProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  addProductToWishlist,
  removeProductFromWishlist,
} from "../controllers/productControllers.js";
import {
  authenticate,
  authenticateAdmin,
} from "../middlewares/authMiddleware.js";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/:productId", getOneProduct);
productRouter.post("/add-to-wishlist", authenticate, addProductToWishlist);
productRouter.post(
  "/remove-from-wishlist",
  authenticate,
  removeProductFromWishlist
);
productRouter.post("/", authenticateAdmin, createProduct);
productRouter.put("/:productId", authenticateAdmin, updateProduct);
productRouter.delete("/:productId", authenticateAdmin, deleteProduct);

export default productRouter;

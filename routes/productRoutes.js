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
import { authenticate } from "../middlewares/authMiddleware.js";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/:productId", getOneProduct);
productRouter.post("/add-to-wishlist", authenticate, addProductToWishlist);
productRouter.post(
  "/remove-from-wishlist",
  authenticate,
  removeProductFromWishlist
);
productRouter.post("/", authenticate, createProduct);
productRouter.put("/:productId", authenticate, updateProduct);
productRouter.delete("/:productId", authenticate, deleteProduct);

export default productRouter;

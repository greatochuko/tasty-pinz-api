import { Router } from "express";
import {
  addItemToCart,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeItemFromCart,
  clearCart,
} from "../controllers/cartControllers.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const cartRouter = Router();

cartRouter.post("/add", authenticate, addItemToCart);
cartRouter.delete("/remove/:productId", authenticate, removeItemFromCart);
cartRouter.put("/increase/:productId", authenticate, increaseCartItemQuantity);
cartRouter.put("/decrease/:productId", authenticate, decreaseCartItemQuantity);
cartRouter.delete("/clear", authenticate, clearCart);

export default cartRouter;

import {
  createStore,
  getAllStores,
  getStore,
  getStoreProducts,
} from "../controllers/storeControllers.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { Router } from "express";

const storeRouter = Router();
storeRouter.get("/", getAllStores);
storeRouter.post("/", authenticate, createStore);
storeRouter.get("/:storeId", getStore);
storeRouter.get("/:storeId/products", getStoreProducts);

export default storeRouter;

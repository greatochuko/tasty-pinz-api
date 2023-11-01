import { Router } from "express";
import {
  editUserProfile,
  getUserProfile,
} from "../controllers/userControllers.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const userRouter = Router();

userRouter.get("/", authenticate, getUserProfile);
userRouter.put("/", authenticate, editUserProfile);

export default userRouter;

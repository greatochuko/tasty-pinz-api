import { Router } from "express";
import {
  changePassword,
  login,
  signup,
} from "../controllers/authControllers.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/change-password", authenticate, changePassword);

export default authRouter;

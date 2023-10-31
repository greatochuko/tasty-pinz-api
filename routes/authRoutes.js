import { Router } from "express";
import { login, signup } from "../controllers/authControllers.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", authenticate, login);

export default authRouter;

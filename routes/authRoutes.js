import { Router } from "express";
import { signup } from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.post("/signup", signup);

export default authRouter;

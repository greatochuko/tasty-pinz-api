import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/authRoutes.js";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes.js";
import { authenticate } from "./middlewares/authMiddleware.js";
import cartRouter from "./routes/cartRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = "mongodb://127.0.0.1:27017/digimallDB";

app.use(express.static("public"));
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);

await mongoose.connect(MONGODB_URI);
app.listen(PORT, () => {
  console.log(`App running at port ${PORT}`);
});

import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/authRoutes.js";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import userRouter from "./routes/userRoutes.js";
import storeRouter from "./routes/storeRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = "mongodb://127.0.0.1:27017/tasty-pinz";

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/user", userRouter);
app.use("/api/store", storeRouter);

await mongoose.connect(MONGODB_URI);
app.listen(PORT, () => {
  console.log(`App running at port ${PORT}`);
});

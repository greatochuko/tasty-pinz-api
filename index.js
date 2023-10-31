import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = "mongodb://127.0.0.1:27017/digimallDB";

app.use(express.static("public"));
app.use(express.json());
app.use("/api/auth", authRouter);

await mongoose.connect(MONGODB_URI);
app.listen(PORT, () => {
  console.log(`App running at port ${PORT}`);
});

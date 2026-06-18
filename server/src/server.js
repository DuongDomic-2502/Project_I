import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import productRoutes from "./routes/ProductRoute.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

// SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
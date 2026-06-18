import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import productRoutes from "./routes/ProductRoute.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

export default app;
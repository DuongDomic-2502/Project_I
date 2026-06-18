import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Lấy tất cả sản phẩm + tạo sản phẩm
router
  .route("/")
  .get(getProducts)
  .post(createProduct);

// Lấy 1 sản phẩm / cập nhật / xoá theo ID
router
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
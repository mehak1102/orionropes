const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductBySlug,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { protectAdmin } = require("../middleware/authMiddleware");

// Public routes
router.get("/", getProducts);
router.get("/:slug", getProductBySlug);

// Admin-only routes
router.post("/", protectAdmin, createProduct);
router.put("/:id", protectAdmin, updateProduct);
router.delete("/:id", protectAdmin, deleteProduct);

module.exports = router;
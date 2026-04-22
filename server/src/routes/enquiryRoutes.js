const express = require("express");
const router = express.Router();
const {
  createEnquiry,
  getEnquiries,
  deleteEnquiry,
} = require("../controllers/enquiryController");
const { protectAdmin } = require("../middleware/authMiddleware");

// Public
router.post("/", createEnquiry);

// Admin-only
router.get("/", protectAdmin, getEnquiries);

router.delete("/:id", protectAdmin, deleteEnquiry);

module.exports = router;
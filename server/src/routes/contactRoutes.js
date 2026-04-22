const express = require("express");
const router = express.Router();
const {
  createContact,
  getContacts,
  deleteContact,
} = require("../controllers/contactController");
const { protectAdmin } = require("../middleware/authMiddleware");

// public
router.post("/", createContact);

// admin only
router.get("/", protectAdmin, getContacts);
router.delete("/:id", protectAdmin, deleteContact);

module.exports = router;
const express = require("express");
const router = express.Router();
const {
  createApplication,
  getApplications,
  updateApplicationStatus,
   deleteApplication,
} = require("../controllers/applicationController");
const { protectAdmin } = require("../middleware/authMiddleware");
const uploadResume = require("../middleware/resumeUploadMiddleware");

// Public
router.post("/", uploadResume.single("resume"), createApplication);

// Admin only
router.get("/", protectAdmin, getApplications);
router.put("/:id/status", protectAdmin, updateApplicationStatus);

router.delete("/:id", protectAdmin, deleteApplication);

module.exports = router;
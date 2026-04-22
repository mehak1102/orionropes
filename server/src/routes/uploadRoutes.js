const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const { uploadImage } = require("../controllers/uploadController");
const { protectAdmin } = require("../middleware/authMiddleware");

router.post("/", protectAdmin, upload.single("image"), uploadImage);

module.exports = router;